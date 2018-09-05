

//Deliverables

Use the product search result in your file to find the following results.

//Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

var numberShopping = 0

  for (i = 0; i < products["items"].length; i++){
    var item = products.items[i]

    if (item.kind === "shopping#products")
      console.log(item.id);
      numberShopping += 1

  }
console.log(numberShopping);


//Print the `title` of all items with a `backorder` availability in `inventories`.

for (i = 0; i < products["items"].length; i++){
  var item = products.items[i]
  var prod = item.product
  var invent = prod.inventories[0]
  var avail = invent.availability
  if (avail === "backorder")
    console.log(prod.title);
}

//Print the `title` of all items with more than one image link.


for (i = 0; i < products["items"].length; i++){
  var item = products.items[i]
  var prod = item.product
  var imag = prod.images

  if (imag.length > 1){
    console.log(prod.title);
  }
}

//Print all "Canon" products in the items (careful with case sensitivity).


for (i = 0; i < products["items"].length; i++){
  var item = products.items[i]
  var prod = item.product
  var bran = prod.brand

  if (bran === "Canon"){
    console.log(prod.title);
  }
}

//Print all `items` that have an author name of "eBay" and are brand "Canon".


for (i = 0; i < products["items"].length; i++){
  var item = products.items[i]
  var prod = item.product
  var auth = prod.author
  var authName = auth.name
  var bran = prod.brand

  if (bran === "Canon" && authName === "eBay"){
    console.log(prod.title);
  }
}



//Print all the products with their **brand**, **price**, and an **image link**


for (i = 0; i < products["items"].length; i++){
  var item = products.items[i]
  var prod = item.product
  var invent = prod.inventories[0]
  var imag = prod.images


  var pric = invent.price
  var bran = prod.brand

  console.log ("Brand: " + bran + "\nPrice: " + pric + "\nImage Links: ");

  if (imag.length === 1)
    console.log(imag[0].link)

  else if (imag.length >= 1){
    for (j = 0; j < imag.length; j++){

      console.log(imag[j].link)


    }

}
}




