/*Write a JavaScript program to get the difference between a given numberand 13, 
if the number is greater than 13 return double the absolute difference.
*/
let num=prompt("enter a number");
let diff=num-13;
if(diff<0)
{
    diff=2*Math.abs(diff);
    console.log(diff);
}
else{
    console.log(diff);
}