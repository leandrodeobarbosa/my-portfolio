resource "aws_cloudfront_function" "url_rewrite" {
  name    = var.cloudfront_function_name
  runtime = "cloudfront-js-2.0"
  comment = "Suporte a Pretty URLs para Astro SSG no S3 (OAC)"
  publish = true
  code    = <<EOF
function handler(event) {
    const request = event.request;
    const currentPath = request.uri;
    
    if (currentPath.indexOf('.') !== -1) {
        return request;
    }
    
    if (currentPath.endsWith('/')) {
        request.uri += 'index.html';
        return request;
    }

    request.uri += '/index.html';
    return request;
}
EOF
}
