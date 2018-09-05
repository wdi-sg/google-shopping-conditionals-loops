// count shopping#product
var shoppingProductsCount = 0;

var printItem = function (i) {
  console.log("Number: " + (i + 1));
  console.log("Title:" + products.items[i].product.title);
  console.log("Brand: " + products.items[i].product.brand);
  console.log("Price: " + products.items[i].product.inventories[0].price);
  console.log("Image Link: " + products.items[i].product.images[0].link);
}

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    shoppingProductsCount ++;
  }
}

console.log("No. of shopping products: " + shoppingProductsCount);

//print title of items with availability of backorder
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder") {
    console.log(products.items[i].product.title + " has an availability of backorder.");
  }
}

//print title of items with more than one image link
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.images.length > 1) {
    console.log(products.items[i].product.title + " has more than one image link.");
  }
}

//print all "Canon" products
for (var i = 0; i < products.items.length; i++) {
  brand = products.items[i].product.brand;
  if (brand.toLowerCase() === "canon") {
    console.log(products.items[i].product.title + " is a Canon product.");
  }
}

//print all items that have an author name of "eBay" and are brand "Canon"
for (var i = 0; i < products.items.length; i++) {
  brand = products.items[i].product.brand;
  author = products.items[i].product.author.name;
  if (brand.toLowerCase() === "canon" && author.toLowerCase().includes("ebay") === true) {
    console.log(products.items[i].product.title + " is a Canon product from eBay.");
  }
}

//print all products with their brand, price and an image link
for (var i = 0; i < products.items.length; i++) {
  printItem (i);
}

//prompt the user for the product brand and print only these products
//prompt the user to show only new or used products
//prompt the user to search by brand or condition
//then prompt the user to put in their actual search condition
//Print out some special error text if there were no results

var searchBool = confirm("Do you want to search for a product by brand or condition?");
var brandOrCondition;
var productsFound = 0;

if (searchBool === true) {
  do {
    brandOrCondition = prompt("Ok. Search by brand or condition? (no to cancel)").toLowerCase();
  } while (brandOrCondition !== "brand" && brandOrCondition !== "condition" && brandOrCondition !== "no");

  if (brandOrCondition === "brand") {

    var productBrand = prompt("What brand are you searching for?");

    console.log("Ok. Looking for '" + productBrand + "' products.");

    for (var i = 0; i < products.items.length; i++) {
      if (products.items[i].product.brand === productBrand) {
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
      for (var i =0; i < products.items.length; i++) {
        if (products.items[i].product.condition === "new") {
          printItem (i);
          productsFound ++;
        }
      }
    } else if (newOrUsed === "used") {
      for (var i =0; i < products.items.length; i++) {
        if (products.items[i].product.condition === "used") {
          printItem (i);
          productsFound ++;
        }
      }
    }
  }

  if (productsFound === 0) {
    console.log("Sorry! Nothing found.");
  }

}
