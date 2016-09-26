
//counter code


var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //create a request to counter endpoint
    var request=new XMLHttpRequest();    
    
    //capture response
    request.onreadystateChange= function(){
      if(request.readyState===XMLHttpRequest.Done)  {
          if(request.status===200){
              var counter=request.responseText;
               var span=document.getElementById('count');
                span.innerHTML=counter.toString();
          }
      }
    };
    
    //make a request
    
    request.open('GET','http://goyaldivya53.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
    
    //render counter and display in span
  /*  counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();*/
    
};