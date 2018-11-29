var count = 0;
var productItems = products.items;
var backorder;
// to calculate and print the number of products with 'kind ' 'shopping#products'
for (i = 1; i < products.kind.length; ++i) {
  count = count + 1;
} // for
console.log("There are " + count + " items that have 'kind' of 'shopping#products'.");
console.log("****************************************************************************************************");

// to calculate and print for backorder in inventory
for ( i = 0; i < productItems.length; ++i) {
  var itemProduct = productItems[i];
  var catalogue = itemProduct.product;
  var inventory = catalogue.inventories;
  var productImage = catalogue.images;
  var author = catalogue.author.name;

  for (j = 0; j < inventory.length; ++j) {
    var inventoryCheck = inventory[j];
// to check for backorder in inventory's availability
    if (inventoryCheck['availability'] === "backorder") {
      console.log(catalogue.title + " is currently out of stock.");
    } // if
  } // for
} // for
console.log("****************************************************************************************************");

// to check and print for images with more than one link
for (i = 0; i < productItems.length; ++i) {
  var itemProduct = productItems[i];
  var catalogue = itemProduct.product;
  var inventory = catalogue.inventories;
  var productImage = catalogue.images;
  var author = catalogue.author.name;
  if (productImage.length > 1 ) {
    console.log(catalogue.title + " has more than one image link")
  } // if
} // for
console.log("****************************************************************************************************");

// checks and print for brands belonging to Canon
for (i = 0; i < productItems.length; ++i) {
  var itemProduct = productItems[i];
  var catalogue = itemProduct.product;
  var inventory = catalogue.inventories;
  var productImage = catalogue.images;
  var author = catalogue.author.name;
  if (catalogue.brand === "Canon") {
    console.log(catalogue.title + " belonging to 'Canon' Brand.");
  } // if
}; // for
console.log("****************************************************************************************************");

//check and print titles with Canon Brand and sold on eBay
for (i = 0; i < productItems.length; ++i) {
  var itemProduct = productItems[i];
  var catalogue = itemProduct.product;
  var inventory = catalogue.inventories;
  var productImage = catalogue.images;
  var author = catalogue.author.name;
  if (catalogue.brand === "Canon") {
    console.log(catalogue.title + " belonging to 'Canon' Brand.");
    if (author.slice(0, 4) === "eBay") {
    console.log(catalogue.title + " is sold on eBay");
    } // if
  } // if
} // for
console.log("****************************************************************************************************");

//Prints all products' brand, price and image link
for (i = 0; i < productItems.length; ++i) {
  var itemProduct = productItems[i];
  var catalogue = itemProduct.product;
  var inventory = catalogue.inventories;
  var productImage = catalogue.images;
  var author = catalogue.author.name;
  for (j = 0; j < inventory.length; ++j) {
    var inventoryCheck = inventory[j];
    console.log("Brand: " + catalogue.brand);
    console.log("Price: $" + inventoryCheck['price']);
    for (k = 0; k < productImage.length; ++k) {
      console.log("Image Link: " + productImage[k].link);
    } // for
  } // for
} // for
console.log("****************************************************************************************************");

//prompts user to input brand and store as string with first letter uppercase only
var userInputBrand = prompt("What product brand are you looking for? ");
if ( userInputBrand === "" || userInputBrand === null) {
  console.log("No brand given");
} else {
var userInput = userInputBrand.substring(0, 1).toUpperCase(userInputBrand.charAt(0))+ userInputBrand.substring(1).toLowerCase(userInputBrand.substring(1));
//to check userInput through all available brand
  if (availableBrands.indexOf(userInput) < false) {
    console.log("The brand is not available");
  }; // if
} // if else

//prompts user to input condition of product
var availableBrands = ["Canon", "Sony", "Nikon", "Lytro", "Panasonic", "Samsung", "Fuji", "Olympus", "Pentax"];
var userCondition = prompt("Would you like to buy a new or used product? ");
if ( userCondition === "" || userCondition === null) {
  console.log("No condition given");
} else {
  var condition = userCondition.substring(0, 1).toUpperCase(userCondition.charAt(0))+ userCondition.substring(1).toLowerCase(userCondition.substring(1));
} // if else

if (condition !== "New" || condition !== "Used") {
  console.log("Invalid condition input");
}; // if

//prints brand and condition according to user input
for (i = 0; i < productItems.length; ++i) {
  var itemProduct = productItems[i];
  var catalogue = itemProduct.product;
  var inventory = catalogue.inventories;
  var productImage = catalogue.images;
  var author = catalogue.author.name;
  if (condition === "New" && catalogue.condition === "new") {
    switch (userInput) {
      case ("Canon"):
        console.log(catalogue.title + " belongs to Canon");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Sony"):
        console.log(catalogue.title + " belongs to Sony");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Nikon"):
        console.log(catalogue.title + " belongs to Nikon");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Lytro"):
        console.log(catalogue.title + " belongs to Lytro");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Panasonic"):
        console.log(catalogue.title + " belongs to Panasonic");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Samsung"):
        console.log(catalogue.title + " belongs to Samung");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Fuji"):
        console.log(catalogue.title + " belongs to Fuji");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Olympus"):
        console.log(catalogue.title + " belongs to Olympus");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Pentax"):
        console.log(catalogue.title + " belongs to Pentax");
        console.log("Condition of product: " + catalogue.condition);
        break;
    }; // switch
  } else if (condition === "Used" && catalogue.condition === "used") {
    switch (userInput) {
      case ("Canon"):
        console.log(catalogue.title + " belongs to Canon");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Sony"):
        console.log(catalogue.title + " belongs to Sony");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Nikon"):
        console.log(catalogue.title + " belongs to Nikon");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Lytro"):
        console.log(catalogue.title + " belongs to Lytro");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Panasonic"):
        console.log(catalogue.title + " belongs to Panasonic");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Samsung"):
        console.log(catalogue.title + " belongs to Samung");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Fuji"):
        console.log(catalogue.title + " belongs to Fuji");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Olympus"):
        console.log(catalogue.title + " belongs to Olympus");
        console.log("Condition of product: " + catalogue.condition);
        break;
      case ("Pentax"):
        console.log(catalogue.title + " belongs to Pentax");
        console.log("Condition of product: " + catalogue.condition);
        break;
    }; // switch
  };
}; // for

console.log("****************************************************************************************************");


