
// Q1 Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

console.log(products) // View this in console developer to view data tree
var shoppingProduct = 0;

// products.items is an array of 25 indexes, which is why you need products.items[i]
for (i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    shoppingProduct ++;
  }
}
console.log(shoppingProduct);

//Q2 Print the title of all items with a backorder availability in inventories.
// inventories key is an array, must be back ordered

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder") {
    console.log(products.items[i].product.title);
  }
}

//Q3 Print the title of all items with more than one image link.

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.images.length > 1 ) {
    console.log(products.items[i].product.title);
  }
} // use .length as images is an array.


//Q4 Print all "Canon" products in the items (careful with case sensitivity).

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand === "Canon") {
    console.log(products.items[i].product.title);
  }
}
//console.log(products.items[3].product.brand)

//Q5 Print all items that have an author name of "eBay" and are brand "Canon".

for (i = 0; i < products.items.length; i++)  {
  var ebaySplit = (products.items[i].product.author.name).split(' ');
  if ((products.items[i].product.brand === "Canon") && (ebaySplit[i] === "eBay")) {
    console.log(products.items[i].product.title);
  }
};


var ebaySplit = (products.items[10].product.author.name).split(' '); //take note that there are items that have ebay and a suffix
console.log(ebaySplit[0])
//console.log(products.items[1].product.inventories[1].availability)




//console.log(products.items[1].kind)
//console.log(products.items[0].kind)
//console.log(products.items[0].product.images.length);

