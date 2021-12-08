const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const nodemailer=require("nodemailer");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html")
})
app.post("/",function(request,response){
var firstName= request.body.name  ;
var subject="Subject " + request.body.subject;
var eMail="Email " + request.body.email;
var message="Message " + request.body.message;

console.log(firstName, subject, eMail,message);
response.send("<h1>Your Message has been Sent </h1>" + firstName+ "<h2> We will get Back to you soon. </h2>" );
})
app.listen(process.env.PORT||3000,function(){
console.log("server up & running")
})
