console.log("Deliverables 1: " + products.items.length);
for (var i = 0; i < products.items.length; i++) {
	var checkAvailability = products.items[i].product.inventories[0].availability;
	if (checkAvailability === "backorder") {
		console.log("Deliverables 2: " + products.items[i].product.title);
	}
}

for (var i = 0; i < products.items.length; i++) {
	var checkImageLinks = products.items[i].product.images.length;
	if (checkImageLinks > 1) {
		console.log("Deliverables 3: " + products.items[i].product.title);
	}
}

for (var i = 0; i < products.items.length; i++) {
	var checkBrand = products.items[i].product.brand;
	if (checkBrand === 'Canon') {
		console.log("Deliverables 4: " + products.items[i].product.title);
	}
}

for (var i = 0; i < products.items.length; i++) {
	var checkBrand = products.items[i].product.brand;
	var checkAuthor = products.items[i].product.author.name;
	if (checkBrand === 'Canon' && checkAuthor === "eBay") {
		console.log("Deliverables 5: " + products.items[i].product.title);
	}
}

for (var i = 0; i < products.items.length; i++) {
	var checkBrand = products.items[i].product.brand;
	var checkPrice = products.items[i].product.inventories[0].price;
	var getImageLink = products.items[i].product.images[0].link;
	console.log("Deliverables 6:\nBrand: " + checkBrand + "\nPrice: " + checkPrice + "\nImage Link: " + getImageLink);
}

// // 	// 		console.log("1");
// // 	// 	}
// // 	// }
// // 	// console.log("i = " + items);
// // 	// console.log("p = " + products[items]);
// // }

// var myArray = products.items;

// // for (i=0; i < myArray.length; i++) {
// // 	console.log(myArray[i]);
// // }
// var itemToCheck = myArray[0];
// // for (items in itemToCheck) {
// // 	console.log(items);
// // }

// var itemChecking = itemToCheck.product.inventories[0];

// console.log(itemChecking);
