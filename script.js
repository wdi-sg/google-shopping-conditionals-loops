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

var count = 0;

for ( var i = 0; i < products.items.length; i++ ) {

  var item = products.items[i];

  if ( item.kind === "shopping#product") {
      count++;
  }
}

console.log(`Total count of shopping#product is ${count}.`)
