// Write your solutions below

//PART 1
var count = 0;

for (var i=0; i<products.items.length; i++) {
	if (products.items[i].kind == "shopping#product") {
		count++;
	};
};

console.log(count);





//PART 2
var titles = [];


for (var i=0; i<products.items.length; i++) {
	for (var a=0; a<products.items[i].product.inventories.length; a++) {
		if (products.items[i].product.inventories[a].availability == "backorder") {	
			titles.push(products.items[i].product['title']);
		}
	};
};

for (var b=0; b<titles.length; b++) {
	console.log(titles[b]);
};








//PART 3
var titles = [];

for (var i=0; i<products.items.length; i++) {
	if(products.items[i].product['images'].length >1) {
		titles.push(products.items[i].product['title']);
	}
};

for (var b=0; b<titles.length; b++) {
	console.log(titles[b]);
};







//PART 4
var titles = [];

for (var i=0; i<products.items.length; i++) {
	if(products.items[i].product['brand'] == "Canon") {
		titles.push(products.items[i].product['title']);
	}
};

for (var b=0; b<titles.length; b++) {
	console.log(titles[b]);
};






//PART 5
var titles = [];

for (var i=0; i<products.items.length; i++) {
	if(products.items[i].product['author']['name'] == "eBay" && products.items[i].product['brand'] == "Canon") {
		titles.push(products.items[i]);
	}
};

for (var b=0; b<titles.length; b++) {
	console.log(titles[b]);
};


//PART 6
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

	var div = document.createElement("div");
	var ne = document.createElement('h1');
	var br = document.createElement('p');
	var pr = document.createElement('p');
	var im = document.createElement('p');

	ne.appendChild(document.createTextNode('Item: ' + (b+1)));
	br.appendChild(document.createTextNode("brand: " + brand[b]));
	pr.appendChild(document.createTextNode("price: " + price[b]));
	im.appendChild(document.createTextNode('image: ' + img[b]));

	div.appendChild(ne);	
	div.appendChild(br);
	div.appendChild(pr);
	div.appendChild(im);

	var element = document.getElementById("div");
	element.appendChild(div);
};






console.log(products);
