console.log(products)
// Part 1
var count = 0
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    console.log(products.items[i].kind);
    count++;
  }
};
console.log(count)
