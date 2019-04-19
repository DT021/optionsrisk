var ticker = document.getElementById('ticker');
var price = document.getElementById('price');
var beup = document.getElementById('beup');
var bedown = document.getElementById('bedown');
var calcbutt = document.getElementById('calcbutt');
var myTable = document.getElementById('myTable'); 


function listmaker() {
	if ((!ticker.value || !ticker)||(!price.value || !price)||(!beup.value || !beup)||(!bedown.value ||!bedown)) {
		alert("Please enter a value in all of the fields!")
	} else {
		
		var x = parseFloat(price.value); 
		var y = parseFloat(beup.value);
		var z = parseFloat(bedown.value);
		
		var posfirst = y - x;
		var negfirst = z - x;
		
		var posresult = posfirst / x;
		var negresult = negfirst / x;
		
		var pospercent = (posresult * 100).toFixed(2);
		var negpercent = (negresult * 100).toFixed(2);
		
		var row = myTable.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		
		cell1.innerText = ticker.value;
		cell2.innerText = pospercent + "%";
		cell3.innerText = negpercent + "%";
		
		event.preventDefault();
		
	}
}

function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
		
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
		csv.push(row.join(","));		
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

document.querySelector("button.yeet").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "options.csv");
});


