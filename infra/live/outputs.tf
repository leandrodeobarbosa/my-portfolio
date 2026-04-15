output "bucket_name" {
  value = aws_s3_bucket.portfolio_static_site.bucket
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.portfolio.id
}

output "domain_name" {
  value = var.domain_name
}

output "website_url" {
  value = "https://${var.domain_name}"
}

output "www_website_url" {
  value = "https://www.${var.domain_name}"
}
