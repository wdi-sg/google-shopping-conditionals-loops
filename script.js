//submission not scalable, assumes data structure is known

// //this variable is used for all deliverables and furthers
var arrayItems = products.items;

// //this block for D1
var itemCount = 0;
for (var i = 0; i < arrayItems.length; i++) {
  if (arrayItems[i].kind === "shopping#product") {
    itemCount++;
    }
  };
console.log(itemCount);

// //this block for D1b
console.log("Count info retrieved from value of 'products.currentItemCount': " + products.currentItemCount);

// //this block for D2
for (var i = 0; i < arrayItems.length; i++) {
  if (arrayItems[i].product.inventories[0].availability === "backorder") {
      console.log(arrayItems[i].product.title)
    }
  };

// //this block for D3
for (var i = 0; i < arrayItems.length; i++) {
  if (arrayItems[i].product.images.length > 1) {
      console.log(arrayItems[i].product.title)
    }
  };

// //this is for D4
for (var i = 0; i < arrayItems.length; i++) {
  if (arrayItems[i].product.brand === "Canon") {
      console.log(arrayItems[i].product.title)
    }
  };

// //this is for D5
for (var i = 0; i < arrayItems.length; i++) {
  if ( (arrayItems[i].product.brand === "Canon") && (arrayItems[i].product.author.name.includes("eBay")) ) {
      // console.log(arrayItems[i]);
      console.log(arrayItems[i].product.author.name);
    }
  };

// //this is for D6
for (var i = 0; i < arrayItems.length; i++) {
  console.log(arrayItems[i].product.brand + ", " + arrayItems[i].product.inventories[0].price + ", " + arrayItems[i].product.images[0].link);
  };

// //F1a
var brandInput = prompt("Which product brand are you looking for? Type in one option: Nikon, Sony, Canon, Lytro, Panasonic, Samsung, Fuji, Olympus, Pentax")

for (var i = 0; i < arrayItems.length; i++) {
  if (arrayItems[i].product.brand.toLowerCase() === brandInput.toLowerCase()) {
      console.log(arrayItems[i].product);
  }
};

// //F1b
var conditionInput = prompt("Would you like to see only new or used items?");

// //F2+3
var nil = true;
var searchInput = prompt("Would you like to search by 'Brand' or 'Condition'?");

if (searchInput.toLowerCase() === "brand") {
  var brandInput = prompt("What is the brand name? Nikon, Sony, Canon, Lytro, Panasonic, Samsung, Fuji, Olympus, or Pentax?");
    for (var i = 0; i < arrayItems.length; i++) {
      if (arrayItems[i].product.brand.toLowerCase() === brandInput.toLowerCase()) {
          console.log(arrayItems[i].product);
          nil = false;
        }
    }
}
else if (searchInput.toLowerCase() === "condition") {
  var conditionInput = prompt("Would you like to see only new or used items?");
    for (var i = 0; i < arrayItems.length; i++) {
      if (arrayItems[i].product.condition.toLowerCase() === conditionInput.toLowerCase()) {
          console.log(arrayItems[i].product);
          nil = false;
        }
    }
}
else {
  nil = false;
  console.log("Invalid input. Please refresh page and try again.");
};
if (nil === true) {
  console.log("Sorry, no results found.")
};

