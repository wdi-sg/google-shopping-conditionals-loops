//console.log("Halo World!");
console.log(products);

// Go through the items and find all results that have kind of shopping#product.
// Print the count of these results. Where else is this count information
// stored in the search results?
// var myKind = "shopping#products";

// for( var i = 0; i<products.items.length; i++){
//   console.log( products.items[i].kind);
// }
//   var item = products.items[i]
//   console.log( item.kind);
//   console.log( item );

// if( item.id === myKind ){
//     //console.log( "YAYAYAYA");
//   }
// }

//start Print the title of all items with a backorder availability in inventories
for (var i = 0; i<products.items.length;i++) {

if (products.items[i].product.inventories[0].availability === "backorder"){
    console.log(products.items[i].product.title);
  }
}

// for (var i = 0; i <= products.length; i++){
// console.log(products.items[i].kind.product);
// }

/*start for Print the title of all items with more than one image link.
for (var i = 0; i <products.items.length; i++){
  if (products.items[i].product.images.length > 1){
    console.log(products.items[i].product.title)
  }
}*/
