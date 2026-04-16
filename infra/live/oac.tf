resource "aws_cloudfront_origin_access_control" "portfolio_s3" {
  name                              = "portfolio-s3-oac"
  description                       = "Origin Access Control for the portfolio S3 origin"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
