module "site_stack" {
  source = "../../modules/site_stack"

  aws_region                         = var.aws_region
  project_name                       = var.project_name
  environment                        = var.environment
  bucket_name                        = var.bucket_name
  noncurrent_version_expiration_days = var.noncurrent_version_expiration_days
  abort_multipart_days               = var.abort_multipart_days
  domain_name                        = var.domain_name
  route53_zone_id                    = var.route53_zone_id
  enable_www_alias                   = var.enable_www_alias
  manage_certificate_validation      = var.manage_certificate_validation
  cloudfront_function_name           = var.cloudfront_function_name
  origin_access_control_name         = var.origin_access_control_name
}
