resource "aws_s3_bucket_public_access_block" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}