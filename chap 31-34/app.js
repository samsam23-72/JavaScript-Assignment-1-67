//////Task 1:
document.write("<h3> Task 1 </h3>")
var d = new Date();
document.write(d)


//////Task 2:
document.write("<h3> Task 2 </h3>")
var a = new Date();
var Month = ["January" , "Feburary" , "March" , "April" , "May" , "June" , "July" , "August" , "Sept" , "Oct" , "Nov" , "Dec"]
var z = Month[a.getMonth()];
document.write("Current Month: " +z+ "<br> <br>");


//////Task 3:
document.write("<h3> Task 3 </h3>")
var day = ["Sun" , "Mon" , "Tues" , "Wed" , "Thurs" , "Fri" , "Sat"]
var a = new Date();
var b = day[a.getDay()];
document.write("Today is " +b)


////////Task 4:
document.write("<h3> Task 4 </h3>")
var d = new Date();
if(d.getDay() == 6 || d.getDay() == 0 )
document.write("Its Fun Day ");


////////Task 5:
document.write("<h3> Task 5 </h3>")
var d = new Date();
var a = d.getDate();
if(a<=16){
document.write("First Fifteen days of the month ")
}
else{
document.write("Last Days of the month")
}


////////Task 6:
document.write("<h3> Task 6 </h3>")
var date1 = new Date(" Dec 5, 2015 22:32:23 ");
document.write("Current Date: " +date1+ " <br> <br>")
var today = date1.getTime()
var today1 = date1.getTime()/(1000*60*60)
document.write("Elapsed milliseconds since jan 1, 1970: " +today+ " <br> <br>")
document.write("Elapsed minute  since jan 1, 1970: "  +today1+ " <br> <br>")



////////Task 7:
document.write("<h3> Task 7 </h3>")
var date = new Date();
var hour = date.getHours()
if(hour<=12){
  document.write("Its AM")
}
else{
  document.write("Its PM")
}



////////Task 08:
document.write("<h3> Task 08 </h3>")
var date = new Date();
var fa = new Date(date.getFullYear(),date.getMonth()+6,date.getDate()+11)
document.write("Later date : " +fa)



////////Task 09:
document.write("<h3> Task 09 </h3>")
var d = new Date();
var laterDate = new Date(2020, 4, 24);
res = d.getTime() - laterDate.getTime()
res1 = res / ( 500 * 3600  * 24)
res1update = Math.ceil(res1)
document.write(res1update + " Days passed since 1st Ramdan 2020 ");



////////Task 10:
document.write("<h3> Task 10 </h3>")
  var d = new Date();
  var laterDate = new Date("Jan 1, 2020 ");
  res = d.getTime() - laterDate.getTime()
  res1 = res / (1000 * 60 )
  seconds = Math.ceil(res1)
  document.write("on the refrence date " + laterDate + ", <br>" + seconds + " seconds had passed since beginning of 2020 ");



////////Task 11:
document.write("<h3> Task 11 </h3>")
    var d = new Date();
    var date1 = new Date();
    var before = date1.setHours(2);
document.write("Current date " +d+ "<br>")
 document.write( "1 hour ago it was " +date1)



////////Task 12:
document.write("<h3> Task 12 </h3>")
    var d = new Date();
document.write("Current date " +d+ "<br>")
   d.setFullYear(1920);
 document.write( "100  years ago it was " +d)


////////Task 13:
document.write("<h3> Task 13 </h3>")
var  age = prompt("Enter Your Age? ");
document.write("Your Age is " +age+ "<br>");
var d = new Date();
var n = d.getFullYear();
var birthyear = n - age 
document.write(" Your birth year " +birthyear);

////////Task 14:
document.write("<h3> Task 14 </h3>")
   document.write("===================================================<br>")
   document.write(" --------------------------------  <b>K-Electric Bill</b>  ---------------------------------- <br>")
   document.write("===================================================<br>")
   var d = new Date();
   var Customer_Name = prompt("Enter User name : ")
   document.write("Customer Name :  " + Customer_Name + "<br>")
   month = ["January", "Febrary", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"]
   var CurrentPaybill = month[d.getMonth()];
  document.write("Month :  " + CurrentPaybill + "<br>")

  var Units = prompt("Input Num of units: ");
   document.write("The Number of unit is " +Units + "<br>")
  var Charges = prompt("Input Charges per unit:  ");
  document.write("The Number of Charges per unit  " +Charges+ "<br>")


  var AmountPAyDueDate = Units * Charges;
 document.write("Net Amount Payable (within Due Date) :  " + AmountPAyDueDate + "<br>")


   var LatePaymentSurcharge = 350;

  document.write("Late Payment Surcharge  :  " + LatePaymentSurcharge + "<br>")


  var GrossAmountPayableDue = AmountPAyDueDate + LatePaymentSurcharge;
  document.write("Gross Amount Payable (after Due Date):  " + GrossAmountPayableDue + "<br>")






