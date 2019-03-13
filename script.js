//go through items --> find all results with "kind" = "shopping#product"

var pdtsItem = products.items;
var numShoppingProduct = 0;

for (var i = 0; i < pdtsItem.length; i++) {
  if(pdtsItem[i].kind === "shopping#product") {
    numShoppingProduct += 1;
  }
}
console.log(numShoppingProduct + " items have the kind shopping#product");

//print title of all items with backorder

var numBackorder = 0;

for (var i = 0; i < pdtsItem.length; i++){
  if(pdtsItem[i].product.inventories[0].availability === "backorder") {
    console.log(i + ") " + pdtsItem[i].product.title);
    numBackorder += 1;
  }
}

console.log(numBackorder + " items are on backorder");

//Print the title of all items with more than one image link.

var numMultiImage = 0;

for (var i = 0; i < pdtsItem.length; i++){
  if(pdtsItem[i].product.images.length > 1) {
    console.log(i + ") " + pdtsItem[i].product.title);
    numMultiImage += 1;
  }
}

console.log(numMultiImage + " items have more than one image link");

//Print all "Canon" products in the items (careful with case sensitivity).

var numCanon = 0;

for (var i = 0; i < pdtsItem.length; i++){
  if(pdtsItem[i].product.brand === "Canon" || pdtsItem[i].product.brand === "canon") {
    console.log(i + ") " + pdtsItem[i].product.title);
    numCanon += 1;
  }
}

console.log(numCanon + " items are Canon branded");

//Print all items that have an author name of "eBay" and are brand "Canon".

var numCanonEbay = 0;

for (var i = 0; i < pdtsItem.length; i++){
  if(pdtsItem[i].product.brand === "Canon" && pdtsItem[i].product.author.name.search("eBay") >= 0) {
    console.log(i + ") " + pdtsItem[i].product.title);
    numCanonEbay += 1;
  }
}

console.log(numCanonEbay + " items are Canon branded and from Ebay");

//Print all the products with their brand, price, and an image link

for (var i = 0; i < pdtsItem.length; i++){
  console.log(i + ") " + pdtsItem[i].product.title);
  console.log(pdtsItem[i].product.brand);
  console.log(pdtsItem[i].product.inventories[0].price);
  console.log(pdtsItem[i].product.images[0]);
}

//Prompt the user for the product brand and print only those products.
//Prompt the user if they want to see only new or used items.

// var brandPrompt = prompt ("search our database for products for your brand of choice!").toLowerCase();
// var brandPromptProper = brandPrompt.charAt(0).toUpperCase()+brandPrompt.slice(1,brandPrompt.length);
// var condPrompt = prompt ("are you looking for a new or used model?").toLowerCase();

// for (var i = 0; i < pdtsItem.length; i++){
//   if(pdtsItem[i].product.brand === brandPromptProper && pdtsItem[i].product.condition === condPrompt ) {
//     console.log(i + ") " + pdtsItem[i].product.title);
//   }
// }

//Prompt the user what kind of search they want to do- search by brand or search by condition.
//Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)
//Print out some special error text (e.g. "Sorry, nothing found") if there were no results.

var brandOrCond = prompt ("Do you want to search by brand or condition?").toLowerCase();

if (brandOrCond === "brand") {
  var brandPrompt2 = prompt ("search our database for products for your brand of choice!").toLowerCase();
  var brandPromptProper2 = brandPrompt2.charAt(0).toUpperCase()+brandPrompt2.slice(1,brandPrompt2.length);
  var brandCount = 0;

  for (var i = 0; i < pdtsItem.length; i++){
    if(pdtsItem[i].product.brand === brandPromptProper2) {
      brandCount += 1;
      console.log(i + ") " + pdtsItem[i].product.title);
    }
  }

} else if (brandOrCond === "condition") {
  var condPrompt2 = prompt ("are you looking for a new or used model?").toLowerCase();
  var condCount = 0;

  for (var i = 0; i < pdtsItem.length; i++){
    if(pdtsItem[i].product.condition === condPrompt2 ) {
      condCount += 1;
      console.log(i + ") " + pdtsItem[i].product.title);
    }
  }

} else {
  console.log("Did you tell us to search by brand or conditions?");
}

if (brandCount === 0 && brandOrCond === "brand" || condCount === 0 && brandOrCond === "condition") {
  console.log("Sorry, nothing found");
  }
