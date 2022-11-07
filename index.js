//Write a JavaScript program to calculate multiplication and division of twonumbers (input from user).

var divide=document.getElementById('divide');
var multiply=document.getElementById('multiply');
var istnumber=document.getElementById("ist-number");
var sndnumber=document.getElementById("2nd-number");
var result=document.getElementById("result");
var one;
var two;

istnumber.addEventListener("keyup",()=>{
      one =istnumber.value;
     //console.log(one);
})
sndnumber.addEventListener("keyup",()=>{
     two =sndnumber.value;
     if(two==0)
    {
        alert("2nd number must not be zero");
    }
    //console.log(two);
})
//division of two number
divide.addEventListener("click",()=>{
    
    var divide_result=one/two;
    result.innerHTML=divide_result;
})
// multiplication of two number
multiply.addEventListener("click",()=>{
    var multiply_result;
    multiply_result=one*two;

    result.innerHTML=multiply_result;
})

