//Q1

// create variable for ARRAY
var itemList = product.items
// create variable to count number of shopping#product
var itemListCount = 0

// LOOP through ARRAY to find shopping#product
for(i = 0; i < itemList.length; i++) {
	if(itemList[i].kind == "shopping#product") {    // access OBJECT properties within ARRAY by using .kind
		itemListCount ++;
	}
};
console.log(itemListCount);

//Q2
// create variable for product details:  title & inventories
var productDetails = itemList[i].product;
var productTitle = productDetails.title;
var inventories = productDetails.inventories;	// inventories is an ARRAY
// create ARRAY to store productTitle with back order 
var backorderItems = [];

// search titles for backorder availability and print those titles
if (inventories[0].availability == "backorder") {
	backorderItems.push(productTitle);
};
console.log(printArray(backorderItems));

//Q3
// create variable for product details: images
var images = productDetails.images;   // images is an ARRAY
// create ARRAY to store productTitle with more than one image link
var imageLinks = [];
// search title of items with more than one image links
if(images.length > 1) {
	imageLinks.push(productTitle);
};
console.log(printArray(imageLinks));

//Q4
// create ARRAY for 'Canon' products
canonProduct = [];
// search 'Canon' products
if(brand == "Canon") {
	canonProduct.push(productTitle);
};
console.log(printArray(canonProduct));

//Q5
// create variable for OBJECT- author
var authorName = productDetails.author.name;
// create variable for brand
var brand = productDetails.brand;
// create ARRAY for Ebay 'Canon' products
ebayCanonProduct = [];
// search 'Canon' products by Ebay
if(authorName.search("eBay") != -1 && brand == "Canon") {   // .search syntax to find strings containing 'eBay'
	ebayCanonProduct.push(productTitle);
}
console.log(printArray(ebayCanonProduct));

//Q6
// create variables for price and first image link
var price = inventories[0].price;
var imageLink1 = image[0].link;
// get products with brand, price and image link
var itemData = productTitle + price + imageLink1;
// create ARRAY to store itemData
var itemDataArray = [];

itemDataArray.push(itemData);

console.log(printArray(itemDataArray));