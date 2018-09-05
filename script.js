//console.log("Halo World!");
console.log(products);

// Go through the items and find all results that have kind of shopping#product.
// Print the count of these results. Where else is this count information
// stored in the search results?
/*start of part 1
  var myKind = "shopping#products";
  for( var i = 0; i<products.items.length; i++){
  console.log( products.items[i].kind);
  }
end of part 1*/

/*start Print the title of all items with a backorder availability in inventories
for (var i = 0; i<products.items.length;i++) {

if (products.items[i].product.inventories[0].availability === "backorder"){
    console.log(products.items[i].product.title);
  }
}*/

/*start for Print the title of all items with more than one image link.
for (var i = 0; i <products.items.length; i++){
  if (products.items[i].product.images.length > 1){
    console.log(products.items[i].product.title)
  }
}
end of part 3*/

//start of part 4
for (var i = 0; i < products.items.length; i++){
  if (products.items[i].product.brand ==="Canon"){
    console.log(products.items[i].product.title)
    }
  }
  // end of part 4
