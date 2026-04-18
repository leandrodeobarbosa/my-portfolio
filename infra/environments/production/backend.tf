terraform {
  backend "s3" {
    bucket         = "leandro-tfstate-bootstrap"
    key            = "live/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }
}