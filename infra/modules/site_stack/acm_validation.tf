locals {
  certificate_validation_domains = toset(local.cloudfront_aliases)
  certificate_validation_records_by_domain = {
    for domain in local.certificate_validation_domains : domain => one([
      for domain_validation_option in aws_acm_certificate.portfolio_certificate.domain_validation_options : {
        name   = domain_validation_option.resource_record_name
        record = domain_validation_option.resource_record_value
        type   = domain_validation_option.resource_record_type
      } if domain_validation_option.domain_name == domain
    ])
  }
}

resource "aws_route53_record" "certificate_validation" {
  for_each = var.manage_certificate_validation ? local.certificate_validation_domains : toset([])

  zone_id = local.route53_zone_id
  name    = local.certificate_validation_records_by_domain[each.value].name
  type    = local.certificate_validation_records_by_domain[each.value].type
  ttl     = 60
  records = [local.certificate_validation_records_by_domain[each.value].record]
}

resource "aws_acm_certificate_validation" "portfolio_certificate" {
  count = var.manage_certificate_validation ? 1 : 0

  certificate_arn         = aws_acm_certificate.portfolio_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.certificate_validation : record.fqdn]
}
