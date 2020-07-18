var axios = require('axios');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')

var app = express();


/////////////////////////////////////////////////////////////////////////////
// CORS related Setting
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Body Parsing Code
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
////////////////////////////////////////////////////////////////////////////



app.route('/getmytext').get(cors(),function(req,res) {
    var myText = "My dad is great";
    data = "key=6399739f9bd051c71d15fd309c616173&data=" + req.data;
    console.log(data);
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    console.log("Invoking prepost call");
    var parentres = res;
    axios.post("https://www.prepostseo.com/apis/checkPlag", data, headers).then(res => {
        parentres.send(res.data);
    }).catch((error) => {
        console.log(error);
        parentres.send("Error : Text not found");
    });
    return myText;
});

var server = app.listen(3000,function(){
    console.log("Server started");
});
