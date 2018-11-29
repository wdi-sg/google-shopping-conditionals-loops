var kindShopping = 0;
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    kindShopping++;
  }
}
console.log(kindShopping);


for (var i = 0; i < products.items.length; i++) {
  if(products.items[i].product.inventories[0].availability === "backorder") {
    console.log( i + '. ' + products.items[i].product.title);
  }
};

//- Print the `title` of all items with more than one image link.
console.log('More than one image link'); //title
for (var i = 0; i < products.items.length; i++) {
  if(products.items[i].product['images'].length > 1) {
    console.log( i + '. ' + products.items[i].product.title)
  }
};

//- Print all "Canon" products in the items (careful with case sensitivity).
console.log('Canon Products'); //title
for (var i = 0; i < products.items.length; i++) {
  if(products.items[i].product.brand === "Canon") {
    console.log ( i + '. ' + products.items[i].product.title);
  }
};

// Print all `items` that have an author name of "eBay" and are brand "Canon".
console.log('Ebay Canon'); //title
for (var i = 0; i < products.items.length; i++) {
  if((products.items[i].product.author.name === "eBay" ) && (products.items[i].product.brand === "Canon")) {
    console.log ( i + '. ' + products.items[i].product.title);
  }
};

// - Print all the products with their **brand**, **price**, and an **image link**
console.log('brand, price, and an image link'); //title
for (var i = 0; i < products.items.length; i++) {
  var brand = products.items[i].product.brand;
  var price = products.items[i].product.inventories[0].price;
    var imageLink = products.items[i].product.images[0].link;
    console.log(`${brand}, ${price}, ${imageLink}`);
}

// Prompt the user for the product brand and print only those products.
// Prompt the user if they want to see only new or used items.
 var userProductBrand = prompt("What product brand are you looking for?");
var newUsed = prompt("Do you want new or used items?");
console.log('Prompt the user for the product brand and print only those products');
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand === userProductBrand) {
    console.log( i + '. ' + products.items[i].product.title);
  }
}

// Prompt the user what kind of search they want to do- search by brand or search by condition.
// Then prompt the user to put in ther actual search value- (new/used for condition *or* brand name for brand)
var userSearch = prompt("Preferred Search Method: Brand or Condition?");
// var searchCondition = prompt("New or Used?");
// var searchBrand = prompt("What product brand are you looking for?");
while ((userSearch !== 'Brand') || (userSearch !== 'Condition')) {
    if (userSearch === 'Brand') {
      var searchBrand = prompt("What product brand are you looking for?");
      break;
    } else if (userSearch === 'Condition') {
      var userSearch = prompt("New or used?");
      break;
    } else {
      alert('try again!');
      var userSearch = prompt("Preferred Search Method: Brand or Condition?")
  }
}
