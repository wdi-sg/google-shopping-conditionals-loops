
//PART 1
console.log("Total number of shopping products is " + products.items.length);


//PART 2
var productsItems = products.items

function backorderavailability(x) {
 for (var i =0; i < (x).length; i++) {
  if (x[i].product.inventories[0].availability == "backorder")
  console.log(x[i].product.title); }
}


console.log(backorderavailability(productsItems));


//PART 3
var productsItems = products.items

function imagelink(x) {
 for( var i =0; i < (x).length; i++)	{
   if (x[i].product.images.length > 1)
   console.log(x[i].product.title); }
}

console.log(imagelink(productsItems));
