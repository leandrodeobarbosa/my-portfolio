output "website_url" {
  value = "https://${var.domain_name}"
}

output "www_website_url" {
  value = var.enable_www_alias ? "https://www.${var.domain_name}" : null
}
