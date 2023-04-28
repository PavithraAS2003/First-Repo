// Initialize scanner
Quagga.init({
	inputStream: {
		name: "Live",
		type: "LiveStream",
		target: document.querySelector("#scannerContainer")
	},
	decoder: {
		readers: ["ean_reader"]
	}
}, function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Scanner initialized successfully.");
	// Start scanner when scan button is clicked
	document.getElementById("scanButton").addEventListener("click", function() {
		Quagga.start();
	});
});

// Handle barcode scan results
Quagga.onDetected(function(result) {
	// Display scanned barcode in the HTML element
	document.getElementById("scannedBarcode").innerHTML = result.codeResult.code;
	// Stop scanning
	Quagga.stop();
});
