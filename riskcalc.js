

var ticker = document.getElementById('ticker');
var price = document.getElementById('price');
var beup = document.getElementById('beup');
var bedown = document.getElementById('bedown');
var calcbutt = document.getElementById('calcbutt');
var myTable = document.getElementById('myTable'); 
	
calcbutt.addEventListener('click', function(event) {
		
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
		cell2.innerText = pospercent;
		cell3.innerText = negpercent;
		
		event.preventDefault();
		
	}
						
});
