
// Write your solutions below
var x = 0;

for(var i=0; i<products["items"].length; i++){
	if(products["items"][i]["kind"]==="shopping#product"){
		x = x+1;}

console.log(x);
	
for (var i =0; i<products.items.length; i++){
	if(products.items[i].product.inventories[0].availability==="backorder"){
		console.log(products.items[i].product.title);


// 		// why can't we use orderavailability.push(products.items[i].title); ?
	}
}

for (var i =0; i<products.items.length; i++){
	if(products.items[i].product.images[1]) {
		console.log(products.items[i].product.title);
	}
}

for (var i =0; i<products.items.length; i++){
	if(products.items[i].product.brand==="Canon"){
		console.log(products.items[i].product.title);}}

for (var i =0; i<products.items.length; i++){
	if(products.items[i].product.brand==="Canon" && products.items[i].product.author.name==="eBay"){
		console.log(products.items[i].product.title);}}

		//Don't think this is correct as there are more than 1 canon item with author name eBay.

for (var i =0; i<products.items.length; i++) {
console.log(products.items[i].product.title + " , " + 
		products.items[i].product.inventories[0].price + " , " + 
	products.items[i].product.images[0].link);}
}

//how can we use a while loop here?
 
