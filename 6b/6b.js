	window.onload = function () {
			var fiveSecond= 5000;
			setTimeout(function(){showText();}, fiveSecond);};

	function showText() {
		document.getElementById("b1").style.visibility = "visible";
	}