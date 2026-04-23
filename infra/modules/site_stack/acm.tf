locals {
  route53_zone_id = var.route53_zone_id != null ? var.route53_zone_id : data.aws_route53_zone.portfolio[0].zone_id
  cloudfront_aliases = var.enable_www_alias ? [
    var.domain_name,
    "www.${var.domain_name}",
  ] : [var.domain_name]
  certificate_sans = var.enable_www_alias ? [
    "www.${var.domain_name}",
  ] : []
  certificate_validation_domains = toset(local.cloudfront_aliases)
  certificate_validation_options = {
    for domain in local.certificate_validation_domains : domain => one([
      for dvo in aws_acm_certificate.portfolio_certificate.domain_validation_options : {
        name   = dvo.resource_record_name
        record = dvo.resource_record_value
        type   = dvo.resource_record_type
      } if dvo.domain_name == domain
    ])
  }
}

resource "aws_acm_certificate" "portfolio_certificate" {
  domain_name               = var.domain_name
  subject_alternative_names = local.certificate_sans

  validation_method = "DNS"

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Component = "acm"
    Usage     = "cloudfront-ssl"
  }
}

resource "aws_route53_record" "certificate_validation" {
  for_each = var.manage_certificate_validation ? local.certificate_validation_domains : toset([])

  zone_id = local.route53_zone_id
  name    = local.certificate_validation_options[each.value].name
  type    = local.certificate_validation_options[each.value].type
  ttl     = 60
  records = [local.certificate_validation_options[each.value].record]
}

resource "aws_acm_certificate_validation" "portfolio_certificate" {
  count = var.manage_certificate_validation ? 1 : 0

  certificate_arn         = aws_acm_certificate.portfolio_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.certificate_validation : record.fqdn]
}
