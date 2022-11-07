/*Write a JavaScript program to check the total marks of a student in variousexaminations. 
The student will get A+ grade if the total marks are in therange 89..100 inclusive, 
if the examination is "Final-exam." the student willget A+ grade and total marks must be greater than or equal to 90. 
Return true if the student get A+ grade or false otherwise.
*/

let marks=prompt("enter marks out of 100");
const isStudentAplus=(marks)=>{
    if(marks>=90 && marks<=100)
    {
       console.log(true);
    }
    else{
        console.log(false);
    }
}
isStudentAplus(marks);
