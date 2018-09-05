var items = products.items;

var printTitle = function(i) {
  console.log(items[i].product.title);
}

var printItem = function (i) {
  printTitle(i);
  console.log("Brand: " + items[i].product.brand);
  console.log("Price: $" + items[i].product.inventories[0].price);
  console.log("Image: " + items[i].product.images[0].link);
}

/*

// Go through the items and find all results that have kind of shopping#product. Print the count of these results.
var shoppingProductsCount = 0;

for (var i = 0; i < items.length; i++) {
  if (items[i].kind === "shopping#product") {
    shoppingProductsCount ++;
  }
}
console.log("No. of shopping products: " + shoppingProductsCount);


//Print the title of all items with a backorder availability in inventories.
for (var i = 0; i < items.length; i++) {
  if (items[i].product.inventories[0].availability === "backorder") {
    printTitle(i);
  }
}

//Print the title of all items with more than one image link.
for (var i = 0; i < items.length; i++) {
  if (items[i].product.images.length > 1) {
    printTitle(i);
  }
}

//Print all "Canon" products in the items (careful with case sensitivity).
for (var i = 0; i < items.length; i++) {
  if (items[i].product.brand.toLowerCase() === "canon") {
    printTitle(i);
  }
}

//Print all items that have an author name of "eBay" and are brand "Canon".
for (var i = 0; i < items.length; i++) {
  if (items[i].product.brand.toLowerCase() === "canon" && items[i].product.author.name.toLowerCase().includes("ebay")) {
    printTitle(i);
  }
}

//print all products with their brand, price and an image link
for (var i = 0; i < items.length; i++) {
  printItem (i);
}

*/

//Prompt the user for the product brand and print only those products.
//Prompt the user if they want to see only new or used items.
//Prompt the user what kind of search they want to do- search by brand or search by condition.
//Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)
//Print out some special error text (e.g. "Sorry, nothing found") if there were no results.

var productsFound = 0;

var searchBool = confirm("Do you want to search for a product by brand or condition?");

if (searchBool) {

  var brandOrCondition;

  do {
    brandOrCondition = prompt("Ok. Search by brand or condition?").toLowerCase();
  } while (brandOrCondition !== "brand" && brandOrCondition !== "condition");

  if (brandOrCondition === "brand") {

    var searchBrand = prompt("What brand are you searching for?");
    console.log("Ok. Looking for '" + searchBrand + "' products.");

    for (var i = 0; i < items.length; i++) {
      if (items[i].product.brand.toLowerCase() === searchBrand.toLowerCase()) {
        printItem (i);
        productsFound ++;
      }
    }
  } else if (brandOrCondition ==="condition") {

    var newOrUsed;

    do {
      newOrUsed = prompt("Ok. New or used products?").toLowerCase();
    } while (newOrUsed !== "new" && newOrUsed !== "used");

    if (newOrUsed === "new") {
      for (var i =0; i < items.length; i++) {
        if (items[i].product.condition === "new") {
          printItem (i);
          productsFound ++;
        }
      }
    } else if (newOrUsed === "used") {
      for (var i =0; i < items.length; i++) {
        if (items[i].product.condition === "used") {
          printItem (i);
          productsFound ++;
        }
      }
    }
  }
} else {
  console.log("Ok. Listing all results.");

  for (var i = 0; i < items.length; i++) {
    printItem (i);
    productsFound ++;
  }
}

if (productsFound > 1) {
  console.log(productsFound + " products found.");
} else if (productsFound === 1) {
  console.log("1 product found.")
} else if (productsFound === 0) {
  console.log("Sorry! Nothing found.");
}
