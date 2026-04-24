locals {
  route53_zone_id = var.route53_zone_id != null ? var.route53_zone_id : data.aws_route53_zone.portfolio[0].zone_id
  cloudfront_aliases = var.enable_www_alias ? [
    var.domain_name,
    "www.${var.domain_name}",
  ] : [var.domain_name]
  certificate_sans = var.enable_www_alias ? [
    "www.${var.domain_name}",
  ] : []
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
