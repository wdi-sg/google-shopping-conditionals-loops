// const data = require('products.json');
const allItems = products.items;

// Write your solutions below

// PRINT SHOPPING PRODUCTS //
// let count = 0;
// for (i = 0; i < allItems.length; i++) {
// 	if (allItems[i].kind === "shopping#product") {
// 		count++;
// 	}
// }
// console.log(`there are ${count} shopping#product`);

// PRINT BACKORDER AVAILABILITY //
// for (i = 0; i < allItems.length; i++) {
// 	if (allItems[i].product.inventories[0].availability === "backorder") {
// 		console.log(allItems[i].product.title);
// 	}
// };

// MORE THAN 1 IMAGE LINK //
// for (i = 0; i < allItems.length; i++) {
// 	if (allItems[i].product.images.length > 1) {
// 		console.log(allItems[i].product.title);
// 	}


// PRINT ALL CANON PRODUCTS //
// for (i = 0; i < allItems.length; i++) {
// 	if (allItems[i].product.brand === "Canon") {
// 		console.log(allItems[i].product.title);
// 	}
// };

// PRINT ALL CANON PRODUCTS & AUTHOR NAME === EBAY //
// for (i = 0; i < allItems.length; i++) {
// 	if (allItems[i].product.brand === "Canon" && (allItems[i].product.author.name).toLowerCase().includes("ebay")) {
// 		console.log(allItems[i].product.title);
// 	}
// };

// PRINT BRAND PRICE LINKS //
// for (i = 0; i < allItems.length; i++) {
// 	console.log(`Brand: ${allItems[i].product.brand}`);
// 	console.log(`Price: ${allItems[i].product.inventories[0].price}`);
// 	console.log(`Picture: ${allItems[i].product.images[0]["link"]}`);
// };

// testing
for (i = 0; i < allItems.length; i++) {
	allItems[i].product.brand === "Canon" && (allItems[i].product.author.name).toLowerCase().includes("ebay") && console.log(allItems[i].product.title);
};

// setInterval
// cleatInterval