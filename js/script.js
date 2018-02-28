//Global variables
var itemsList = products.items;
var itemListCount = 0;
var backItemsArray = [];
var moreImageLinks = [];
var canonItems = [];
var ebayCanonItems = [];
var allItemsSpecific = [];

//note itemList is an array
for(var i =0;i<itemsList.length;i++){

	//searching for shopping products
	if(itemsList[i].kind == "shopping#product"){
		itemListCount++
	}

	//Looking at the product details
	var productDetails = itemsList[i].product;
	var productTitle = productDetails.title;
	var inventories = productDetails.inventories;
	var images = productDetails.images;
	var brand = productDetails.brand;
	var authorName = productDetails.author.name;
	var imageLink1 = images[0].link;
	var price = inventories[0].price;

	//searching for title of items with backorder availability
	//note inventories is an array;
	if(inventories[0].availability == "backorder"){
		backItemsArray.push(productTitle);
	}

	//note images is an array that is in the productDetails
	if(images.length>1){
		moreImageLinks.push(productTitle);
	}

	//get "Canon" products
	if(brand == "Canon"){
		canonItems.push(productTitle);
	}

	//get "Canon" products by Ebay
	if(authorName.search("eBay") != -1 && brand == "Canon"){
		ebayCanonItems.push(productTitle);
	}

	//get all products with brand, price and an image link	
	var storeItem = "Product: " + productTitle + "\n price: " + price + "\n link: " + imageLink1;
	allItemsSpecific.push(storeItem);
}

/** Helper functions */
function printArray(array){
	var counter=1;
	for(var i=0;i<array.length;i++){
		console.log(counter + ". " + array[i]);
		counter++;
	}
}

//output results
console.log("Shopping products appear " + itemListCount + " times");
console.log("List of items with backorder availability:");
console.log(printArray(backItemsArray));
console.log("List of items with more than one image link:");
console.log(printArray(moreImageLinks));
console.log("List of Canon products");
console.log(printArray(canonItems));
console.log("List of Canon products by Ebay");
console.log(printArray(ebayCanonItems));
console.log("List of all items with their brand, image and price");
console.log(printArray(allItemsSpecific));


