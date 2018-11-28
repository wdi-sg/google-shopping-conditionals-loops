
var userInputBrand = prompt("Enter the brand");
var listOfProduct = [];
var listOfNew = [];
var listOfUsed = [];

var printListOfNew = function() {
  for (i = 0; i < products.items.length; i++) {
      if (products.items[i].product.brand === userInputBrand
        && products.items[i].product.condition === "new") {
          listOfNew.push(products.items[i].product.title);
    }
  }

  if(listOfNew.length > 0) {
    console.log("The list of new products with brand " + userInputBrand + " is: ");
    for (i = 0; i < listOfNew.length; i++) {
      console.log(listOfNew[i]);
    }
  }

  else {
    console.log("Sorry no result for new products with brand " + userInputBrand);
  }
}

var printListOfUsed = function() {
  for (i = 0; i < products.items.length; i++) {
      if (products.items[i].product.brand === userInputBrand
        && products.items[i].product.condition === "used") {
          listOfUsed.push(products.items[i].product.title);
    }
  }

  if (listOfUsed > 0) {
    console.log("The list of used products with brand " + userInputBrand + " is: ");
    for (i = 0; i < listOfUsed.length; i++) {
    console.log(listOfUsed[i]);
    }
  }

  else  {
    console.log("Sorry no result for used products with brand " + userInputBrand);
  }
}

var checkForUseOrNew = function() {
  var usedOrNew = prompt("Enter: Used or New");
  if (usedOrNew === "New") {
    printListOfNew();
  }

  else if (usedOrNew === "Used") {
    printListOfUsed();
  }

  else {
    console.log("invalid input");
  }
};

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand == userInputBrand) {
    listOfProduct.push(products.items[i].product.title);
  }
}

if (listOfProduct.length > 0) {
  console.log("The list of products with brand " + userInputBrand + " is: ");

  for (i = 0; i < listOfProduct.length; i++) {
      console.log(listOfProduct[i]);
    }

  console.log("");

  checkForUseOrNew();
}

else {
  console.log("Sorry no result for product with brand " + userInputBrand);
}




/* for (i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    count1 = count1 + 1;
  }

  if (products.items[i].product.inventories[0].availability === "inStock") {
    listAvailable.push(products.items[i].product.title);
  }

  if (products.items[i].product.images.length > 0) {
    listMoreThanOneImg.push(products.items[i].product.title);
  }

  if (products.items[i].product.brand === "Canon") {
    listOfCanon.push(products.items[i].product.title);
    if (products.items[i].product.author.name === "eBay") {
      listOfCanonAndEbay.push(products.items[i].product.title);
    }
  }

  var brand = "Brand: " + products.items[i].product.brand;
  var price = "Price: $" + products.items[i].product.inventories[0].price;
  var img = "Img: " + products.items[i].product.images[0].link;
  listOfBrandPriceImg.push([brand, price, img]);
}

 console.log("The number of items with kind of shopping#product is: " + count1);

 console.log("");

 console.log("The of title of products available: ");
 for (i = 0; i < listAvailable.length; i++ ) {
  console.log(listAvailable[i]);
 }

console.log("");

 console.log("The title of products with more than 1 image: ");
 for (i = 0; i < listMoreThanOneImg.length; i++ ) {
  console.log(listMoreThanOneImg[i]);
 }

console.log("");

 console.log("The list of Canon products: ");
 for (i = 0; i < listOfCanon.length; i++ ) {
  console.log(listOfCanon[i]);
}

console.log("");

 console.log("The list of Canon and eBay products: ");
 for (i = 0; i < listOfCanonAndEbay.length; i++ ) {
  console.log(listOfCanonAndEbay[i]);
}

console.log("");

 console.log("The list of products: ");
 for (i = 0; i < listOfBrandPriceImg.length; i++ ) {
  for (j = 0; j < listOfBrandPriceImg[i].length; j++ ) {
    console.log(listOfBrandPriceImg[i][j]);
  }
  console.log("");
}
*/

