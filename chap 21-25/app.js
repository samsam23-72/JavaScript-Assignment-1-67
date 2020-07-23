//////Task 1:
document.write("<h3> Task 1 </h3>")
var firstname  = prompt("Enter Your First Name")
var lastname   = prompt("Enter you Last Name")
var fullname   = firstname + lastname;
document.write("Hellow  Assalam o Aalikum  " + fullname + "<br>")

//////Task 2:
document.write("<h3> Task 2 </h3>")
var str  = prompt("Enter Your Favt Mobile Model")
var input = str.length;
document.write("The length of string is " +input + "<br>")

//////Task 3:
document.write("<h3> Task 3 </h3>")
var str =  "Pakistan";
var a = str.indexOf("n")
document.write( "Index of 'n' is " +a+ "<br>")

//////Task 4:
document.write("<h3> Task 4 </h3>")
var str =  "Hello World";
var a = str.lastIndexOf("l")
document.write( "Last Index of 'l' is " +a+ "<br>")

//////Task 5:
document.write("<h3> Task 5 </h3>")
var str =  "Pakistan";
var a = str.charAt('3')
document.write( "Char At Index  '3' is " +a+ "<br>")

//////Task 6:
document.write("<h3> Task 6 </h3>")
var str1  = prompt("Enter Your First Name")
var str2   = prompt("Enter you Last Name")
var fullname  =  str1.concat(str2);
document.write( fullname )

//////Task 7:
document.write("<h3> Task 7 </h3>")
var str = "Hyderabad ";
var res = str.replace("Hyder", "Islam");
document.write( res )

//////Task 8:
document.write("<h3> Task 8 </h3>")
var str =  "Ali and Sami are best friends. They play cricket and football together. ";
var res = str.replace(/and/g , "&");
document.write( res )


//////Task 09:
document.write("<h3> Task 09 </h3>")
var a = "472"
var b =  parseInt(a);
document.write(b)



//////Task 10:
document.write("<h3> Task 10 </h3>")
var a  =  "User input: Peanuts <br> <br>";
document.write( a )
var str =  "User input: Peanuts";
var res = str.toUpperCase();
document.write( res )


//////Task 11:
document.write("<h3> Task 11 </h3>")
var str =  "Userinput : javascript";
document.write( str + "<br>" )
var b = str.replace("Userinput : javascript" , "Title Case : Javascript");
document.write( b )


//////Task 12:
document.write("<h3> Task 12 </h3>")
var str =  "Number: 35.36 ";
document.write( str + "<br>" )
var b = str.replace("Number: 35.36" , "Result: 3536");
document.write( b )

 

//////Task 13:
document.write("<h3> Task 13 </h3>")
var user = prompt("enter name :  ")
SpChar = "!@.,";
for (var i = 0; i < user.length; i++) {
    if (SpChar.indexOf(user.charAt(i)) != -1) {
        alert("Please enter a valid username");
    }
}


///////Task 14:
document.write("<h3> Task 14 </h3>")
var bakery = ["cake", "apple pie", "cookies", "brownies", "pancakes"];
var search = prompt("Welcome to AQ bakery, What do you want to order???");
search = search.toLowerCase();
for (var i=0; i<bakery.length; i++)
{
    if (bakery[i] == search) {
        available = true;
        break;
    }
    else{
        available = false;
    }
}
 if(available == true)
 {
     document.write(search, " is available at index " +i+ " in our bakery");

 }
 if(available == false)
 {
     document.write("We are sorry, "  , search, " is not available in our bakery ");
     
 }



 /////////Task 15:
document.write("<h3>  Task 15  </h3> ");
var input = prompt("Enter password");
document.write("Entered Password" +input+  "<br>")
if (isNaN(parseInt(input[0]))) {
  document.write("password is valid" + "<br>");
} else {
  document.write("Password should not start with number" + "<br>");
  document.write("Please enter a valid password");

}



/////////Task 16:
document.write("<h3>  Task 16  </h3> ");
 var uni = "University of karachi";
 var unii =  uni.split("").join("<br>")
 document.write(unii)


 //////Task 17:
document.write("<h3> Task 17 </h3>")
var str = prompt("Enter Input")
var a = str.charAt(str.length-1);
document.write( "Last char of input is  " +a+ "<br>")


 //////Task 18:
 document.write("<h3> Task 18 </h3>")
 function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split('The').length;
    }
 document.write(countWords("The quick brown fox jumps over the lazy dog"));
