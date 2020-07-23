

// q1

var a=prompt('Enter number : ')

document.write('The value of a is :' + a + '<br>')
document.write('................' + '<br>')
document.write('The value of ++a is ' + ++a  + '<br>' +'Now the value of a is : ' + a + '<br>'  )
document.write('The value of a++ is ' + a++  + '<br>' +'Now the value of a is : ' + a + '<br>' )
document.write('The value of --a is ' + --a  + '<br>' +'Now the value of a is : ' + a  + '<br>')
document.write('The value of a-- is ' + a--  + '<br>' +'Now the value of a is : ' + a + '<br>')

// q2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write('The value of a is now :' + a + '<br>')

document.write('The value of b is now :' + b + '<br>')

document.write('The value of result is  :' + result + '<br>')



// q3

var name= prompt('Enter your name : ');
alert('Greeting Mr/Mrs : ' + name)

//4(5)

var table=prompt('Which number table you want : ');
var i=1;
var de = 5 ;
for (i;i<=10;i++){
    document.write(de + '*' + i + '=' + de*i + '<br>')
}
for (i;i<=10;i++){
    document.write(table + '*' + i + '=' + table*i + '<br>')
}

// q6
var sub_1 = prompt('Enter Subject Name : ')
var sub_2 = prompt('Enter Subject Name : ')
var sub_3 = prompt('Enter Subject Name : ')

var total_marks=100;

var  sub_1_ob_marks=prompt('Enter Your Obtained Marks of '+ sub_1)
var sub_2_ob_marks=prompt('Enter Your Obtained Marks of '+ sub_2)
var sub_3_ob_marks=prompt('Enter Your Obtained Marks of '+ sub_3)



document.write(' <table border=1> <tr><th>Subjects</th>  <th>Total Marks</th>  <th>Obtained Marks </th>  <th>Percentage</th> </tr> <tr><td>' 
+ sub_1 + '</td><td>' + total_marks + '</td><td>' + sub_1_ob_marks + '</td><td>' + (sub_1_ob_marks/t_marks*100) + '</td></tr> <tr><td>' + sub_2 + '</td><td>' 
+ total_marks + '</td><td>' + sub_1_ob_marks + '</td><td>' + (sub_2_ob_marks/total_marks) + '</td></tr> <tr><td>' + sub_3 + '</td><td>' + total_marks + '</td><td>' 
+ sub_3_ob_marks + '</td><td>' + (sub_3_ob_marks/total_marks) + '</td></tr>')
