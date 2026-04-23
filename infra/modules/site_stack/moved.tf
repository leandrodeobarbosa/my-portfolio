moved {
  from = aws_route53_record.www_a
  to   = aws_route53_record.www_a[0]
}

moved {
  from = aws_route53_record.www_aaaa
  to   = aws_route53_record.www_aaaa[0]
}
