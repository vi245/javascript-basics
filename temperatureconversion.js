//Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.

const fah_num= prompt("enter number to convert to celsius");
const fahToCel=(fah_num)=>{
    const celsius=(fah_num-32)*5/9;
    console.log(celsius+"°C");
}
fahToCel(fah_num);
const cel_num= prompt("enter number to convert to fahrenheit");
const celToFah=(cel_num)=>{
    const fah=(cel_num* 9/5) + 32 ;
    console.log(fah+"°F");
}
celToFah(cel_num);