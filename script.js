console.log(products)

var productBrand = prompt("What Brand are you looking for?")
var itemCondition = prompt("Do you want to see new or used items?")

for (i=0; i < products.items.length; i++) {
	if ((productBrand === products.items[i].product.brand) && (itemCondition === products.items[i].product.condition)) {
		console.log(products.items[i].product.title)
	};
};