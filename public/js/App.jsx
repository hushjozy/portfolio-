import React,{useState} from "react";

App(){
var today= "Todays Time"
   const time= new Date().toLocaleTimeString();
   const[unknownTime,timeSet]=useState(time)
  function clicked(){
  //    setTimeout(function timeSet(time){
// today   ;
  //    },3000);

     setInterval(function (){
       const newTime= new Date().toLocaleTimeString();
        timeSet(newTime);
     },1000);
   };
 };
ReactDOM.render(
 <div>
 <h3 className="btn3" onLoad={clicked}>{unknownTime}</h3>
 // <button className="btn3" onLoad={clicked}>Show Time</button>
   </div>
 document.getElementById('root1'));
