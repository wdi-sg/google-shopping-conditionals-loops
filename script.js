// console.log("Part 1")

// console.log(products.items.length);

// console.log("Part 2");
// // if products.items.inventories.availablity = instock
// // print products items.title

// for (i=0; i < products.items.length; i++) {
// 	var checkAvail = products.items[i].product.inventories[0].availability;
// 	if (checkAvail === "backorder") {
// 		console.log(products.items[i].product.title);
// 	}
// };

// console.log("Part 3");
// //when images.length > 1 print title

// for (i=0; i < products.items.length; i++) {
// 	var checkImages = products.items[i].product.images.length
// 	if (checkImages > 1) {
// 		console.log(products.items[i].product.title);
// 	} 
// };

// console.log("Part 4");

// var canonTitle = []

// for (i=0; i < products.items.length; i++) {
// 	var checkBrand = products.items[i].product.brand;
// 	if (checkBrand.toLowerCase() === "canon") { // make every string lowercase, then check if "canon"
// 		console.log(products.items[i].product.title);
// 		canonTitle.push(products.items[i].product.title); //push titles into empty arrary
// 	}
// }

// console.log(canonTitle)

console.log("Part 5");

for (i=0; i < products.items.length; i++) {
	var getAuthor = products.items[i].product.author["name"].toLowerCase();
	var checkAuthor = getAuthor.includes("ebay") //returns true or false
	var checkBrand2 = products.items[i].product.brand.toLowerCase();
	if (checkAuthor && checkBrand2 === "canon") {
		console.log(products.items[i].product.title);
	}
} 

// console.log("Part 6");

// for (i=0; i < products.items.length; i++) {
// 	var brand = products.items[i].product.brand;
// 	var price = products.items[i].product.inventories[0].price;
// 	var imageLink = products.items[i].product.images[0].link;

// 	console.log("Brand: " + brand + ", Price: " + price);
// 	console.log(imageLink);
// }

// console.log("THIS IS THE END");

