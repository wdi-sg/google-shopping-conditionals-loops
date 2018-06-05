//part1
var counter = products.items.length;
console.log(counter);

console.log(products.itemsPerPage);
console.log(products.currentItemCount);

//part2
for (var i = 0; i < 25; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder")
    console.log("This item " + products.items[i].product.title + " currenty unavailable.");

//part3
for (var k = 0; k < 25; k++) {
  if (products.items[k].product.images.length > 2)
    console.log("This item " + products.items[k].product.title + " has more than 1 image.");