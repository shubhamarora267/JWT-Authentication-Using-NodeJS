const express = require('express');
const app = express();

// To Use JWT auth
const jwt = require('jwt-simple');
const JWTAuthMiddleware = require('./auth/jwt.js');
const bodyParser = require('body-parser');

// Dummy user data to check If Valid User
var user={
  id:'1',
  email:'john@gmail.com',
  password:'john123'
};
// Set jwtSecretKey globally so that it can be used in auth/jwt.js file as well
global.jwtSecretKey='mysecretkey';

// To get the params in the post method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// All API will pass through this middleware
app.all('/api/*', [JWTAuthMiddleware]);

// API to create Auth Token
app.post('/api/auth/create', function(req, res,next) {
  // If user valid then create a token
  if(req.body.email==user.email && req.body.password==user.password){
     var payload={
       userid:1
     };

     // Set the payload and encode it with Secret Ksy
     var token = jwt.encode(payload, global.jwtSecretKey);
     res.json({'token':token});
  }else{ // Send back error
    res.json({'Error':'Invalid email or password'});
  }
});

// Api to get employee data
app.get('/api/employee', function(req, res,next) {
  res.json({'id':'1','name':'john'});
});

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
});

app.listen(3000, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }
  console.log('server is listening on 3000')
});
