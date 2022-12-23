
var string="";

//number of buttons in an array
var numberOfbuttons = document.querySelectorAll(".button").length;

//adding addEventListener for each button click
for(var i=0;i<numberOfbuttons;i++){
document.querySelectorAll(".button")[i].addEventListener("click",function(){



  if(this.innerHTML=="="){
    string=eval(string);
    document.querySelector("input").value=string;
  }
  else if(this.innerHTML=="C"){
    string=" ";
    document.querySelector("input").value=string;
  }


   else{
     //setting value of string =innerHTML of button clicked and conactibate
       string=string+this.innerHTML;

       //setting value of input = sting
     document.querySelector("input").value=string;
   }
})
}
