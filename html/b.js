function showTable(n){

document.write("<table border=5 style=background-color:red>");
for(var a=0;a<=10;a++)
{
document.write("<tr>");
document.write("<td>"+ n +"</td>");
document.write("<td>*</td>");
document.write("<td>"+a+"</td>");
document.write("<td>=</td>");
document.write("<td>"+n*a+"</td>");
document.write("</tr>");
}
document.write("</table>");
}