output "bucket_name" {
  value = aws_s3_bucket.portfolio_static_site.bucket
}

output "bucket_arn" {
  value = aws_s3_bucket.portfolio_static_site.arn
}