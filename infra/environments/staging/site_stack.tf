data "aws_route53_zone" "authoritative_public" {
  name         = "leandrodeobarbosa.dev."
  private_zone = false
}

locals {
  route53_zone_id               = data.aws_route53_zone.authoritative_public.zone_id
  enable_www_alias              = false
  manage_certificate_validation = true
  cloudfront_function_name      = "portfolio-staging-url-rewrite"
  origin_access_control_name    = "oac-leandrodeobarbosa-portfolio-staging.s3.us-east-1"
}

module "site_stack" {
  source = "../../modules/site_stack"

  aws_region                         = var.aws_region
  project_name                       = var.project_name
  environment                        = var.environment
  bucket_name                        = var.bucket_name
  noncurrent_version_expiration_days = var.noncurrent_version_expiration_days
  abort_multipart_days               = var.abort_multipart_days
  domain_name                        = var.domain_name
  route53_zone_id                    = local.route53_zone_id
  enable_www_alias                   = local.enable_www_alias
  manage_certificate_validation      = local.manage_certificate_validation
  cloudfront_function_name           = local.cloudfront_function_name
  origin_access_control_name         = local.origin_access_control_name
}
