var productsItems = products.items;
var count = 0;
productItems.forEach(function(item){
  if (item.kind == "shopping#product")
    count++;
});

console.log(count);
//Also found in "itemPerPage" and "currentItemCount"








/*
function kindShoppingProduct(x,product) {
  var kSP = 0;
  for (var i = 0; i < x.length; i++){
    if (x.kind === product){
      kSP++;
    }
  }
    return kSP;
}
console.log(kindShoppingProduct(productsItems, "shopping#product"));
/*
