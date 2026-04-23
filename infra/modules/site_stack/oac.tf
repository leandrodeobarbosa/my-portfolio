resource "aws_cloudfront_origin_access_control" "portfolio_s3" {
  name                              = var.origin_access_control_name
  description                       = "Created by CloudFront"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
