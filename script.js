//variable to hold numbers counted
var count = 0;

//find all results that have kind of shopping#product
for (var i in products.items) {
    if (products.items[i].kind === "shopping#product") {
      count += 1;
  }
}
console.log(count);

//print the title of all items backorder availability in inventories
for (var i in products.items) {
    if (products.items[i].product.inventories[0].availability === "backorder") {
      console.log(products.items[i].product.title);
  }
}

//print the title of all items with more than one image link
for (var i in products.items) {
  if (products.items[i].product.images.length > 1) {
    console.log(products.items[i].product.title);
  }
}

//Print all "Canon" products in the items
for (var i in products.items) {
  if (products.items[i].product.brand === "Canon") {
    console.log(products.items[i].product.title);
  }
}

//Print all items that have an author name of "eBay" and are brand "Canon"
for (var i in products.items) {
  if ((products.items[i].product.author.name.includes("eBay")) && (products.items[i].product.brand === "Canon")) {
    console.log(products.items[i].product.title);
  }
}

//Print all the products with their brand, price, and an image link
for (var i in products.items) {
  console.log(products.items[i].product.brand);
  console.log(products.items[i].product.inventories[0].price);
  console.log(products.items[i].product.images[0].link);
}


var user_brand = prompt("Type the brand name you want");
var user_newOrUsed = prompt("Do you prefer new or used?");

//find products by the input of the brand name and preferred condition
for (var i in products.items) {
  if ((products.items[i].product.brand === user_brand) && (products.items[i].product.condition === user_newOrUsed)) {
    console.log(products.items[i].product.title);
  } /*else {
    alert("Sorry, nothing found!");
    break;
  }*/
}

