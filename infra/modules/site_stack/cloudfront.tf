resource "aws_cloudfront_distribution" "portfolio" {
  enabled             = true
  comment             = "CDN for static portfolio hosted on S3 with HTTPS via ACM"
  default_root_object = "index.html"
  price_class         = "PriceClass_All"
  is_ipv6_enabled     = true
  http_version        = "http2"

  aliases = local.cloudfront_aliases

  origin {
    domain_name = "${var.bucket_name}.s3.${var.aws_region}.amazonaws.com"
    origin_id   = "${var.bucket_name}-origin"

    origin_access_control_id = aws_cloudfront_origin_access_control.portfolio_s3.id
  }

  default_cache_behavior {
    compress               = true
    target_origin_id       = "${var.bucket_name}-origin"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewrite.arn
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.manage_certificate_validation ? aws_acm_certificate_validation.portfolio_certificate[0].certificate_arn : aws_acm_certificate.portfolio_certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
