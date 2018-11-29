document.getElementById("bt").addEventListener("click", function () {

    var f = document.getElementById("1").value;
    var c = document.getElementById("2").value;

    convertAll(f, c);
});


function convertAll(f, c) {
    f = parseFloat(f);
    c = parseFloat(c);
	
    document.getElementById("result1").innerHTML = fahrenheitToCelsius(f);
    document.getElementById("result2").innerHTML = celsiusToFahrenheit(c);
}

function celsiusToFahrenheit(x) {
    return x * 1.8 + 32;
}

function fahrenheitToCelsius(x) {
    return (x - 32) / 1.8;
}