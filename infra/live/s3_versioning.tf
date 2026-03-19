resource "aws_s3_bucket_versioning" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  versioning_configuration {
    status = "Enabled"
  }
}