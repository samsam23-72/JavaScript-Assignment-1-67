///Task 1:
function power(){
    alert("Power of (7,3) is " +Math.pow(7,3))

}
power()

/////Task 2:
document.write("<h3> Task 2 </h3>")
function leapYear(year) {
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
document.write(leapYear(2016)+"<br>");
document.write(leapYear(2000)+"<br>");
document.write(leapYear(1700)+"<br>");
document.write(leapYear(1800)+"<br>");
document.write(leapYear(100)+"<br>");



//////Task 3.
document.write("<h3> Task 3 </h3>")

a = +prompt("Enter Side 1 : ")
b = +prompt("Enter Side 2 : ")
c = +prompt("Enter Side 3 : ")

function AreaofTraingle() {
    var A = (a + b + c) / 2;
    return A;

}

function Area() {

    var Side = AreaofTraingle()

    var total = Side * ((Side - a) * (Side - b) * (Side - c))
    return total;

}
document.write(Area())


////////Task 4
document.write("<h3> Task 4 </h3>")
sub1 = +prompt("Enter subject 1 marks out of 100 : ")
sub2 = +prompt("Enter subject 2 marks out of 100 : ")
sub3 =


 +prompt("Enter subject 3 marks out of 100 : ")




function StudentsResult() {


    Average();
    document.write("<br>")
    Percentage();


}
StudentsResult()


function Average() {

    avg = (sub1 + sub2 + sub3) / 3;
    document.write("Average of  3 subject  is : " + avg)


}

function Percentage() {

    TM = 300;

    OM = sub1 + sub2 + sub3;

    per = (OM / TM) * 100;

    document.write("Pecentage of 3 subject is : " + per)

}


//  /////Task 5
 document.write("<h3> Task 5 </h3>")
 function Indexof() {
 const beasts = ['ant', 'bison', 'camel', 'duck'];
 document.write(beasts.indexOf('bison')+"<br>");
 }
 Indexof()


//  ///////Task 6:
document.write("<h3> Task 6 </h3>")
var strings = ["My name is Abdullah Qureshi I am learning web & mobile hybrid app development in Saylani Mass IT Trainning "];
string = strings.map(x=>x.replace( /[aeiou]/g, '' ));
document.write(string +"<br>");


///////Task 7
document.write("<h3> Task 7 </h3>")
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for(const letter of str.toLowerCase()){

    switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            {
                if(haveSeenVowel){
                    count++;
                    haveSeenVowel = false;
                }
                else{
                    haveSeenVowel = true;
                }
                break;
            }
            default:
                haveSeenVowel = false
    }
}
return count
}

document.write(findOccurrences());

/////////Task 8
document.write("<h3> Task 8 </h3>")
CityDistance = prompt("Enter the distance  between two cities (Km) ")
function Covertion() {
    meter();
    document.write("<br>")
    Cmeter();
    document.write("<br>")
    Feet();
    document.write("<br>")
    Inches();
}
Covertion()

function meter() {

    meter = CityDistance * 1000;

    document.write(CityDistance + "  Km" + " into meter is " + meter)

}

function Cmeter() {

    Cmeter = CityDistance * 100000;

    document.write(CityDistance + "  Km" + "  into Centimeter is " + Cmeter)



}

function Feet() {

    feet = CityDistance * 3280.8;

    document.write(CityDistance + "  Km" + "  into feet is " + feet)



}

function Inches() {

    Inches = CityDistance * 39370.078740157;

    document.write(CityDistance + "  Km" + "  into Inches is " + Inches)



}


///////Task 9
document.write("<h3> Task 9 </h3>")


function OverTimePay() {

    if (hrs > 40) {

        Overtime = (hrs - 40) * 12;

        Salary = Salary + Overtime;

        document.write("Salary of Employee with over time is " + Salary)

    } else if (hrs <= 40) {


        Overtime = hrs * 12;
        document.write("Salary of Employee " + Salary)

    }

}
Salary = +prompt("Enter your Salary : ")
hrs = +prompt("Enter your Hours : ")

OverTimePay()






///////Task 10
document.write("<h3> Task 10 </h3>")


function ConvertCurrcy() {


    Notes1000 = Math.floor(amount / 1000);

    document.write(" There are " + Notes1000 + " Notes of 1000 in " + amount + "<br>")
    RemainAmounts1000 = amount - (Notes1000 * 1000);

    Notes500 = Math.floor(RemainAmounts1000 / 500);
    document.write(" There are " + Notes500 + " Notes of 500 in " + amount + "<br>")
    RemainAmounts500 = RemainAmounts1000 - (Notes500 * 500);


    Notes100 = Math.floor(RemainAmounts500 / 100);
    document.write(" There are " + Notes100 + "  Notes of 100 in " + amount + "<br>")
    RemainAmounts100 = RemainAmounts500 - (Notes100 * 100);

    Notes50 = Math.floor(RemainAmounts100 / 50);
    document.write(" There are " + Notes50 + " Notes of 50 in " + amount + "<br>")
    RemainAmounts50 = RemainAmounts100 - (Notes50 * 50);

    Notes10 = Math.floor(RemainAmounts50 / 10);
    document.write(" There are " + Notes10 + "  Notes of of 10 in " + amount + "<br>");
    RemainAmounts = RemainAmounts50 - (Notes10 * 10);

}
amount = +prompt("Enter an amount : ");
ConvertCurrcy()
