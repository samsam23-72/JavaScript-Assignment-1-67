/////Task 1:
document.write("<h3> Task 1 </h3>")
var b = 2.33335;
document.write("Number : " +b+  "<br>")
var a =  Math.round(2.33335);
document.write("Round of Value : " +a+ "<br>")
var c =  Math.ceil(2.33335);
document.write("Ceil Value : " +c+ "<br>" )
var d =  Math.floor(2.33335);
document.write("floor Value : " +d )


/////Task 2:
document.write("<h3> Task 2 </h3>")
var b = -2.673;
document.write("Number : " +b+  "<br>")
var a =  Math.round(-2.673);
document.write("Round of Value : " +a+ "<br>")
var c =  Math.ceil(-2.673);
document.write("Ceil Value : " +c+ "<br>" )
var d =  Math.floor(-2.673);
document.write("floor Value : " +d )


/////Task 3:
document.write("<h3> Task 3 </h3>")
var b = -4;
var c = Math.abs(-4);
document.write("The absolute value of -4 is : " +c+  "<br>")


/////Task 4:
document.write("<h3> Task 4 </h3>")
var rand = Math.round(Math.random() * 6);
document.write('Random dice value is  ' + rand);


/////Task 5:
document.write("<h3> Task 5 </h3>")
var prob1 = Math.floor(Math.random() * 2) +1;
var prob2 = Math.floor(Math.random() * 2) +1;
if( prob1 === prob2){
   document.write('Random coin value:  TAIL');
 }
 else{
   document.write('Random coin value:  HEAD');
 }

/////Task 6:
document.write("<h3> Task 6 </h3>")
var a = Math.floor(Math.random() * 100) + 1
document.write("Random number between 1 & 100 : " +a+ "<br>");





/////Task 7:
document.write("<h3> Task 7 </h3>")
var a = prompt("Enter Your Weight: ")
var b = parseInt(a)
document.write("The weight of user is " +b)


/////Task 8:
document.write("<h3> Task 8 </h3>")
var b = prompt("Enter Any number from 1-10 ")
document.write(b + "<br>")
var a = Math.floor((Math.random() * 10))
document.write(a)
if(a == b)
{
  alert("Congratulation")
}
else
{
  alert("Try again ")
 
}