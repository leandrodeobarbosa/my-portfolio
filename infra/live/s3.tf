resource "aws_s3_bucket" "portfolio_static_site" {
  bucket = var.bucket_name

  force_destroy = false
}

resource "aws_s3_bucket_server_side_encryption_configuration" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  rule {
    bucket_key_enabled       = false
    blocked_encryption_types = ["NONE"]

    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

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
  rule {
    id     = "expire-old-cv-files"
    status = "Enabled"

    filter {
      prefix = "cv/"
    }

    expiration {
      days = 30
    }
  }
}

resource "aws_s3_bucket_policy" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipal"
        Effect = "Allow"

        Principal = {
          Service = "cloudfront.amazonaws.com"
        }

        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.portfolio_static_site.arn}/*"

        Condition = {
          ArnLike = {
            "AWS:SourceArn" = var.cloudfront_distribution_arn
          }
        }
      }
    ]
  })
}

resource "aws_s3_bucket_public_access_block" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "portfolio_static_site" {
  bucket = aws_s3_bucket.portfolio_static_site.id

  versioning_configuration {
    status = "Enabled"
  }
}
