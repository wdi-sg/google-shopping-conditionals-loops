var count = 0;
for (var i = 0; i < products["items"].length; i++) {
  console.log(products["items"][i].kind);
  if (products["items"][i].kind === "shopping#product") {
    count++;
  }
}
console.log(count + " items with shopping#product tag in 'kind'");
console.log("products with 'backorder' in 'availability' below");
for (var i = 0; i < products["items"].length; i++) {
  if( products["items"][i].product.inventories[0].availability === "backorder") {
    console.log(products["items"][i].product.title);
  }
}console.log("products with more than 1 image link below");
for (var i = 0; i < products["items"].length; i++) {
  if(products["items"][i].product.images.length > 1){
    console.log(products["items"][i].product.title);
  }
}
