
// Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

var shoppingProduct = 0;

// products.items is an array of 25 indexes, which is why you need products.items[i]
for (i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    shoppingProduct ++;
  }
}
console.log(shoppingProduct);
console.log(products)
//Print the title of all items with a backorder availability in inventories.
// inventories key is an array, must be back ordered

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder") {
    console.log(products.items[i].product.title);
  }
}

console.log(products.items[1].product.inventories[0].availability)




console.log(products.items[1].kind)
console.log(products.items[0].kind)


