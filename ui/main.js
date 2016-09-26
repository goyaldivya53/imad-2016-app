//console.log('Loaded!');
//counter code
var counter=0;

var button=document.getElementById("counter");
button.onclick=function(){
    //make a request to counter endpoint
    var request=new XMLHttpRequest();    
    
    //capture response
    request.onreadystateChange= function(){
      if(request.readyState===XMLHttpRequest.Done)  {
          if(request.status===200){
              var counter=request.responseText;
          }
      }
    };
    
    //render counter and display in span
  /*  counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();*/
    
};