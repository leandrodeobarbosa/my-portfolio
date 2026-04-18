moved {
  from = aws_acm_certificate.portfolio_certificate
  to   = module.site_stack.aws_acm_certificate.portfolio_certificate
}

moved {
  from = aws_cloudfront_distribution.portfolio
  to   = module.site_stack.aws_cloudfront_distribution.portfolio
}

moved {
  from = aws_cloudfront_function.url_rewrite
  to   = module.site_stack.aws_cloudfront_function.url_rewrite
}

moved {
  from = aws_cloudfront_origin_access_control.portfolio_s3
  to   = module.site_stack.aws_cloudfront_origin_access_control.portfolio_s3
}

moved {
  from = aws_route53_record.root_a
  to   = module.site_stack.aws_route53_record.root_a
}

moved {
  from = aws_route53_record.root_aaaa
  to   = module.site_stack.aws_route53_record.root_aaaa
}

moved {
  from = aws_route53_record.www_a
  to   = module.site_stack.aws_route53_record.www_a
}

moved {
  from = aws_route53_record.www_aaaa
  to   = module.site_stack.aws_route53_record.www_aaaa
}

moved {
  from = aws_s3_bucket.portfolio_static_site
  to   = module.site_stack.aws_s3_bucket.portfolio_static_site
}

moved {
  from = aws_s3_bucket_server_side_encryption_configuration.portfolio_static_site
  to   = module.site_stack.aws_s3_bucket_server_side_encryption_configuration.portfolio_static_site
}

moved {
  from = aws_s3_bucket_lifecycle_configuration.portfolio_static_site
  to   = module.site_stack.aws_s3_bucket_lifecycle_configuration.portfolio_static_site
}

moved {
  from = aws_s3_bucket_policy.portfolio_static_site
  to   = module.site_stack.aws_s3_bucket_policy.portfolio_static_site
}

moved {
  from = aws_s3_bucket_public_access_block.portfolio_static_site
  to   = module.site_stack.aws_s3_bucket_public_access_block.portfolio_static_site
}

moved {
  from = aws_s3_bucket_versioning.portfolio_static_site
  to   = module.site_stack.aws_s3_bucket_versioning.portfolio_static_site
}
