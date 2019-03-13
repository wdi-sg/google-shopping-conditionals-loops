console.log("Assignment2");

// ------------------------------------------------------------------------------------------------------------------------

// Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

// var count = 0;

// var itemsOfProducts = products["items"];
// // var itemsOfProductsKind = itemsOfProducts["kind"];
// console.log(itemsOfProducts);

// for(var i=0; i < itemsOfProducts.length; i++) {

//   var item = itemsOfProducts[i]

//   if(item["kind"] == "shopping#product") {
//     count = count + 1;
//   }
// }

// console.log(count);

// This count information is stored in the CurrentItemCount and itemsPerPage key

// ------------------------------------------------------------------------------------------------------------------------

// Print the title of all items with a backorder availability in inventories.

// var count = 0;
// var itemsWithBackorder = [];

// var itemsOfProducts = products["items"];
// for(var j=0; j < itemsOfProducts.length; j++) {

//    var inventory = itemsOfProducts[j]["product"]["inventories"];

//     // console.log(inventory[0]);

//    if(inventory[0]["availability"] == "backorder") {
//     itemsWithBackorder.push(itemsOfProducts[j]["product"]["title"]);
//     count++;
//    }

// }
// console.log(count)
// console.log(itemsWithBackorder);

// ------------------------------------------------------------------------------------------------------------------------

// Print the title of all items with more than one image link.

// var count = 0;
// var itemsWithMoreThanOneImageLink = [];

// var itemsOfProducts = products["items"];
// for(var k=0; k < itemsOfProducts.length; k++) {

//   var itemImageArray = itemsOfProducts[k]["product"]["images"];
//   console.log(itemImageArray);

//   if(itemImageArray.length > 1) {
//     itemsWithMoreThanOneImageLink.push(itemsOfProducts[k]["product"]["title"]);
//     count++;
//   }


// }

// console.log(count);
// console.log(itemsWithMoreThanOneImageLink);

// ------------------------------------------------------------------------------------------------------------------------

// Print all "Canon" products in the items (careful with case sensitivity).

// var count = 0;
// var itemsCanonBrand = [];

// var itemsOfProducts = products["items"];

// for(var x=0; x< itemsOfProducts.length; x++) {

//   var itemBrand = itemsOfProducts[x]["product"]["brand"];
//   console.log(itemBrand);

//   if(itemBrand == "Canon") {
//     itemsCanonBrand.push(itemsOfProducts[x]["product"]["title"]);
//     count++;
//   }
// }

// console.log(count);
// console.log(itemsCanonBrand);

// ------------------------------------------------------------------------------------------------------------------------

// Print all items that have an author name of "eBay" and are brand " Canon".

// var count = 0;
// var itemsCanonBrandAndEBayAuthor = [];

// var itemsOfProducts = products["items"];

// for(var y=0; y< itemsOfProducts.length; y++) {

//   var itemBrand = itemsOfProducts[y]["product"]["brand"];
//   var itemAuthorName = itemsOfProducts[y]["product"]["author"]["name"];


//   if( itemBrand.toLowerCase() == "canon" && (itemAuthorName.toLowerCase().includes("ebay")) ) {
//     itemsCanonBrandAndEBayAuthor.push(itemsOfProducts[y]["product"]["title"]);
//     count++;
//   }
// }

// console.log(count);
// console.log(itemsCanonBrandAndEBayAuthor);

// Print all the products with their brand, price, and an image link

// var count = 0;

// var itemsOfProducts = products["items"];
// var itemsBrandPriceImage = [];

// for(var z=0; z<itemsOfProducts.length; z++) {

//   var itemBrand = itemsOfProducts[z]["product"]["brand"];

//   itemsBrandPriceImage.push(itemBrand);

//   var inventory = itemsOfProducts[z]["product"]["inventories"];
//   var itemPrice = inventory[0]["price"];
//   var itemCurrency = inventory[0]["currency"];
//   var itemPriceAndCurrency = itemCurrency + " " + itemPrice;

//   itemsBrandPriceImage.push(itemPriceAndCurrency);

//   var itemImageArray = itemsOfProducts[z]["product"]["images"];

//   for(var index=0; index<itemImageArray.length; index++) {

//     var itemImageLink = itemImageArray[index]["link"];
//     itemsBrandPriceImage.push(itemImageLink);
//   }

// }

// console.log(itemsBrandPriceImage);

// Prompt the user for the product brand and print only those products.

// var userBrandInput = prompt("What brand of product do you want to search for?")

// var count = 0;
// var results = [];

// var itemsOfProducts = products["items"];

// for(var x=0; x< itemsOfProducts.length; x++) {

//   var itemBrand = itemsOfProducts[x]["product"]["brand"];
//   // console.log(itemBrand);

//   if(itemBrand.toLowerCase() == userBrandInput.toLowerCase()) {
//     results.push(itemsOfProducts[x]["product"]["title"]);
//     count++;
//   }
// }

// console.log(count);
// console.log(results);

// ------------------------------------------------------------------------------------------------------------------------

// Prompt the user if they want to see only new or used items.


// var count = 0;
// var results = [];

// var itemsOfProducts = products["items"];

// var userNewOrUsedInput = prompt("Do you want to search for new or used products?")

// if(userNewOrUsedInput.toLowerCase() == "new") {
// for(var x=0; x< itemsOfProducts.length; x++) {

//   var itemCondition = itemsOfProducts[x]["product"]["condition"];

//   if(itemCondition.toLowerCase() == "new") {
//     results.push(itemsOfProducts[x]["product"]["title"]);
//     count++;
//   }
// }

// console.log(count);
// console.log(results);

// } else if(userNewOrUsedInput.toLowerCase() == "used") {
// for(var y=0; y< itemsOfProducts.length; y++) {

//   var itemCondition = itemsOfProducts[y]["product"]["condition"];

//   if(itemCondition.toLowerCase() == "used") {
//     results.push(itemsOfProducts[y]["product"]["title"]);
//     count++;
//   }
// }

// console.log(count);
// console.log(results);

// } else {
//   console.log("Sorry, nothing found")
// }

// ------------------------------------------------------------------------------------------------------------------------

// Prompt the user what kind of search they want to do- search by brand or search by condition.

// Then prompt the user to put in their actual search value- (new/used for condition or brand name for brand)

var count = 0;
var results = [];

var itemsOfProducts = products["items"];

var userInputSearchByBrandOrCondition = prompt("Do you want to search by brand or condition?");
if(userInputSearchByBrandOrCondition.toLowerCase() == "brand") {

  var userBrandInput = prompt("What brand of product do you want to search for?")

  var count = 0;
  var results = [];

  var itemsOfProducts = products["items"];

  for(var x=0; x< itemsOfProducts.length; x++) {

      var itemBrand = itemsOfProducts[x]["product"]["brand"];
      // console.log(itemBrand);

    if(itemBrand.toLowerCase() == userBrandInput.toLowerCase()) {
      results.push(itemsOfProducts[x]["product"]["title"]);
      count++;
    }
}

console.log(count);
console.log(results);

} else if(userInputSearchByBrandOrCondition.toLowerCase() == "condition") {

var userNewOrUsedInput = prompt("Do you want to search for new or used products?")

if(userNewOrUsedInput.toLowerCase() == "new") {
for(var x=0; x< itemsOfProducts.length; x++) {

  var itemCondition = itemsOfProducts[x]["product"]["condition"];

  if(itemCondition.toLowerCase() == "new") {
    results.push(itemsOfProducts[x]["product"]["title"]);
    count++;
  }
}

console.log(count);
console.log(results);

} else if(userNewOrUsedInput.toLowerCase() == "used") {
for(var y=0; y< itemsOfProducts.length; y++) {

  var itemCondition = itemsOfProducts[y]["product"]["condition"];

  if(itemCondition.toLowerCase() == "used") {
    results.push(itemsOfProducts[y]["product"]["title"]);
    count++;
  }
}

console.log(count);
console.log(results);

} else {
  console.log("Sorry, nothing found")
}


} else {
  console.log("Sorry, nothing found");
}

