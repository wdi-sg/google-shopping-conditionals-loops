var shoppingProduct = 0;

// products.items is an array of 25 indexes, which is why you need products.items[i]
for (i = 0; i < products.items.length; i++) {
 if (products.items[i].kind === "shopping#product") {
   shoppingProduct ++;
 }
}

console.log(shoppingProduct);

for (i = 0; i < products.items.length; i++) {
 if (products.items[i].product.inventories[1].availability === "backorder") {
   console.log(products.items[i].product.title);
 }
}

for (i = 0; i < products.items.length; i++) {
	if (products.items[i].product.images > 1) {
		console.log(products.items[i].images.title);
	}
}

console.log(products.items[1].product.title);

for (i = 0; i < products.items.length; i++) {
	if (products.items[i].product.brand === "Canon") {
		console.log(products.items[i].product.title);
	}
}

for (i = 0; i < products.items.length; i++) {
	if (products.items[i].product.brand === "Canon" && products.items[i].product.author[0].name === "eBay") {
		console.log(products.items[i].product.title);
	}
}

for (var keys in products) {
	console.log("Brand: " + products.items[i].product.brand + "; " "Price: " + product.items[i].inventories[2].price + "; " + "Image link: " + products.items[i].images);
}

