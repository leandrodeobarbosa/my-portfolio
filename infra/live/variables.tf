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

variable "domain_name" {
  description = "Domínio principal do certificado"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ARN do certificado ACM usado pelo CloudFront"
  type        = string
}
