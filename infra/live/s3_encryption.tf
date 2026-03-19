resource "aws_s3_bucket_server_side_encryption_configuration" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}