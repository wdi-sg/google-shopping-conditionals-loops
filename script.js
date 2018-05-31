// 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
// Option 1:
// var itemList = products["items"];
// var itemCount = 0;
// itemList.forEach(function(items){
//   if (items.kind == "shopping#product") {
//     itemCount+=1;
//   }
// });
// console.log(itemCount);

// Option 2:
// var itemList = products["items"];
// var itemCount = 0;
// for (i = 0; i < itemList.length; i++) {
//   if (itemList[i].kind == "shopping#product") {
//     itemCount += 1;
//   };
// };
// console.log(itemCount);

// Option 3:
// function getCount() {
//   var itemList = products["items"];
//   var itemCount = 0;
//   for (i = 0; i < itemList.length; i++) {
//     if (itemList[i].kind == "shopping#product") {
//       itemCount += 1;
//     };
//   };
//   return itemCount;
// };
// console.log(getCount());

// 2.) Print the title of all items with a backorder availability in inventories.
// var itemList = products["items"];
// var backOrderAvailable = "";
// itemList.forEach(function(items) {
//   if (items.product.inventories[0].availability == "backorder") {
//     backOrderAvailable += items["product"].title;
//   };
// });
// console.log(backOrderAvailable);

// Option 2:
// var itemList = products["items"];
// var backOrderAvailable = "";
// for (i = 0; i < itemList.length; i++) {
//   if (itemList[i].product.inventories[0].availability == "backorder") {
//     backOrderAvailable += itemList[i]["product"].title;
//   };
// };
// console.log(backOrderAvailable);

// Option 3:
// function getBackOrder() {
//   var itemList = products["items"];
//   var backOrderAvailable = "";
//   for (i = 0; i < itemList.length; i++) {
//     if (itemList[i].product.inventories[0].availability == "backorder") {
//       backOrderAvailable += itemList[i]["product"].title;
//     };
//   };
//   return backOrderAvailable;
// };
// console.log(getBackOrder());

// 3.) Print the title of all items with more than one image link.
// var itemList = products["items"];
// var moreThanOneImageLink = "";
// itemList.forEach(function(items) {
//   if (items.product.images.length > 1) {
//     moreThanOneImageLink += items["product"].title;
//   };
// });
// console.log(moreThanOneImageLink);

// Option 2:
// var itemList = products["items"];
// var moreThanOneImageLink = "";
// for (i = 0; i < itemList.length; i++) {
//   if (itemList[i].product.images.length > 1) {
//     moreThanOneImageLink += itemList[i]["product"].title;
//   };
// };
// console.log(moreThanOneImageLink);

// Option 3:
// function getTitleOne() {
//   var itemList = products["items"];
//   var moreThanOneImageLink = "";
//   for (i = 0; i < itemList.length; i++) {
//     if (itemList[i].product.images.length > 1) {
//       moreThanOneImageLink += itemList[i]["product"].title;
//     };
//   };
//   return moreThanOneImageLink;
// };
// console.log(getTitleOne());

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
// var itemList = products["items"];
// var productOfCanon = "";
// itemList.forEach(function(items) {
//   if ((items.product.brand).toLowerCase() == "canon") {
//     productOfCanon += items["product"].title;
//   };
// });
// console.log(productOfCanon);

// Option 2:
// var itemList = products["items"];
// var productOfCanon = "";
// for (i = 0; i < itemList.length; i++) {
//   if ((itemList[i].product.brand).toLowerCase() == "canon") {
//     productOfCanon += itemList[i]["product"].title;
//   };
// };
// console.log(productOfCanon);

// Option 3:
// function getTitleTwo() {
//   var itemList = products["items"];
//   var productOfCanon = "";
//   for (i = 0; i < itemList.length; i++) {
//     if ((itemList[i].product.brand).toLowerCase() == "canon") {
//       productOfCanon += itemList[i]["product"].title;
//     };
//   };
//   return productOfCanon;
// };
// console.log(getTitleTwo());

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
// var itemList = products["items"];
// var eBayCanon = "";
// for (i = 0; i < itemList.length; i++) {
//   if (((itemList[i].product.brand).toLowerCase() == "canon") && ((itemList[i].product.author.name) == "eBay")) {
//     eBayCanon += itemList[i]["product"].title;
//   };
// };
// console.log(eBayCanon);

// Option 2:
// var itemList = products["items"];
// var eBayCanon = "";
// for (i = 0; i < itemList.length; i++) {
//   if (((itemList[i].product.brand).toLowerCase() == "canon") && ((itemList[i].product.author.name) == "eBay")) {
//     eBayCanon += itemList[i]["product"].title;
//   };
// };
// console.log(eBayCanon);

// Option 3:
// function getTitleThree() {
//   var itemList = products["items"];
//   var eBayCanon = "";
//   for (i = 0; i < itemList.length; i++) {
//     if (((itemList[i].product.brand).toLowerCase() == "canon") && ((itemList[i].product.author.name) == "eBay")) {
//       eBayCanon += itemList[i]["product"].title;
//     };
//   };
//   return eBayCanon;
// };
// console.log(getTitleThree());

// 6.) Print all the products with their brand, price, and an image link
// var itemList = products["items"];
// function getInfo() {
//   for (i = 0; i < products.items.length; i++) {
//     var brand = products.items[i]["product"].brand;
//     var price = products.items[i]["product"].inventories[0].price;
//     var imageLink = products.items[i]["product"].images[0].link;
//     console.log("Item number " + (i + 1) + " is of brand " + brand + " and priced at $" + price + ". Check out the following link for its image: " + imageLink)
//   };
// };
// getInfo();
