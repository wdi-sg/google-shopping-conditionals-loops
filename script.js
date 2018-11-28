// get the item lists from products

items = products.items;

// Count the number of items that has kind = "shopping#product"

count = 0;

for (var i = 0;i<items.length;i++) {
  item = items[i];
  if (item.kind = "shopping#product") {
    count++;
  }
}

// console.log("Number of Shopping product is : "+count);

// Print the title of all items with a backorder availability in inventories

for (var i = 0;i<items.length;i++) {
  item = items[i];
  if (item.product.inventories[0].availability = "backorder") {
    console.log(item.product.title);
  }
}

// Print the title of all items with more than one image link
for (var i = 0;i<items.length;i++) {
  item = items[i];
  if (item.product.images.length > 1) {
    console.log(item.product.title);
  }
}

// Print all "Canon" products in the items (careful with case sensitivity).
for (var i = 0;i<items.length;i++) {
  item = items[i];
  if (item.product.brand.toLowerCase() === 'canon') {
    console.log(item.product.title);
  }
}

// Print all items that have an author name of "eBay" and are brand "Canon".
for (var i = 0;i<items.length;i++) {
  item = items[i];
  if (item.product.brand.toLowerCase() === 'canon' && item.product.author.name.toLowerCase() === "ebay") {
    console.log(item);
  }
}


// Print all the products with their brand, price, and an image link
for (var i = 0;i<items.length;i++) {
  item = items[i];
  console.log("Brand : ", item.product.brand)
  console.log("Price : ", item.product.inventories[0].price)
  imageLink = item.product.images
  console.log(imageLink.length)
  for (k=0; k< imageLink.length; k++) {
    console.log("Image : ", imageLink[k].link)
  }

}
