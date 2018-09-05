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
// var inputBrandEdited = inputBrand[0].toUpperCase() + inputBrand.substring(1).toLowerCase();
// var inputCondition = prompt("Do you prefer 'new' or 'used'");
// var inputConditionEdited = inputCondition.toLowerCase();


// for (var i = 0; i < items.length; i++ ) {

//   var brand =  items[i].product.brand;
//   var price = items[i].product.inventories[0].price
//   var itemImage = items[i].product.images;
//   var randomImglink = Math.floor(Math.random() * itemImage.length);
//   var condition = items[i].product.condition;

//   if ( brand === inputBrandEdited && condition === inputConditionEdited) {
//     console.log(`Brand: ${brand} \n Price: ${price} \n Condition: ${condition} \n Image: ${itemImage[randomImglink].link}`);
//   }
// }

/* Further
Prompt the user what kind of search they want to do- search by brand or search by condition.

Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)

Print out some special error text (e.g. "Sorry, nothing found") if there were no results.*/

var brandsArray = [];
var conditionArray = [];

var prompt1 = prompt("Would you prefer to search by 'brand' or 'condition");
var promptEdited = prompt1.toLowerCase();


if (promptEdited === "brand") {
  var input = prompt("Enter a brand");
  var inputEdited = input[0].toUpperCase() + input.substring(1).toLowerCase();
} else if (promptEdited === "condition") {
  var input = prompt("Do you prefer 'new' or 'used'");
  var inputEdited = input.toLowerCase();
}

for (var i = 0; i < items.length; i++) {

  var brand =  items[i].product.brand;
  brandsArray.push(brand);
  var price = items[i].product.inventories[0].price
  var itemImage = items[i].product.images;
  var randomImglink = Math.floor(Math.random() * itemImage.length);
  var condition = items[i].product.condition;
  conditionArray.push(condition);


  if (brand === inputEdited || condition === inputEdited ) {
    console.log(`Brand: ${brand} \n Price: ${price} \n Condition: ${condition} \n Image: ${itemImage[randomImglink].link}`);
  }

}


if (!brandsArray.includes(inputEdited) && promptEdited === "brand") {

  console.log("Sorry, nothing found");

} else if (!conditionArray.includes(inputEdited) && promptEdited === "condition") {

  console.log("Sorry, nothing found");

}


