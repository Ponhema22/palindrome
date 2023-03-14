

//Reverse of a Number and Palindrome
var num=parseInt(prompt("Enter number"));
//var num=531;
var temp=num;
var reverse=0;
while(num!=0){

    reverse=(reverse*10)+(num%10);
    num=parseInt(num/10);
}
document.write(reverse);
document.write("<br>");

if(temp==reverse){
    document.write("Palindrome");
}
    
else{
    document.write("Not Palindrome")
}