//Write a JavaScript program to find the area of a triangle where lengths ofthe three of its sides are 5, 6, 7.

const areaOfTriangle=(s1,s2,s3)=>{
    const s=s1+s2+s3/3;
    const area=Math.pow((s*(s-s1)*(s-s2)*(s-s3)),1/2);
    console.log(area);
}
areaOfTriangle(5,6,7);