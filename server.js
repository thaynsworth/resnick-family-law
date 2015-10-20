var express = require('express'),
		nodemailer = require('nodemailer'),
		path = require('path'),
		app = express();

var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "thomas.haynsworth@gmail.com",
		pass: "Champlain8"
	}
});

app.get('/',function(req,res){
	res.sendfile('index.html');
});

app.get('/send',function(req,res){

	var mailOptions={
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}

	console.log(mailOptions);

	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
		console.log(error);
		res.end("error");
		}else{
		console.log("Message sent: " + response.message);
		res.end("sent");
		}
	});
});

app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});