//var count = products.items.length;
//console.log (count);

/*
1) find  "kind": "shopping#product"
2) count  "kind": "shopping#product"


var car = {
  wheels: 4,
  doors: 2,
  seats: 5}

 car[key] = 4
 key = wheels

key:value


so, kind is key, shopping is value.
*/


var shop = products.items;
var count = 0;
var title1 = [];
var title2 = [];
var canon = [];
var itemsCanon = [];

for (i=0; i<shop.length; i++) {
	if (shop[i].kind == "shopping#product") {
		count++;
	}
}

console.log(count);


//products.items[0].product.inventories[0].availability 
// 2 and 15
//products.items[0].product.title

for (i=0; i<shop.length; i++) {
	if (products.items[i].product.inventories[0].availability == "backorder") {
		title1.unshift(products.items[i].product.title);
	}
}

console.log(title1);

//products.items[0].product.images.length
//products.items[0].product.images[0].link


for (i=0; i<shop.length; i++) {
	if (products.items[i].product.images.length != 1) {
		title2.unshift(products.items[i].product.title);
	}
}

console.log(title2);

//products.items[0].product.brand

for (i=0; i<shop.length; i++) {
	if (products.items[i].product.brand == "Canon") {
		canon.unshift(products.items[i].product.title);
	}
}

console.log(canon);


//products.items[9].product.author.name

for (i=0; i<shop.length; i++) {
	if (products.items[i].product.brand == "Canon") {
		if (products.items[i].product.author.name == "eBay") {
			itemsCanon.unshift(products.items[i].product.title);
		}
	}
}

console.log(itemsCanon);

//products.items[0].product.brand
//products.items[0].product.inventories[0].price
//products.items[0].product.link


for (i=0; i<shop.length; i++) {
	console.log("Brand: " + products.items[i].product.brand);
	console.log("Price: " + products.items[i].product.inventories[0].price);
	console.log("Image Link: " + products.items[i].product.link);
}












