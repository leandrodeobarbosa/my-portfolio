resource "aws_s3_bucket" "portfolio_static_site" {
  bucket = var.bucket_name

  force_destroy = false
}