// qn1
var shoppingProduct = 0;

for (var i = 0; i < products.items.length; i++) {
	if (products.items[i].kind === "shopping#product") {
	shoppingProduct = shoppingProduct + 1;
	};
}

console.log(shoppingProduct);

// qn2
	for (var i = 0; i < products.items.length; i++) {
	if (products.items[i].product.inventories[0].availability === "backorder") {
		console.log(products.items[i].product.title)
	};
}

// qn3
for (var i = 0; i < products.items.length; i++) {
	if (products.items[i].product.images.length > 1) {
		console.log(products.items[i].product.title)
	};
}

// qn4
for (var i = 0; i < products.items.length; i++) {
	if (products.items[i].product.brand === "Canon") {
		console.log(products.items[i].product.title)
	};
}

// qn5
for (var i = 0; i < products.items.length; i++) {
	if (products.items[i].product.author.name.includes("eBay") == true && products.items[i].product.brand === "Canon") {
		console.log(products.items[i].product.title)
	};
}

// qn6
for (var i = 0; i < products.items.length; i++) {
	console.log(products.items[i].product.brand);
	console.log(products.items[i].product.inventories[0].price);
	console.log(products.items[i].product.images[0]);
}