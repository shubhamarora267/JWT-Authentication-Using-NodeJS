var jwt = require('jwt-simple');

module.exports = function(req, res, next) {
  // Bypass auth create API from middleware
  if(req.url=="/api/auth/create"){
    next();
  }else{
    // If authorization exist
    if(req.headers['authorization']){
      var token=req.headers['authorization'];
      try{
        // If token is incorrect it will throw an exception
        var decoded = jwt.decode(token, global.jwtSecretKey);
        // If not exception means token is correct
        next();
      }catch (err) {
        res.send({'Error':'Invalid Access Token'});
      }
    }else{
      res.send({'Error':'Auth Token missing in headers'});
    }
  }
};
