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