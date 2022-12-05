output "lambda_bucket_name" {
  description = "Name of the S3 bucket used to store function code."
  value = aws_s3_bucket.lambda_bucket.id
}

output "lambda_function_name_1" {
  description = "Name of the Lambda function."
  value = aws_lambda_function.hello_world.function_name
}

output "lambda_function_name_2" {
  description = "Name of the Lambda function."
  value = aws_lambda_function.is_par.function_name
}

output "base_url" {
  description = "Base URL for API Gateway stage."

  value = aws_apigatewayv2_stage.lambda.invoke_url
}
