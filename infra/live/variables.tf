variable "aws_region" {
  description = "Região AWS"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Nome do projeto"
  type        = string
}

variable "environment" {
  description = "Ambiente (production, staging, etc)"
  type        = string
}

variable "bucket_name" {
  description = "Nome do bucket S3 do portfolio"
  type        = string
}

variable "cloudfront_distribution_arn" {
  description = "ARN da distribuição CloudFront"
  type        = string
}

variable "noncurrent_version_expiration_days" {
  description = "Dias para expirar versões antigas"
  type        = number
  default     = 30
}

variable "abort_multipart_days" {
  description = "Dias para abortar uploads incompletos"
  type        = number
  default     = 7
}