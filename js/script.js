var productsList = products.items;
var count = 0;
var backOrdersOutput= "";
var backOrderCounter = 0;
var imgOutput = "";
var imgCounter= 0;
var brandOutput = "";
var brandCounter= 0;
var authorOutput = "";
var authorCounter= 0;
var fullListOutput = "";
var fullListCounter= 0;



for(i = 0; i <= productsList.length -1; i++){

//find count of shopping#product
if( productsList[i].kind == "shopping#product"){
	count++;
}

// display items with backorders
if (productsList[i].product.inventories){
	var inventory = productsList[i].product.inventories[0];
	if (inventory.availability == "backorder"){
		backOrderCounter++;
		backOrdersOutput += backOrderCounter + ". "+ productsList[i].product.title + "\n\n";

	}
}

// display items with more than 1 link
if (productsList[i].product.images)
{
	imgCounter = 0;
	var img = productsList[i].product.images;
	for(j = 0; j < img.length ; j++){
		imgCounter++;
	}

	if(imgCounter > 1){
		imgOutput += productsList[i].product.title + "\n\n";
	}



}

// find all Canon brand
if (productsList[i].product.brand){
	if (productsList[i].product.brand == "Canon"){
		brandCounter++;
		brandOutput += brandCounter+ ". "+ productsList[i].product.title + "\n\n";

	}
}

// find all Canon brand and from eBay
if (productsList[i].product.brand && productsList[i].product.author.name){
	if (productsList[i].product.brand == "Canon" && productsList[i].product.author.name == "eBay"){
		authorCounter++;
		authorOutput += authorCounter+ ". "+ productsList[i].product.title + "\n\n";

	}
}


// find full list with brand, price and image
fullListCounter++;
fullListOutput += fullListCounter+ ". "+ productsList[i].product.title + "\n Brand: " + productsList[i].product.brand + "\n Price: " + productsList[i].product.inventories[0].price + "\n Image: " + productsList[i].product.images[0].link + "\n\n";





}


console.log ("The titles of those with Canon brand from Ebay are : \n" + authorOutput);
console.log("The number of items with shopping#product is : " + count);
console.log ("The titles of the backorders are : \n" + backOrdersOutput);
console.log ("The titles of those with more than 2 images are : \n" + imgOutput);
console.log ("The titles of those with Canon brand are : \n" + brandOutput);
console.log ("The titles of those with Canon brand from Ebay are : \n" + authorOutput);
console.log ("The titles, brands, price and images of the products are : \n" + fullListOutput);


