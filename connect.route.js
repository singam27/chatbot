

var AssistantV1 = require('watson-developer-cloud/assistant/v1');
var express = require('express');
var router = express.Router();

let response = {
  status : 200,
  message : null,
  data : null
}

var assistant = new AssistantV1({
  username: 'apikey',
  password: 'fcWCDWr0xQo-6R7FIc3e5g96rdeVYUWzz-sVN0TkkJZG',
  url: 'https://gateway-syd.watsonplatform.net/assistant/api',
  version: '2018-02-16'
});


router.get('/connect/:msg',(req,res)=>{
  var usermessage= req.params.msg;
  console.log(usermessage);
      
    assistant.message(
      {
        input: { text: usermessage },
        workspace_id: '726c502d-12e8-4ff8-840d-a3269e8849a3'
      }, 
      function(err, results) {
        if (err) {
          console.log(req.params.msg);
          console.log(err);
        
        } else {
           
          //console.log(JSON.stringify(results));
          var item=JSON.parse(JSON.stringify(results));
         // console.log(item.output.text[0]);
          var message=item.output.text[0];
         // console.log(message);
          response.data=message;
          console.log(response);
          res.json(response);
        }
      });


});


module.exports = router;



  
