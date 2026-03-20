output "bucket_name" {
  value = aws_s3_bucket.portfolio_static_site.bucket
}

output "bucket_arn" {
  value = aws_s3_bucket.portfolio_static_site.arn
}

output "acm_certificate_arn" {
  value = aws_acm_certificate.portfolio_certificate.arn
}

output "acm_certificate_domain" {
  value = aws_acm_certificate.portfolio_certificate.domain_name
}

output "acm_certificate_subject_alternative_names" {
  value = aws_acm_certificate.portfolio_certificate.subject_alternative_names
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.portfolio.id
}

output "cloudfront_hosted_zone_id" {
  description = "CloudFront hosted zone ID (used for Route53 alias)"
  value       = aws_cloudfront_distribution.portfolio.hosted_zone_id
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.portfolio.domain_name
}

output "cloudfront_arn" {
  value = aws_cloudfront_distribution.portfolio.arn
}

output "domain_name" {
  value = var.domain_name
}

output "route53_zone_id" {
  value = data.aws_route53_zone.portfolio.zone_id
}

output "website_url" {
  value = "https://${var.domain_name}"
}

output "www_website_url" {
  value = "https://www.${var.domain_name}"
}