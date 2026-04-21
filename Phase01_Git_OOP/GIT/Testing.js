var lengthOfFibonacciSeries = 10;
var a=0;
var b=1;
var c;
console.log(a);
console.log(b);
for(i=0;i<=lengthOfFibonacciSeries-3;i++){
    c = a+b;
    console.log(c);
    a=b;
    b=c;
}