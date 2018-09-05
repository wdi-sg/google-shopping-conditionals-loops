//Part 1
// var count = 0;

 var items = products.items;

// for (var i = 0; i < items.length; i++) {

//   if (items[i].kind === "shopping#product") {
//     count += 1;
//   }
// }

//console.log(count);


// Part 2
// for (var i = 0; i < items.length; i++) {

//   var itemInventory = items[i].product.inventories[0].availability;

//   if (itemInventory === "backorder" ) {
//     console.log(items[i].product.title);
//   }
// }

// Part 3 - Print the title of all items with more than one image link.
// for (var i =0; i < items.length; i++) {

//   var itemImage = items[i].product.images;

//   if (itemImage.length > 1) {
//     console.log(items[i].product.title);
//   }
// }

// Part 4 - Print all "Canon" products in the items (careful with case sensitivity).

// for (var i =0; i < items.length; i++) {

//   var itemBrand = items[i].product.brand;

//   if (itemBrand === "Canon") {
//     console.log(items[i].product.title);
//   }
// }

// Part 5 - Print all items that have an author name of "eBay" and are brand "Canon".

// for (var i = 0; i < items.length; i++) {

//   var author = items[i].product.author.name;
//   var brand =  items[i].product.brand;

//   if (author === "eBay" && brand === "Canon") {
//     console.log(items[i])
//   }
// }

//Part 6 - Print all the products with their brand, price, and an image link

// for (var i = 0; i < items.length; i++) {

//   var brand =  items[i].product.brand;
//   var price = items[i].product.inventories[0].price
//   var itemImage = items[i].product.images;
//   var randomImglink = Math.floor(Math.random() * itemImage.length);

//   console.log(`Brand: ${brand} \n Price: ${price} \n Image: ${itemImage[randomImglink].link}`);

// }

/* Further
Prompt the user for the product brand and print only those products.
Prompt the user if they want to see only new or used items.*/

// var inputBrand = prompt("Enter a brand");
// var inputCondition = prompt("Do you prefer 'new' or 'used'");


// for (var i = 0; i < items.length; i++ ) {

//   var brand =  items[i].product.brand;
//   var price = items[i].product.inventories[0].price
//   var itemImage = items[i].product.images;
//   var randomImglink = Math.floor(Math.random() * itemImage.length);
//   var condition = items[i].product.condition;

//   if ( brand === inputBrand && condition === inputCondition) {
//     console.log(`Brand: ${brand} \n Price: ${price} \n Condition: ${condition} \n Image: ${itemImage[randomImglink].link}`);
//   }
// }

/* Further
Prompt the user what kind of search they want to do- search by brand or search by condition.

Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)*/

var inputArray = [];


var prompt1 = prompt("Would you prefer to search by 'brand' or 'condition");


if (prompt1 === "brand") {
  input = prompt("Enter a brand");
  inputArray.push(input);
} else if (prompt1 === "condition") {
  input = prompt("Do you prefer 'new' or 'used'");
  inputArray.push(input);
}

for (var i = 0; i < items.length; i++ ) {

  var brand =  items[i].product.brand;
  var price = items[i].product.inventories[0].price
  var itemImage = items[i].product.images;
  var randomImglink = Math.floor(Math.random() * itemImage.length);
  var condition = items[i].product.condition;

  if (brand === inputArray[0] || condition === inputArray[0] ) {
    console.log(`Brand: ${brand} \n Price: ${price} \n Condition: ${condition} \n Image: ${itemImage[randomImglink].link}`);
  }

}

// if ( brand !== inputArray[0] || condition !== inputArray[0]) {
//   console.log("Sorry, nothing found")
//   break;
//   }


















