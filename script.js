//Part 1
var itemList = ["items"];
var count = 0;
for (var i = 0; i < itemList.length; i++) {
  if (itemList[i].kind === "shopping#product") {
  console.log(itemsList[i]);
  count +=1;
 }
};
//Part 2
for (var i = 0; i < itemList.length; i++) {
  if (itemList[i].title.inventories[0].availability === "backorder") {
  console.log(itemList[i].product.title);
 }
};
//Part 3
for (var i = 0; i < itemList.length; i++) {
  if (itemList[i].title.image.length > 1) {
  console.log(itemList[i].product.title);
 }
};

//Part 4
for (var i = 0; i < itemList.length; i++) {
  if (itemsList[i].brand.product === "Canon") {
  console.log(itemsList[i].product.title);
 }
};

//Part 5
for (var i = 0; i < itemList.length; i++) {
  if (itemList[i].brand.title === "eBay" && itemList[i].brand.title === "Canon") {
  console.log(itemList[i].brand.title);
 }
};

// Part 6
for (var i = 0; i < Things.length; i++) {
  console.log(itemList[i].brand + " " + itemList[i].link + " " + itemList[i].price);
 };
