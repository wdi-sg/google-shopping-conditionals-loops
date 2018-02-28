var total = 0
products.items.forEach(function(item) {
	if (item.kind === "shopping#product")
		total += 1
	console.log(total);
});


products.items.forEach(function(item) {
	if (item.product.inventories[0].availability === "backorder")
		console.log(item.product.title);
});

products.items.forEach(function(item) {
	if (item.product.images.length > 1)
		console.log(item.product.title);
});


products.items.forEach(function(item) {
	if (item.product.brand === "Canon")
		console.log(item.product);
});

products.items.forEach(function(item) {
	if (item.product.author.name == "eBay" && item.product.brand === "Canon")
		console.log(item);
});


products.items.forEach(function(item) {
	console.log(item.product.brand + ' ' + item.product.inventories[0].price + ' ' + item.product.images[0].link);
});