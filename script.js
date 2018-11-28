// var shoppingProduct;

// for ( var i = 0; i < products.length; i++) {
//   if (shoppingProduct[i] === "shopping#products"){
//     shoppingProduct += 1
//   }
// }

// console.log(shoppingProduct);


// for (var kind in products) {
//   console.log(products[kind])
// }


var arrayItems = products.items;
var numberOfKind = 0;

for ( var i = 0; i < arrayItems.length; i++) {
  if (arrayItems[i].kind === "shopping#product"){
    numberOfKind += 1;
  }
}

console.log(numberOfKind);



for (var i = 0; i < products.items.length; i++) {
    var availability = products.items[i].product.inventories[0].availability;
    if (availability === "backorder"){
        console.log(products.items[i].product.title)

}
}



for (var i = 0; i < products.items.length; i++) {
  if ( products.items[i].product.images.length > 1)
    console.log(products.items[i].product.title)
}

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand === "Canon")
    console.log(products.items[i].product.title)
}

//Print all items that have an author name of "eBay" and are brand "Canon".
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand === "Canon" && products.items[i].product.author.name === "eBay")
    console.log(products.items[i].product.title)
}

//Print all the products with their brand, price, and an image link

for (var i = 0; i < products.items.length; i++) {
    console.log ("Brand: " + products.items[i].product.brand + ". " + "Price: " + products.items[i].product.inventories[0].price + ". " + "Link: " + products.items[i].product.images[0].link)
}


// Prompt the user for the product brand and print only those products.
// Prompt the user if they want to see only new or used items.

var productBrand = prompt("Product Brand (Canon, Lytro, Nikon, Sony");
for (var i = 0; i < products.items.length; i++ ) {
  if (products.items[i].product.brand.toLowerCase() === productBrand)
    console.log(products.items[i].product.brand)
}

var newOrUsed = prompt("Do you want a new one or a used one?");
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.condition === "new" || products.items[i].product.condition === "used")
    console.log(products.items[i].product.condition);
}


//Prompt the user what kind of search they want to do- search by brand or search by condition.
//Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)

// var whatKind = prompt("Brand or condition?");

//   if (whatKind === "brand"){
//     var whatBrand = prompt("What brand?")
//     for (var i = 0; i < products.items.length; i++ ) {
//     console.log(products.items[i].product.brand);
//   }

//   else if (whatKind === "condition") {
//     var whatCondition = prompt("What condition?")
//     for (var i = 0; i < products.items.length; i++) {
//     console.log(products.items[i].product.condition);
//     }
//   }
//   else {
//     console.log("error");
//   }
// }
