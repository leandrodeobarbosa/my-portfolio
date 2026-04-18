resource "aws_cloudfront_origin_access_control" "portfolio_s3" {
  name                              = "oac-leandrodeobarbosa-portfolio.s3.us-east-1.amazona-mmuskrtrsu5"
  description                       = "Created by CloudFront"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
