var express = require('express');
var formidable = require('formidable');
var app = express();
var port = Number(process.env.PORT || 3000);

// Load home page
app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

// File uploading
app.post('/upload', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);
	
	//Start uploading
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });
	
	//Uploading completed
    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });
    
	//Load home page
    res.sendFile(__dirname + '/index.html');
});

// Starting server
app.listen(port, function(){
    console.log("Server started on port "+ port);
});