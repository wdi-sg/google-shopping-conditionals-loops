


var kindShoppingProd = 0;
for (var keys in products) {
 //console.log(keys);
  if (keys === "items") {
    //console.log(products[keys]);
    for (i = 0; i < products[keys].length; i++) {
      var objInItems = products[keys][i];
      for (var k in objInItems) {
        if (k === "kind") {
          console.log(objInItems[k]);
          kindShoppingProd += 1
        }
      }
    }
  }
}
console.log(kindShoppingProd)
