//1.) Go through the `items` and find all results 
//that have `kind` of `shopping#product`. = 25
//Print the count of these results. = 25

var count = 0;

for (var i = 0 ; i < products.items.length; i ++) {
	if (products.items[i].kind == 'shopping#product') {
		count++;
	}
}
 console.log(count)

//Where else is this count information stored in the search results?
//"itemsPerPage": 25,
//"currentItemCount": 25,


//2.) Print the `title` of all items with a
// `backorder` availability in `inventories`.


for (var i = 0 ; i < products.items.length; i ++) {
	if (products.items[i].product.inventories[0].availability == "backorder") {
		console.log(products.items[i].product.title)
	}
}


//3.) Print the `title` of all items with more than one image link


for (var i = 0 ; i < products.items.length; i ++) {
	if (products.items[i].product.images.length > 1) {
		console.log(products.items[i].product.title)
	}
}

//4.) Print all "Canon" products in the items 
//(careful with case sensitivity).

for (var i = 0 ; i < products.items.length; i ++) {
	if (products.items[i].product.brand == "Canon") {
		console.log(products.items[i].product.title)
	}
}

//5.) Print all `items` 
//that have an author name of "eBay" 
//and are brand "Canon".

for (var i = 0 ; i < products.items.length; i ++) {
	if (products.items[i].product.brand == "Canon" 
		&& products.items[i].product.author.name.includes('eBay')) {
		console.log(products.items[i])
	}
}

//6.) Print all the products with their
// **brand**, **price**, and an **image link**