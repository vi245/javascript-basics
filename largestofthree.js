//Write a JavaScript program to find the largest of three given integers.
 const largestOfThree=(a,b,c)=>{
   if(a>b)
 {
    if(a>c)
    {
        console.log(a+"is largest");
    }
    else{
        console.log(c+"is largest");
    }
 }
 else {
   if(b>c){
    console.log(b+"is largest");
 }
 else{
    console.log(c+"is largest");
 }
}}
largestOfThree(5,10,6);