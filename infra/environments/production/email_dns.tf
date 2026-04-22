resource "aws_route53_record" "email_mx" {
  zone_id = "Z0651036AF6S0HILTEF4"
  name    = "leandrodeobarbosa.dev"
  type    = "MX"
  ttl     = 300
  records = [
    "10 mx1.privateemail.com",
    "10 mx2.privateemail.com",
  ]
}

resource "aws_route53_record" "email_spf" {
  zone_id = "Z0651036AF6S0HILTEF4"
  name    = "leandrodeobarbosa.dev"
  type    = "TXT"
  ttl     = 300
  records = [
    "v=spf1 include:spf.privateemail.com ~all",
  ]
}

resource "aws_route53_record" "email_dmarc" {
  zone_id = "Z0651036AF6S0HILTEF4"
  name    = "_dmarc.leandrodeobarbosa.dev"
  type    = "TXT"
  ttl     = 300
  records = [
    "v=DMARC1; p=none; rua=mailto:dmarc@leandrodeobarbosa.dev; adkim=s; aspf=s; pct=100",
  ]
}

resource "aws_route53_record" "email_dkim_default" {
  zone_id = "Z0651036AF6S0HILTEF4"
  name    = "default._domainkey.leandrodeobarbosa.dev"
  type    = "TXT"
  ttl     = 300
  records = [
    "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7N5WpctqFFMbLgaUrG5ps17trNvuYbfx2rrxN57zAXeFwlh1PzFgXsHoD7mPqZcZh/mH/5tgJPRNaDsAdDO/1XJCs7YazvJ1yNQWTtRtESTgTMnm4zutEKel6vSp9vOh6X4/rtFGW3S/M3c3Z7X0\" \"aL2wzyKXBOpIDQEYtEkD8nn9t1D8bqWuL9DWadmaOkqUBjFtYStD3mZgZQa/jgOWwNTK5054p+IHvU4FYr4R/pBQZgqTqdQDr1gnhPNTDgDsEhWEINKn9sQBNGkzyUb7cl1/qWMFywlsq+VUJ+CcVEQcg5ih2KLYw5Oeg3+2SFFndX0\" \"bYJVUIS03Gj9u6+z8OQIDAQAB"
  ]
}
