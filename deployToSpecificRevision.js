const fs = require('fs');
const config = require('./config');
const axios = require('axios');
const stdio = require('stdio');
var user_input = stdio.getopt({
    'env' : {args: 1, required: true},
    'api_name' : {args: 1, required: true},
    'revision' :  {args: 1, required: true},
    'access_token': {args: 1, required: true}
});

const config_headers = {
    headers:{
        'Authorization': 'Bearer '+user_input.access_token
    }
};
var org = config.apigee.env[user_input.env].org;
// /revisions/{{revision_number}}/deployments?delay=15&override=true
const getDeployMgmtURL = config.mgmt.host+"/"+config.mgmt.version+"/organizations/"+org+"/environments/"+user_input.env+"/apis/"+user_input.api_name+"/revisions/"+user_input.revision+"/deployments";

console.log("get deployed revision of environment "+user_input.env+".")
axios.get(getDeployMgmtURL,config_headers)
  .then(res => {
    console.log(res.data);
    console.log("Successfully generated access token -----")

  })
  .catch(error => {
    console.log(error);
    fs.writeFileSync("deployedRevision.json", JSON.stringify(error.data));

  }); 


  //node .\getDeployedRevision.js --env test --api_name HeartBeat --access_token {accessToken}