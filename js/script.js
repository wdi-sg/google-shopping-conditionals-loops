var brand = [];
var price = [];
var img = [];

console.log(products.items[1])
for (var i=0; i<products.items.length; i++) {
	brand.push(products.items[i].product['brand']);
	price.push(products.items[i].product['inventories'][0]['price']);
	img.push(products.items[i].product['images'][0]['link']);
};

for (var b=0; b<brand.length; b++) {
	console.log("brand: " + brand[b] + "(" + (b+1) + ")");
	console.log("price: " + price[b] + "(" + (b+1) + ")");
	console.log('image: ' + img[b] + "(" + (b+1) + ")");
};


// for (var i = 0; i < 3; i++) {
		
// 		document.getElementById('r-'+i).innerHTML = temps[i];

// 	}