# verify-ses
For AWS lambda function.  
Verify email on SES.

## create lambda function
1. create lambda function by upload zip
2. create apigateway
3. setting apigateway pass parameters ([refrence url](http://stackoverflow.com/questions/31329958/how-to-pass-a-querystring-or-route-parameter-to-aws-lambda-from-amazon-api-gatew))
4. setting apigateway cors ([reference url](http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html))

## request
```bash
{
  email:hoge@hoge.com
}
```