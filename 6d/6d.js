function insertFunction() {
	
    var table = document.getElementById("table1");
    var row = table.insertRow(table.rows.length);
	
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);  
	var cell4 = row.insertCell(3);
	
    cell1.innerHTML = document.getElementById("1").value;
    cell2.innerHTML = document.getElementById("2").value;
    cell3.innerHTML = document.getElementById("3").value;
    cell4.innerHTML = document.getElementById("4").value;
}