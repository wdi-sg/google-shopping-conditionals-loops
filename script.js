var count = 0;
for (var i = 0; i < products["items"].length; i++) {
  console.log(products["items"][i].kind);
  if (products["items"][i].kind === "shopping#product") {
    count++;
  }
}
console.log(count + " items with shopping#product tag in 'kind'");
console.log("products with 'backorder' in 'availability' listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if( products["items"][i].product.inventories[0].availability === "backorder") {
    console.log(products["items"][i].product.title);
  }
}
console.log("products with more than 1 image link listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if(products["items"][i].product.images.length > 1){
    console.log(products["items"][i].product.title);
  }
}
console.log("products with brand Canon listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if(products["items"][i].product.brand === "Canon" ){
    console.log(products["items"][i].product.title);
  }
}
console.log("products with author eBay listed below.");
for (var i = 0; i < products["items"].length; i++) {
  if(products["items"][i].product.author.name.slice(0, 4) === "eBay" ){
    console.log(products["items"][i].product.title);
  }
}
