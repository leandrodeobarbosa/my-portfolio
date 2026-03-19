resource "aws_s3_bucket_lifecycle_configuration" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  rule {
    id     = "cleanup-incomplete"
    status = "Enabled"

    abort_incomplete_multipart_upload {
      days_after_initiation = var.abort_multipart_days
    }
  }

  rule {
    id     = "expire-old-versions"
    status = "Enabled"

    noncurrent_version_expiration {
      noncurrent_days = var.noncurrent_version_expiration_days
    }
  }
}