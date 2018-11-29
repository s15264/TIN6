function myFunction() {   
    var email = document.getElementById("1").value;
    var number = document.getElementById("2").value;

    if (!isEmail(email)) displayEmailError();
		else displayEmailConfirmation();
    if (!isNumeric(number)) displayNumberError();
		else displayNumberConfirmation();     
}

var isEmail = function(str) {
  return typeof str==='string' && /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(str);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function displayNumberError() {
    document.getElementById("2").style.color = "red";
    document.getElementById("2").style.borderColor = "red";
}

function displayEmailError() {
    
    document.getElementById("1").style.color = "red";
    document.getElementById("1").style.borderColor = "red";
}

function displayNumberConfirmation() {
    document.getElementById("2").style.color = "green";
    document.getElementById("2").style.borderColor = "green";
    
}

function displayEmailConfirmation() {
    document.getElementById("1").style.color = "green";
    document.getElementById("1").style.borderColor = "green";
    
}



