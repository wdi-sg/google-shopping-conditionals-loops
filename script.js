// Use the product search result in your file to find the following results.
// 1.) Go through the items and find all results that have kind of shopping#product.
//      Print the count of these results.

var itemList = products.items;
var counter = 0;

for (var i = 0; i < itemList.length; i++) {
  var item = itemList[i];
  if (item.kind === "shopping#product") {
  	counter++;
  }
}

console.log(counter);
// Where else is this count information stored in the search results?
console.log(products.currentItemCount);

// 2.) Print the title of all items with a backorder availability in inventories.

// booger's code
for (var i = 0; i < itemList.length; i++) {
  var item = itemList[i];
  var itemProduct = item.product;
  var productInventories = itemProduct.inventories;
  var availability = productInventories[0].availability;
  if (availability === "backorder") {
	 console.log(itemProduct.title);
  }
}

// 3.) Print the title of all items with more than one image link.

for (var i = 0; i < itemList.length; i++) {
  var item = itemList[i];
  var itemProduct = item.product;
  var imagesList = itemProduct.images;
  if (imagesList.length > 1) {
	 console.log(itemProduct.title);
  }
}

// 4.) Print all "Canon" products in the items (careful with case sensitivity).

for (var i = 0; i < itemList.length; i++) {
  var item = itemList[i];
  var itemProduct = item.product;
  var brand = itemProduct.brand;
  if (brand === "Canon") {
    console.log(itemProduct.title);
  }
}

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".

for (var i = 0; i < itemList.length; i++) {
  var item = itemList[i];
  var itemProduct = item.product;
  var brand = itemProduct.brand;
  var author = itemProduct.author.name;
  if (brand === "Canon" && author.indexOf("eBay") !== - 1) {
    console.log(itemProduct.title);
  }
}

// 6.) Print all the products with their brand, price, and an image link

for (var i = 0; i < itemList.length; i++) {
    var item = itemList[i];
    var brand = itemProduct.brand;
    var price = itemProduct.inventories[0].price;
    var image = itemProduct.images[0].link;
    var title = itemProduct.title;
    var currency = itemProduct.inventories[0].currency;
      console.log(title + ", " + brand + ", " + currency + " " + price + ", " + image);

}



