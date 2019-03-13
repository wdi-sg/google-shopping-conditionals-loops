products.items.kind
console.log(products.items);
//Part 1:
var tally = 0;
for (i in products.items){
  if (products.items[i].kind == "shopping#product"){
    tally++;
  }else{
    //do nothing;
  }
}
console.log(tally);
console.log("end of part 1");
//currentItemCount = 25, tally value should be 25.

//Part 2:
//the backorder value is found in the 'availability' key pair.; which are contained in the inventories array.
//the inventories array has only one element, we can conveniently call it with just the index number zero.

for (i in products.items){
  //for (j in products.items[i].inventories){
  if((products.items[i].product.inventories[0].availability) === "backorder"){
    console.log(products.items[i].product.title);
//}else{
    //}
  }
}
console.log("end of part 2");
//console.log(products.items[0].product.inventories[0].availability);
//console.log(products)
//Part 3: Print the title of all items with more than one image link.
for (i in products.items){
if(products.items[i].product.images.length>1){
   console.log(products.items[i].product.title);
 }
}
console.log("End of part 3");
//Part 4: Brands === "Canon";
for (i in products.items){
if(products.items[i].product.brand === "Canon"){
   console.log(products.items[i].product.title);
 }
}
console.log("End of part 4");
//Part 5: Brands === "Canon" && author name == "eBay";
for (i in products.items){
if((products.items[i].product.brand === "Canon") && (products.items[i].product.author.name.includes("eBay"))){
   console.log(products.items[i].product.title);
 }
}
console.log("End of part 5");
//Part 6: Print all the products with their brand, price, and an image link
for (i in products.items){
  console.log(products.items[i].product.brand);
  console.log(products.items[i].product.inventories[0].price);
  console.log(products.items[i].product.images[0].link);
}
console.log("End of part 6");
/*
console.log("fffff")
console.log(products["items"][0]);
console.log("444444")
console.log(products["items"][0].kind);
console.log(products["items"][0]["kind"]);
*/
/*
for (var i = 0; i < grid.length; i++) {
  console.log(grid[i]);
  for (var j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j]);
    for (var k = 0; k < grid[i][j].length; k++) {
        console.log(grid[i][j][k]);
    }
  }
}
*/
