var count = 0;

var kindOfItem = function() {
	for (i = 0; i < products["items"].length; i++) {
		if (products["items"][i]["kind"] === "shopping#product") {
			count = count + 1
		}
	} console.log(count)
}

//kindOfItem();


var backorderTitle = function() {
	for (i = 0; i < products["items"].length; i++) {
if (products["items"][i]["product"]["inventories"][0]["availability"] === "backorder") {
	console.log(products["items"][i]["product"]["title"]);
		}
	}
}
//backorderTitle();

var imageCount = 0;
var numberImages = function() {
	for (i = 0; i < products["items"].length; i++) {
		if (products["items"][i]["product"]["images"].length > 1) {
			console.log(products["items"][i]["product"]["title"]);
		}
	}
}
//numberImages();

var canonProducts = function() {
	for (i = 0; i < products["items"].length; i++) {
		if (products["items"][i]["product"]["brand"] === "Canon") {
			console.log(products["items"][i]["product"]["title"]);
		}
	}
}

//canonProducts();

var ebayCanon = function() {
	for (i = 0; i < products["items"].length; i++) {
		if (products["items"][i]["product"]["author"]["name"].includes("eBay") && products["items"][i]["product"]["brand"] === "Canon") {
			console.log(products["items"][i]["product"]["title"]);
		}
	}
}

//ebayCanon();

var printProducts = function() {
	for (i = 0; i < products["items"].length; i++) {
		console.log(products["items"][i]["product"]["title"]);
		console.log(products["items"][i]["product"]["brand"]);
		console.log(products["items"][i]["product"]["inventories"][0]["price"]);
		console.log(products["items"][i]["product"]["images"]);
	}
}
printProducts();