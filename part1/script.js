var count1 = 0;
var listAvailable = [];
var listMoreThanOneImg =[];
var listOfCanon = [];
var listOfCanonAndEbay = [];
var listOfProduct = [];
var listOfBrandPriceImg = [];

for (i = 0; i < products.items.length; i++) {
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

