const config = require('./config');
const fs = require('fs');
const axios = require('axios');
const config_headers = {
    headers:{
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      "Authorization": "Basic ZWRnZWNsaTplZGdlY2xpc2VjcmV0"
    }
};

const data = "username="+config.mgmt.login.client.id+"&password="+config.mgmt.login.client.secret+"&grant_type=password";

console.log("Getting access token by username & password-----")
axios.post(config.mgmt.login.url, data ,config_headers)
  .then(res => {
    // console.log(JSON.stringify(res));
    fs.writeFileSync("accessToken.txt", res.data.access_token);
    console.log("Successfully generated access token -----")

  })
  .catch(error => {
    console.log(error);
  });
