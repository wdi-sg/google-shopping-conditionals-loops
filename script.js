//console.log("Halo World!");
console.log(products);

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

/*start of part 4
for (var i = 0; i < products.items.length; i++){
  if (products.items[i].product.brand ==="Canon"){
    console.log(products.items[i].product.title)
    }
  }
  end of part 4 */

/*start of part 5
for (var i = 0; i < products.items.length; i ++){

  if((products.items[i].product.author.name === "eBay") && (products.items[i].product.brand === "Canon")){
    console.log(products.items[i]);
    //var item = products.items[i];
    //console.log( item );
  }

}
end of part 5 */
// for (var i = 0; i < products.items.length; i ++ ){

//   console.log(products.items[i]);
// }

//var brandId = "tag:google.com,2010:shopping/products/6347724/17225849483606303723";

for( var i=0; i<products.items.length; i++){
  //console.log( products.items[i].id);

  var item = products.items[i];

  console.log( "Brand:" +" " + (item.product.brand) + " " + "Price:"+ " "+(item.product.inventories[0].price) + " " + "Images" + " " +(item.product.images));
  // console.log( item );\

  // if( item.id === searchId ){

  //   //console.log( "YAYAYAYA");
  }



