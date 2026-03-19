data "aws_route53_zone" "portfolio" {
  name         = var.domain_name
  private_zone = false
}