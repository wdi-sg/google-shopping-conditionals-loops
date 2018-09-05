console.log(products)
// Part 1
// var count = 0
// for (var i = 0; i < products.items.length; i++) {
//   if (products.items[i].kind === "shopping#product") {
//     console.log(products.items[i].kind);
//     count++;
//   }
// };
// console.log(count)

//Part 2
// for (var i = 0; i < products.items.length; i++) {
//   if (products.items[i].product.inventories[0].availability === "backorder") {
//     console.log(products.items[i].product.title);
//   }
// };

// Part 3
for (var i = 0; i < products.items.length; i++) {
	if (products.items[i].product.images.length > 1) {
		console.log(products.items[i].product.title)
	}
};