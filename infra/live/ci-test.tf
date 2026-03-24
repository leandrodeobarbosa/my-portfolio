resource "null_resource" "ci_test" {
  count = var.enable_ci_test ? 1 : 0

  triggers = {
    always_run = timestamp()
  }
}
