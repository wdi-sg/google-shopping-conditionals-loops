

//part 2 Print the title of all items with a backorder availability in inventories.
for (var i = 0; i < products.items.length; i++) {

  if (products.items[i].product.inventories[0].availability === "backorder") {
     console.log(products.items[i].product.title);
   }
 }

 //part 3 Print the title of all items with more than one image link.

for (var i = 0; i < products.items.length; i++) {

  if (products.items[i].product.images.length > 1) {

    console.log(products.items[i].product.title);
  }

}

//part 4 Print all "Canon" products in the items (careful with case sensitivity).

for (var i = 0; i < products.items.length; i++) {

   if (products.items[i].product.brand === "Canon") {
     console.log(products.items[i].product.title)
   }
 }

 //part 5 Print all items that have an author name of "eBay" and are brand "Canon".

for (var i = 0; i < products.items.length; i++) {

  if ((products.items[i].product.author.name === "eBay") && (products.items[i].product.brand === "Canon"))

    console.log(products.items[i].product.title)
}


//part 6 Print all the products with their brand, price, and an image link

for (var i = 0; i < products.items.length; i++)  {

 console.log(products.items[i].product.brand, products.items[i].product.inventories[0].price, products.items[i].product.images[0].link);
}






