var shoppingProduct = 0;

// products.items is an array of 25 indexes, which is why you need products.items[i]
for (i = 0; i < products.items.length; i++) {
 if (products.items[i].kind === "shopping#product") {
   shoppingProduct ++;
 }
}

console.log(shoppingProduct);

for (i = 0; i < products.items.length; i++) {
 if (products.items[i].product.inventories[0].availability === "backorder") {
   console.log(products.items[i].product.title);
 }
}

console.log(products.items[1].product.inventories[0].availability);

for (i = 0; i < products.items.length; i++) {
	if (products.items[i].product.images > 1) {
		console.log(products.items[i].product.title);
	}
}

console.log(products.items[1].product.title);

for (i = 0; i < products.items.length; i++) {
	if (products.items[i].product.brand === "Canon") {
		console.log(products.items[i].product.title);
	}
}

console.log(products.items[1].product.title);