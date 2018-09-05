//part1

var itemList = products.items
var shopCount = 0;

for (var i = 0; i < itemList.length; i++) {
  if (itemList[i].kind == "shopping#product") {
    shopCount++;
  }
};
console.log(shopCount);



//part2

for (var i = 0; i < itemList.length; i++) {
  var itemInventories = itemList[i].product.inventories[0].availability;
  if (itemInventories === "backorder") {
    console.log(itemList[i].product.title);
  }
}

//part3

for (var i = 0; i < itemList.length; i++) {
  var itemImage = itemList[i].product.images;
  if (itemImage.length > 1) {
    console.log(itemList[i].product.title);
  }
}


//part4

for (var i = 0; i < itemList.length; i++) {
  var itemBrand = itemList[i].product.brand;
  if (itemBrand == "Canon") {
    console.log(itemList[i].product.title);
  }
}

//part5

for (var i = 0; i < itemList.length; i++) {
  var itemAuthor = itemList[i].product.author.name;
  var itemBrand = itemList[i].product.brand;
  if (itemAuthor === "eBay" && itemBrand === "Canon") {
    console.log(itemList[i]);
  }
}
