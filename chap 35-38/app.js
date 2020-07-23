/////Task 01:
document.write("<h3> Task 1 </h3>")
var d = new Date();
document.write(d)

/////Task 02:
document.write("<h3> Task 2 </h3>")
function fn() {
  var a = prompt("Enter your first name")
  var b = prompt("Enter your last name")
  var c = a + b
  document.write("Hellow  " +c)
}
fn();


/////Task 03:
document.write("<h3> Task 3 </h3>")
function AddTwoNumbers() {

      return a + b;
  
  }
  FirstName = +prompt("Enter your First Number : ")
  LastName = +prompt("Enter your Second Number : ")
  No = FirstName + LastName
  document.write(" Sum of  two Numbers : " +No )


/////Task 04:
document.write("<h3> Task 4 </h3>")
function Cal(num, oper, num2) {
  if (oper === "+") {
    return num + num2
  }
  else if (oper === "-") {
    return num - num2
  }
  else if (oper === "*") {
    return num * num2
  }
  else if (oper === "/") {
    return num / num2
  }
}

var res = Cal(10, "+", 5);
var res1 = Cal(10, "-", 5);
var res2 = Cal(10, "*", 5);
var res3 = Cal(10, "/", 5);
document.write("The Sum of 10 & 5 is = " + res + "<br>")
document.write("The Sub of 10 & 5 is = " + res1 + "<br>")
document.write("The Mult of 10 & 5 is = " + res2 + "<br>")
document.write("The Div  of 10 & 5 is = " + res3 + "<br>")






/////Task 5:
document.write("<h3> Task 5 </h3>")
function sqrt(a) {
  var c = Math.sqrt(3);
  document.write("Square root of 3 is " + c)

}
sqrt();

/////Task 06:
document.write("<h3> Task 6 </h3>")
function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 5;
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);


///// Task  07  
document.write("<h3> Task 7 </h3>")
function Count() {
  var a = prompt("Enter 1 ");
  var b = prompt("Enter 2 ");
  for (var i = a; i <= b; i++) {
    alert(i)
  }
}
Count();



///// Task 08  
document.write("<h3> Task 8 </h3>")

function calculateHypotenuse(base, Prependicular) {
  function calculateSquare(side) {
    return side * side;
  }
  return Math.sqrt(calculateSquare(base) + calculateSquare(Prependicular));
}

Base = prompt("Enter base of the Traiangle")
Prep = prompt("Enter prependicular of the Traiangle")

document.write("Hypotenuse of triangle is :  " + calculateHypotenuse(Base, Prep));


///// Task 09  
document.write("<h3> Task 9 </h3>")
function Arearect() {
  return wid * heig;
 heig = prompt("Enter the height of the triangle");
 Area = Arearect(10, heig);
 document.write("Area of Rectangle is : " + Area);
}

///// Task 10  
document.write("<h3> Task 10 </h3>")
function checkPalindrome() {
  InputString = prompt("Enter String");
  StringSplit = InputString.split("");
  var StringJoined = StringSplit.reverse().join("");
  if (InputString == StringJoined) {
    document.write(InputString + " is palindrome");
  }
  else {
    document.write(InputString + " is not palindrome");
  }
}
  checkPalindrome();




  //////Task 11
  document.write("<h3> Task 11 </h3>")
  function capitalize_Words(str)
  {
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  document.write("Example String: thq quick brown fox <br>")
  document.write("Expected Output: "+capitalize_Words('the quick brown fox'));




  ////////Task 12:
  document.write("<h3> Task 12 </h3>")
  function find_longest_word(str)
 {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
  }
 document.write("Example String: Web Development Tutorial <br> ")
 document.write("Expected output is : "+find_longest_word('Web Development Tutorial'));



  ///////Task 13:
  document.write("<h3> Task 13 </h3>")
  function LetterFinder() {
        var x = 0,
            y = 0;
    
        for (i = 0; i < Strings.length; i++) {
            if (Strings[i] == Letter[0]) {
                for (j = i; j < i + Letter.length; j++) {
                    if (Strings[j] == Letter[j - i]) {
                        y++;
                    }
                    if (y == Letter.length) {
                        x++;
                    }
                }
                y = 0;
            }
        }
        document.write("There are   " + x + "   occerence(s) of the word  " + Letter);
    }
    Strings = prompt("Enter a String : ");
    Letter = prompt("Enter a Letter which you want to find");
    LetterFinder();


//////Task 14:
document.write("<h3> Task 14 </h3>")
function calcArea()
{
    this.radius = prompt("Enter Radius ")
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.Calcircumference = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new calcArea();
document.write('Area Of circle is ', c.area().toFixed(2) , "<br>");
document.write('Cicumference of circle is ', c.Calcircumference().toFixed(2));
