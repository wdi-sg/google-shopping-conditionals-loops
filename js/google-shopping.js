// Write your solutions below

// Part 1
console.log('Part 1');

var count = 0;
var shopping = function() {
	for (var i = 0; i < products.items.length; i++) {
		if (products.items[i].kind === "shopping#product") {
			count += 1;		
		}
	} console.log(count);
} 

shopping();
console.log('');


// Part 2
console.log('Part 2');

var backorder = function() {
	for (var i = 0; i < products.items.length; i++) {
		for (var a = 0; a < products.items[i].product.inventories.length; a++) {
			if (products.items[i].product.inventories[a].availability == "backorder") {
				console.log(products.items[i].product.title);
			}
		}	
	}
}

backorder();
console.log('');


// Part 3
console.log('Part 3');

var imageLink = function() {
	for (var i = 0; i < products.items.length; i++) {
		if (products.items[i].product.images.length > 1) {
			console.log(products.items[i].product.title);
		}
	}
}

imageLink();
console.log('');


// Part 4
console.log('Part 4');

var canon = function() {
	for (var i = 0; i < products.items.length; i++) {
		if (products.items[i].product.brand == "Canon") { 
			console.log(products.items[i].product.title);
		}	
	}
}

canon();
console.log('');


// Part 5
console.log('Part 5');

var eBay = function() {
	for (var i = 0; i < products.items.length; i++) {
		if (products.items[i].product.brand == "Canon" && products.items[i].product.author.name.slice(0,4) == "eBay") {
			console.log(products.items[i].product.title);
		}
	}
}

eBay();
console.log('');


// Part 6
console.log('Part 6');

var details = function() {
	for (var i = 0; i < products.items.length; i++) {
		console.log("Brand: " + products.items[i].product.brand);
		console.log("Price: $" + products.items[i].product.inventories[0].price);
		console.log("Link: " + products.items[i].product.images[0].link);
		console.log('');
	}
}

details();