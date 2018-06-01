//Part 1
var productItems=products.items;
var count=0;
productItems.forEach(function(item){
	if(item.kind == "shopping#product")
		count++;
});
console.log(count);

//Part 2
var itemList = products["items"];
var backOrderAvailable = "";
itemList.forEach(function(items) {
 if (items.product.inventories[0].availability == "backorder") {
   backOrderAvailable += items["product"].title;
 };
});
console.log(backOrderAvailable);


for (var i = 0; i < products.items.length; i++) {
    var checkImageLinks = products.items[i].product.images.length;
    if (checkImageLinks > 1) {
        console.log("Part 3: " + products.items[i].product.title);
    }
}

for (var i = 0; i < products.items.length; i++) {
    var checkBrand = products.items[i].product.brand;
    if (checkBrand === 'Canon') {
        console.log("Part 4: " + products.items[i].product.title);
    }
}

for (var i = 0; i < products.items.length; i++) {
    var checkBrand = products.items[i].product.brand;
    var checkAuthor = products.items[i].product.author.name;
    if (checkBrand === 'Canon' && checkAuthor === "eBay") {
        console.log("Part 5: " + products.items[i].product.title);
    }
}

for (var i = 0; i < products.items.length; i++) {
    var checkBrand = products.items[i].product.brand;
    var checkPrice = products.items[i].product.inventories[0].price;
    var getImageLink = products.items[i].product.images[0].link;
    console.log("Part 6:\nBrand: " + checkBrand + "\nPrice: " + checkPrice + "\nImage Link: " + getImageLink);
}