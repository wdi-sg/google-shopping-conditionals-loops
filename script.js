// 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
// var itemList = products["items"];
// var itemCount = 0;
// itemList.forEach(function(items){
//   if (items.kind == "shopping#product") {
//     itemCount+=1;
//   }
// });
// console.log(itemCount);

// 2.) Print the title of all items with a backorder availability in inventories.
// var itemList = products["items"];
// var backOrderAvailable = "";
// itemList.forEach(function(items) {
//   if (items.product.inventories[0].availability == "backorder") {
//     backOrderAvailable += items["product"].title;
//   };
// });
// console.log(backOrderAvailable);

// 3.) Print the title of all items with more than one image link.
// var itemList = products["items"];
// var moreThanOneImageLink = "";
// itemList.forEach(function(items) {
//   if (items.product.images.length > 1) {
//     moreThanOneImageLink += items["product"].title;
//   };
// });
// console.log(moreThanOneImageLink);

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
// var itemList = products["items"];
// var productOfCanon = "";
// itemList.forEach(function(items) {
//   if ((items.product.brand).toLowerCase() == "canon") {
//     productOfCanon += items["product"].title;
//   };
// });

// console.log(productOfCanon);

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
// var itemList = products["items"];
// var eBayCanon = "";
// itemList.forEach(function(items) {
//   if (((items.product.brand).toLowerCase() == "canon") && ((items.product.author[0]) == "eBay")) {
//     eBayCanon += items["product"].title;
//   };
// });
// console.log(eBayCanon);

// 6.) Print all the products with their brand, price, and an image link
// var itemList = products["items"];
// for (i = 0; i < products.items.length; i++) {
//   var brand = products.items[i]["product"].brand;
//   var price = products.items[i]["product"].inventories[0].price;
//   var imageLink = products.items[i]["product"].images[0].link;
//   console.log("Item number " + (i + 1) + " is of brand " + brand + " and priced at $" + price + ". Check out the following link for its image: " + imageLink)
// };
