console.log("Part 1")

console.log(products.items.length);

console.log("Part 2");
// if products.items.inventories.availablity = instock
// print products items.title

for (i=0; i < products.items.length; i++) {
	var checkAvail = products.items[i].product.inventories[0].availability;
	if (checkAvail === "backorder") {
		console.log(products.items[i].product.title);
	}
};

console.log("Part 3");
//when images.length > 1 print title

for (i=0; i < products.items.length; i++) {
	var checkImages = products.items[i].product.images.length
	if (checkImages > 1) {
		console.log(products.items[i].product.title);
	} 
};

console.log("Part 4");

for (i=0; i < products.items.length; i++) {
	var checkBrand = products.items[i].product.brand;
	if (checkBrand === "Canon") {
		console.log(products.items[i].product.title);
	}
}

console.log("Part 5");

for (i=0; i < products.items.length; i++) {
	var getAuthor = products.items[i].product.author["name"];
	var checkAuthor = getAuthor.includes("eBay") //returns true or false
	var checkBrand2 = products.items[i].product.brand;
	if (checkAuthor && checkBrand2 === "Canon") {
		console.log(products.items[i].product.title);
	}
} 

console.log("Part 6");

for (i=0; i < products.items.length; i++) {
	var brand = products.items[i].product.brand;
	var price = products.items[i].product.inventories[0].price;
	var imageLink = products.items[i].product.images[0].link;

	console.log("Brand: " + brand + ", Price: " + price);
	console.log(imageLink);
}

console.log("THIS IS THE END");

