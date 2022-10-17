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
    'refresh_token' : {args: 1, required: true}
});
const data = "grant_type=refresh_token&refresh_token="+user_input.refresh_token;
// console.log(data);

console.log("generating access token by refresh token-----")
axios.post(config.mgmt.login.url, data ,config_headers)
  .then(res => {
    // console.log(JSON.stringify(res));
    fs.writeFileSync("accessToken.txt", res.data.access_token);
    console.log("Successfully generated access token -----")

  })
  .catch(error => {
    console.log(error);
  });


  //to run this file execute below command - 
  //node .\getAccessTokenByRefreshToken.js --refresh_token {refreshtoken}