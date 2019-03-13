//all results that have kind of shopping#product.
var arrayOfItems = products.items;

// var count = 0;
// for (var i = 0; i < arrayOfItems.length;i++){
//   if (arrayOfItems[i].kind === "shopping#product"){
//     count++;
//   }
// }
// console.log(`Number of items: ${count}`);
// //Count information is also stored at products.currentItemCount

// //Print the title of all items with a backorder availability in inventories.
// console.log("Items with a backorder availability");
// for (var i = 0; i < arrayOfItems.length;i++){
//   if (arrayOfItems[i].product.inventories[0].availability === "backorder"){
//     console.log(`- ${arrayOfItems[i].product.title}`);
//   }
// }

// //Print the title of all items with more than one image link.
// console.log("Items with more than one image link");
// for (var i = 0;i < arrayOfItems.length;i++){
//   if (arrayOfItems[i].product.images.length > 1) {
//     console.log(`- ${arrayOfItems[i].product.title}`);
//   }
// }

// //Print all "Canon" products in the items
// console.log("List of Canon Products")
// for (var i = 0;i < arrayOfItems.length;i++){
//   if (arrayOfItems[i].product.brand === "Canon") {
//     console.log(`- ${arrayOfItems[i].product.title}`);
//   }
// }

// //Print all items that have an author name of "eBay" and are brand "Canon".
// //Used the String include() as there were some items with author name like "eBay - Bigvalueinc"
// console.log("Items that have an author name of 'eBay' and are brand 'Canon'")
// for (var i = 0;i < arrayOfItems.length;i++) {
//   if (arrayOfItems[i].product.author.name.includes("eBay") && arrayOfItems[i].product.brand === "Canon") {
//     console.log(`- ${arrayOfItems[i].product.title}`);
//   }
// }

//Print all the products with their brand, price, and an image link
// for (var i = 0;i < arrayOfItems.length;i++) {
//   var itemBrand   = arrayOfItems[i].product.brand;
//   var itemPrice   = arrayOfItems[i].product.inventories[0].price;
//   //Hard coding the first link of the array..
//   var itemImgLink = arrayOfItems[i].product.images[0].link;
//   console.log(`Brand is ${itemBrand}`);
//   console.log(`Price $${itemPrice}`);
//   console.log(`${itemImgLink}`);
// }

//Prompt user to enter brand and condition
// var brand     = prompt("Enter a product brand");
// var condition = prompt("New or Used?");
// console.log("Your search returns the following results:")
// for (var i = 0;i < arrayOfItems.length;i++) {
//   if (arrayOfItems[i].product.brand.toLowerCase() === brand.toLowerCase() &&
//       arrayOfItems[i].product.condition.toLowerCase() === condition.toLowerCase()) {
//     console.log(`- ${arrayOfItems[i].product.title}`);
//   }
// }

//Prompt user on what kind of search they want..
var choice = prompt("Search by Brand or Condition?");
var itemFound = false;
if (choice.toLowerCase() === "brand") {
  var brand = prompt("Enter a product brand");
  for (var i = 0;i < arrayOfItems.length;i++) {
    if (arrayOfItems[i].product.brand.toLowerCase() === brand.toLowerCase()) {
      console.log(`- ${arrayOfItems[i].product.title}`);
      itemFound = true;
    }
  }
  if (itemFound === false) {
    alert("Sorry, nothing found");
  }
} else if (choice.toLowerCase() === "condition" ) {
  var condition = prompt("New or Used?");
  for (var i = 0;i < arrayOfItems.length;i++) {
    if (arrayOfItems[i].product.condition.toLowerCase() === condition.toLowerCase()) {
      console.log(`- ${arrayOfItems[i].product.title}`);
    }
  }
  if (itemFound === false) {
    alert("Sorry, nothing found");
  }
} else {
  alert("INVALID INPUT");
}







