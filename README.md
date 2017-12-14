
<p>This repositry provide a security layer to the APIs using Jason Web Token(JWT) Authentication on a Node JS Application.</p>

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

## Available APIs

#### POST `api/auth/create`

You can do a POST to `/users` to create a new user.

The body must have:

* `email`: The email
* `password`: The password


It returns the following:

```json
{
  "token": {jwt}  
}
```

In this application we are just illustrating the JWT part so we are not using any database.For this application you can use a static `email` and `password` combination as follows

```console
{
  email:'john@gmail.com',
  password:'john123'
}
```

#### GET `api/employee`

The JWT - access_token must be sent on the Authorization header as follows
```json
{
  "Authorization": {jwt}  
}
```
If the jwt token is valid the success response will be following


```console
{
    "id": "1",
    "name": "john"
}
```
