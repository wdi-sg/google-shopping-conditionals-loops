//option 1
/*
var productsItems = products.items;
var count = 0;
productItems.forEach(function(item){
  if (item.kind == "shopping#product")
    count++;
});

console.log(count);


//Q1 option 2
var productsItems = products.items;
function kindShoppingProduct(x) {
  var kSP = 0;
  for (var i = 0; i < x.length; i++){
    if (x[i].kind == "shopping#product"){
      kSP++;
    }
  }
    return kSP;
}
console.log(kindShoppingProduct(productsItems));

//Also found in "itemPerPage" and "currentItemCount"

//Q2
var productsItems = products.items;
function availabilitybackorder(x) {
  for (var i = 0; i < x.length; i++){
    if (x[i].product.inventories[0].availability == "backorder"){
      console.log(x[i].product.title);
    }
  }
}
console.log(availabilitybackorder(productsItems));
*/
//Q3
var productsItems = products.items;
function moreThanOneImage(x) {
  for (var i = 0; i < x.length; i++){
    if (x[i].product.images.length > 1){
      console.log(x[i].product.title);
    }
  }
}
console.log(moreThanOneImage(productsItems));
