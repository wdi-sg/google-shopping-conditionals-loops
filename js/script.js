//Deliverables point 1
var counter = 0;
for (var i = 0; i < products.items.length; i ++) {
    if (products.items[i].kind === "shopping#product") {
      counter++;
  }
}
console.log("Number of items which have a 'kind' of 'shopping#product': " + counter);

//Deliverables point 2
for (var i = 0; i < products.items.length; i ++) {
  if (products.items[i].product.inventories[0].availability === "backorder") {
    console.log("Item on backorder: " + products.items[i].product.title);
  }
}

//Deliverables point 3
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.images.length > 1) {
    console.log("Item with more than one image link: " + products.items[i].product.title);
  }
}

//Deliverables point 4
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand === "Canon") {
    console.log("Canon product: " + products.items[i].product.title);
  }
}

//Deliverables point 5
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand === "Canon" && products.items[i].product.author.name === "eBay") {
    console.log("Canon product on eBay: " + products.items[i].product.title);
  }
}

//Deliverables point 6
for (var i = 0; i < products.items.length; i++) {
  var brand = products.items[i].product.brand;
  var price = products.items[i].product.inventories[0].price;
  var imageLink = products.items[i].product.images[0].link;

  console.log("Brand: " + brand + '\n' + "Price: $" + price + '\n' + "Image link: " + imageLink);
}


//Further 1
let userInput = prompt("Specify a brand: ");
userBrand = userInput.toLowerCase();

for (var i = 0; i < products.items.length; i++) {
  /*
  if (products.items[i].product.brand.includes("userBrand")) {
    console.log(products.items[i].product.title);
  }
    */ // WHY DON'T EITHER OF THESE METHODS WORK?

  if (products.items[i].product.brand === "userBrand") {
    console.log(products.items[i].product.title);
  }
}
