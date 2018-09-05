console.log(products);

// var searchId = "tag:google.com,2010:shopping/products/6347724/17225849483606303723";
//
// for( var i = 0; i<products.items.length; i++ ) {
//
//  //console.log( products.items[i].id);
//
//  var item = products.items[i];
//  //console.log( item.id );
//
//  console.log( item );
//
//  if( item.id === searchId ){
//   console.log( "YAYAYAYA");
//  }
// }


// Part 1 // var count = 0;
// Part 1 //
// Part 1 // for ( var i = 0; i < products.items.length; i++ ) {
// Part 1 //
// Part 1 //   var item = products.items[i];
// Part 1 //
// Part 1 //   if ( item.kind === "shopping#product") {
// Part 1 //       count++;
// Part 1 //   }
// Part 1 // }
// Part 1 //
// Part 1 // console.log(`Total count of shopping#product is ${count}.`)


// Part 2 // Print the title of all items with a backorder availability in inventories.

var count = 0

for ( var i = 0; i < products.items.length; i++ ) {

  var item = products.items[i];

  if ( item.product.inventories[0].availability === "backorder") {

      console.log(`${item.product.title} is backordered.`)
  }
}

// Part 3 // Print the title of all items with more than one image link.

// Part 4 // Print all "Canon" products in the items (careful with case sensitivity).

// Part 5 // Print all items that have an author name of "eBay" and are brand "Canon".

// Part 6 // Print all the products with their brand, price, and an image link



















