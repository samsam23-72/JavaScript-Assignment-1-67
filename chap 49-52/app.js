/////Task 1:
function Data() {

    Name = document.getElementById('name').value;

    document.getElementById("tdname").innerHTML += Name + "<br>";

    Name = document.getElementById('name').value = '';



    Email = document.getElementById('email').value;
    document.getElementById("tdemail").innerHTML += Email + "<br>";


    Email = document.getElementById('email').value = '';




    Phone = document.getElementById('PN').value;
    document.getElementById('tdPN').innerHTML += Phone + "<br>";

    Phone = document.getElementById('PN').value = '';




    Password = document.getElementById('pass').value;
    document.getElementById("tdpass").innerHTML += Password + "<br>";
    Password = document.getElementById('pass').value = '';


    CPass = document.getElementById('Cpass').value;
    document.getElementById("tdCpass").innerHTML += CPass + "<br>";
    CPass = document.getElementById('Cpass').value = '';



}

////Task 2////

function zoomIn() {
    var para = document.getElementById("par")
    para.style.fontSize = +para.style.fontSize.slice(0, -2) + 10 + "px"

}

function zoomOut() {
    var para = document.getElementById("par")

    para.style.fontSize = +para.style.fontSize.slice(0, -2) - 10 + "px"
}


////Task 3///////
var saveId = "";
function deleteRow(rowId){
    var delRow = document.getElementById(rowId);
    delRow.innerHTML =""
}
function edit(rowId){
    var editField = document.getElementById("editField");
    editField.className = "";
    var r = document.getElementById(rowId);
    var val = r.getElementsByTagName('td');
    console.log(val[1].innerHTML);
    var a = val[1].innerHTML;
    var b = val[2].innerHTML;
    var inpValue = editField.getElementsByTagName('input');
    inpValue[0].value = a;
    inpValue[1].value = b;
    saveId = rowId;
    console.log(saveId)
}
console.log(saveId)
function save(saveId){
    var editField = document.getElementById("editField");
    var inpValue = editField.getElementsByTagName('input');
    a = inpValue[0].value;
    b = inpValue[1].value; 
    console.log(saveId);
    var r = document.getElementById(saveId);
    var val = r.getElementsByTagName('td');
    val[1].innerHTML =a;
    val[2].innerHTML =b;

    
    
     editField.className = "hidden";
}

function cancel() {
    var editField = document.getElementById("editField");
    editField.className = "hidden";
}