resource "aws_acm_certificate" "portfolio_certificate" {
  domain_name = var.domain_name
  subject_alternative_names = [
    "www.${var.domain_name}"
  ]

  validation_method = "DNS"

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Component = "acm"
    Usage     = "cloudfront-ssl"
  }
}