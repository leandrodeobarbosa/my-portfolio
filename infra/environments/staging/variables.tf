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

variable "route53_zone_id" {
  description = "Zone ID do Route53 a ser usado pelos registros do site"
  type        = string
}

variable "enable_www_alias" {
  description = "Habilita aliases e registros DNS para o subdomínio www"
  type        = bool
}

variable "manage_certificate_validation" {
  description = "Gerencia a validação DNS do certificado ACM via Terraform"
  type        = bool
}

variable "cloudfront_function_name" {
  description = "Nome da CloudFront Function de rewrite"
  type        = string
}

variable "origin_access_control_name" {
  description = "Nome do Origin Access Control do CloudFront"
  type        = string
}
