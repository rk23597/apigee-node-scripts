const fs = require('fs');
const config = require('./config');
const axios = require('axios');
const stdio = require('stdio');
const config_headers = {
    headers:{
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      "Authorization": "Basic ZWRnZWNsaTplZGdlY2xpc2VjcmV0"
    }
};

var user_input = stdio.getopt({
    'passcode' : {args: 1, required: true}
});
const data = "grant_type=password&response_type=token&passcode="+user_input.passcode;
// console.log(data);

console.log("generating access & refresh token by apigee passcode -----")
axios.post(config.mgmt.login.url, data ,config_headers)
  .then(res => {
    // console.log(JSON.stringify(res));
    fs.writeFileSync("accessToken.txt", res.data.access_token);
    fs.writeFileSync("refreshToken.txt", res.data.refresh_token);
    console.log("Successfully generated access & refresh token-----")

  })
  .catch(error => {
    console.log(error);
  });


  //to run this file execute below command - 
  //node .\generateAccessTokenByPasscode.js --passcode {passcode}