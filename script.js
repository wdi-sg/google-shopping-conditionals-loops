//Go through items and find all results that have kind of shopping#product.
var count = 0;

//console.log(products.items);

//console.log("number of items: " + products.items.length);


for (var index = 0; index < products.items.length; index++) {
//console.log(index);
var item = products.items[index];
//console.log( item.kind ) ;

// Find all items that have kind of shopping#product. Print count.
  if (item.kind === "shopping#product") {
    count++;
    console.log( count );
  }
    console.log(count++);
}

console.log( "No of items that have kind of shopping#product: " +  count );

//Print the title of all items with 'backorder' availability in 'inventories'.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  if (item.product.inventories[0].availability === "backorder") {
     console.log("Items with backorder availability in inventories: " + item.product.title);
  }
}

//Print the title of al items with more than 1 image link.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  if (item.product.images.length > 1) {
    console.log("Items with more than 1 image link: " + item.product.title);
  }
}

//Print all Canon products in the items.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  if (item.product.brand === "Canon") {
    console.log("Items with Canon product brand: " + item);
  }
}

//Print all items with an author name of "eBay" and are brand "Cannon".
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  if (item.product.author.name === "eBay" && item.product.brand === "Canon") {
    console.log("Items with eBay author & Canon brand: " + item);
  }
}

//Print all products with their brand, price and an image link.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  console.log("Brand, price & image link: " + item.product.brand + " " + item.product.inventories[0].price + " " + item.product.images[0].link);
  }



