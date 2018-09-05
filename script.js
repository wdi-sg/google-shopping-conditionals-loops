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
// for (var i = 0; i < products.items.length; i++) {
// 	if (products.items[i].product.images.length > 1) {
// 		console.log(products.items[i].product.title)
// 	}
// };

//Part 4
// for (var i = 0; i < products.items.length; i++) {
//   if (products.items[i].product.brand === "Canon") {
//     console.log(products.items[i].product.title)
//   };
// };

//Part 5
// for (var i = 0; i < products.items.length; i++) {
// 	if ((products.items[i].product.author.name === "eBay") && (products.items[i].product.brand === "Canon")) {
// 		console.log(products.items[i].product.title)
// 	}
// };

//Part 6
// for (var i = 0; i < products.items.length; i++) {
// 	console.log(products.items[i].product.brand, products.items[i].product.inventories[0].price, products.items[i].product.images[0].link);
// };

var typeOfSearch = prompt("Do you want to search by brand or condition?");
var results = 0;

if (typeOfSearch === "brand") {
  var brandSearch = prompt("Which brand do you want to search for?")
  for (i = 0; i < products.items.length; i++) {
    if (brandSearch === products.items[i].product.brand) {
      console.log(products.items[i].product.title);
      results++
    };
  };
} else if (typeOfSearch === "condition") {
  var newOrOld = prompt("Do you want a new or old item?")
  for (i = 0; i < products.items.length; i++) {
    if (newOrOld === products.items[i].product.condition) {
      console.log(products.items[i].product.title)
    }
  };
} else {
  results++;
  console.log("Did you check your input? Please enter it correctly.");
}
if (results === 0) {
  console.log("No items were found which matched the brand that you entered. You may wanna try 'Sony', 'Nikon', 'Canon'. We don't sell Off-White.")
};
