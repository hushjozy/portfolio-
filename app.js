const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(__dirname + "/signup.html")
})
app.post("/",function(request,response){
var firstName=request.body.fName;
var lastName=request.body.lName;
var eMail=request.body.email;
var passWord=request.body.passW;

console.log(firstName, lastName, eMail,passWord);
})
app.listen(process.env.PORT||3000,function(){
console.log("server up & running")
})
