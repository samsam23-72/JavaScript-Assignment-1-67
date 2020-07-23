


// q1
var city=prompt('Enter city : ');
if (city==='karachi'){
    alert('Welcome to the city of lights ')
}

// q2

var check=prompt('Enter your Gender : ')
if (check==='male'){
    alert('Good morning Sir ')
}
else {
    alert('Good morning Mam')
}

// q3
var signal=prompt('Whats the color of the traffic signal right now : ')
if (signal==='red'){
    alert('Must Stop ')
}
else if(signal==='yellow'){
    alert('ready to moove ')

}
else{
    alert('Move now')
}


// q4
var fuel=prompt('Enter Remaining fuel of the car in liters : ');
if (fuel<=0.25){
    alert( 'Please refill the fuel in your car' )
}

// q5

var a = 4; 
if (++a === 5){ alert("given condition for variable a is true"); }

var b = 82; 
if (b++ === 83){ alert("given condition for variable b is true"); }
else
{ alert("given condition for variable b is false"); }



var c = 12; 
if (c++ === 13){ alert("condition 1 is true"); } 
if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } 
if(c === 14){ alert("condition 4 is true"); }


var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ alert("The cost equals"); }


if (true){ alert("True"); } 
if (false){ alert("False"); }

if("car" < "cat"){ alert("car is smaller than cat"); }



//q6

var subject_1_ob_marks=parseInt(prompt('Enter Your Obtained Marks of subject 1','1'),10)
var subject_2_ob_marks=parseInt(prompt('Enter Your Obtained Marks of  subject 2','1'),10)
var subject_3_ob_marks=parseInt(prompt('Enter Your Obtained Marks of  subject 3','1'),10)


var subject_1_t_marks=parseInt(prompt('Enter Total Marks of subject 1' ,'1'),10)
var subject_2_t_marks=parseInt(prompt('Enter Total Obtained Marks of  subject 2' ,'1'),10)
var subject_3_t_marks=parseInt(prompt('Enter Total Obtained Marks of  subject 3' ,'1'),10)

var ob_t_marks= subject_1_ob_marks + subject_2_ob_marks + subject_3_ob_marks

var Total_marks_of_all=subject_1_t_marks + subject_2_t_marks + subject_3_t_marks

var Percentage =(ob_t_marks/Total_marks_of_all)*100

if (Percentage>=80){
    var g ='A+'
    var remarks='Excellent'
}
else if (Percentage>=70){
    var g ='A'
    var remarks='Good'
}
else if (Percentage>=60){
    var g ='B'
    var remarks='You need to improve '
}
else{
    var g='Fail'
    var remarks='Sorry'
}


document.write('<h2>Marks Sheet</h2> <br><br>  <h3>Total Marks : </h3>' + Total_marks_of_all + ' <br> Marks Obtained  :' + ob_t_marks + '<br> Percentage  :' + Percentage + '<br> Grade  : ' + g + '<br> Remarks : ' + remarks  )



// q7
var sec_num = 5;
var guess_num = prompt("Guess the Number", "");
if(parseInt(guess_num) === sec_num)
 {
     document.write("<br> Bingo! Correct answer ");

 }

 else if(parseInt (guess_num) === (sec_num+1))
 {
     document.write("<br> Close enough to the correct answer");

 }

// q8
 var chk_num=prompt("Give Number", "");
 if(((parseInt(chk_num))%3)===0)
 {
     document.write("<br> Number is divisible by 3");

 }

 else
 {
    document.write("<br> Number is not divisible by 3");

}

// q9

var chkEnum=prompt("Give Number", "");
if(((parseInt(chkEnum))%2)===0)
{
    document.write("<br> Number is Even");

}

else
{
   document.write("<br> Number is Odd");

}

// q10

var temp=prompt("Give Temperature", "");
if(parseFloat(temp)  > 40)
{
    document.write("<br> Its too Hot Outside.");

}

 else if(parseFloat(temp)  > 30  &&  parseFloat(temp) <=40) 
{
    document.write("<br> The Weather today is Normal.");

}

else if(parseFloat(temp)  > 20  &&  parseFloat(temp) <=30) 
{
    document.write("<br> Today’s Weather is cool.");

}

else if(parseFloat(temp)  > 10  &&  parseFloat(temp) <=20) 
{
    document.write("<br> OMG! Today’s weather is so Cool.");

}

//q11

var firstNum=prompt("First Number", "");
var secondNum=prompt("Second Number", "");
var operation=prompt("Operation", "");

if( operation === "+")
{
    document.write("<br> Addition of two  number is: "+ (parseInt(firstNum)+ parseInt(secondNum)));

}

else if( operation === "-")
{
    document.write("<br> Substration of two  number is: "+ (parseInt(firstNum)- parseInt(secondNum)));

}

else if( operation === "*")
{
    document.write("<br> Multiplication of two  number is: "+ (parseInt(firstNum) * parseInt(secondNum)));

}

else if( operation === "/")
{
    document.write("<br> Division of two  number is: "+ (parseInt(firstNum) / parseInt(secondNum)));

}
else if( operation === "%")
{
    document.write("<br> Modulus of two  number is: "+ (parseInt(firstNum) % parseInt(secondNum)));

}
