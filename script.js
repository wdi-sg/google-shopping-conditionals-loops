/*EX 1

var itemList = products["items"]
var itemCount = 0
itemList.forEach(function(items){
	if (items["kind"]==="shopping#product"){
		itemCount+=1;
	}
});
console.log(itemCount); */

/*EX2

var itemList = products.items

itemList.forEach(function(items){
	if (items.product.inventories[0].availability==="backorder"){
		console.log(items["product"].title);
	}
}); */

/*EX3

products.items.forEach(function(item){
	if(item.product.images.length>1){
		console.log(item.product.title);
	}
})*/

/*EX4

products.items.forEach(function(item){
	if(item.product.brand.toLowerCase()=="canon"){
		console.log(item.product.title);
	}
})*/

/*EX5

products.items.forEach(function(item){
	if(item.product.brand.toLowerCase()=="canon"&&item.product.author[0]=="eBay"){
		console.log(item.product.title);
	}
});*/

//EX6

for (i=0;i<products.items.length;i++){
	var brand=products.items[i].product.brand;
	var price=products.items[i].product.inventories[0].price;
	var image=products.items[i].product.images[0].link;
	console.log(i+1+") brand: "+brand+ " ; price: "+price+ " ; image: "+image);
}
