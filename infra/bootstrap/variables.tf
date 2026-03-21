variable "terraform_state_bucket_name" {
  description = "Nome globalmente único do bucket S3 utilizado para armazenar o estado remoto do Terraform (tfstate)"
  type        = string
}

variable "aws_region" {
  description = "Região da AWS onde os recursos do bootstrap (S3 e DynamoDB) serão provisionados"
  type        = string
  default     = "us-east-1"
}