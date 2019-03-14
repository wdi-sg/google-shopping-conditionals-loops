var itemsInProduct = products.items;
var kindShoppingProduct = 0;

// Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results.

for (i=0; i < itemsInProduct.length; i++) {
	var objInItems = products["items"][i];
}

if (objInItems["kind"] === "shopping#product") {
	console.log("Count of items that have kind of shopping#product: " + objInItems);
}

//Print the `title` of all items with a `backorder` availability in `inventories`.

var title = objInItems["product"]["title"];
var inventories = objInItems["product"]["inventories"];

for (j=0; j < inventories.length; j++) {
	var availability = inventories[j]["availability"];
}

if (availability === "backorder") {
	console.log(title + "has backorder availability in the inventories");
}

// Print the `title` of all items with more than one image link.

var images = objInItems["product"]["images"];

for (k=0; k < images.length; k++) {
	var imageLink = images[k]["link"]
}

if (imageLink.length < 1){
	console.log(title + "has more than one image link");
}

// Print all "Canon" products in the items (careful with case sensitivity).

var brand = objInItems["product"]["brand"];

if (brand ==== "Canon") {
	console.log(title + "is a product of Canon");
}

// Print all `items` that have an author name of "eBay" and are brand "Canon".

var author = objInItems["products"]["author"];

if (brand === "Canon" && author === "eBay") {
	console.log(objInItems);
}

console.log(kindShoppingProduct + "is a product of Canon and from eBay");

// Print all the products with their **brand**, **price**, and an **image link**

var price = inventories[j]["price"];

console.log("Brand: " + brand + "Price: " + price + "Image Link(s): " + imageLink);
