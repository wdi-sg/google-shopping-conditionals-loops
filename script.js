var shoppingProduct = 0;

// products.items is an array of 25 indexes, which is why you need products.items[i]
for (i = 0; i < products.items.length; i++) {
 if (products.items[i].kind === "shopping#product") {
   shoppingProduct ++;
 }
}
console.log(shoppingProduct);
