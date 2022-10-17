
 var apigee = {
        env:{
            test:{
                org:"rakeshkumawat-eval"    
            },
            prod:{
                org:"earthport"
            }
        }
};


var t = "test"
console.log(apigee.env[t])