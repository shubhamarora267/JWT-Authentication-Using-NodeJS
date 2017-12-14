
<p>This repositry provide a security layer to the APIs using Jason Web Token(JWT) Authentication.</p>

In this repositry we are using the following modules
* Express
* Body Parser
* JWT Simple

Following are steps to setup the repositry on your local system
1. Download or clone the repositry on your system
2. Make sure that you have Node JS installed on your system
3. Execute the following command to install express, body parser and jwt simple module explicitly.
   

```console
$ npm init
```

To start the server execute the following command
```console
$ node server.js
```
Your server will be running on port 3000.

In this repositry we have implmented 2 APIs
* To create JWT Auth Token
* To use the token to get employee data using another API

## To create JWT Auth Token
<p>To create the JWT Auth token for your user send an http POST request to the server using the following endpoint</p>

```console
http://localhost:3000/api/auth/create
```

and use the following payload
```console
{
  email:'john@gmail.com',
  password:'john123'
}
```
<p>A token will be returned in the response.Which can be used to call the further APIs</p>

```console
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOjF9.8k6c-fYyKEDy-p-oAcfrh-_xSCdkwx2yjXGdw-3IAZk"
}
```
## Use Auth Token to call API
<p>Send an http GET request to the server using the following endpoint</p>

```console
http://localhost:3000/api/employee/
```

and pass the token in Authorization
```console
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOjF9.8k6c-fYyKEDy-p-oAcfrh-_xSCdkwx2yjXGdw-3IAZk
```
<p>If your token is invalid it will give error response</p>

```console
{
    "Error": "Invalid Access Token"
}
```
