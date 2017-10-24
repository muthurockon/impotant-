function compute(){

var a=parseInt(document.f.t2.value);
var b=parseInt(document.f.t1.value);
var temp=document.f.s.value;
switch(temp)
{
case "+":document.f.t3.value=a+b;break;
case "-":document.f.t3.value=a-b;break;
case "*":document.f.t3.value=a*b;break;
case "/":document.f.t3.value=a/b;break;
case "%":document.f.t3.value=a%b;break;
}
}