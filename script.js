var count = 0;
var productsItems = products.items;


 for (var i = 0; i < productsItems.length; i++) {
   if ((productsItems[i].kind) === "shopping#product"){
   count++;
   console.log(count);
   }
 }

 for (var i = 0; i < productsItems.length; i++) {
   if ((productsItems[i].product.inventories[0].availability) === "backorder") {
   console.log((productsItems[i].product.title));
   }
 }

 for (var i = 0; i < productsItems.length; i++) {
   if (productsItems[i].product.images.length > 1) {
   console.log(console.log(productsItems[i].product.title));
   }
 }

var findByBrand = function(brand) {
 for (var i = 0; i < productsItems.length; i++) {
   if (productsItems[i].product.brand.toLowerCase() === brand.toLowerCase()) {
    console.log(productsItems[i].product.title);
  }
 }
}
findByBrand("Samsung");



for (var i = 0; i < productsItems.length; i++) {
console.log(productsItems[i].product.brand);
console.log(productsItems[i].product.inventories[0].price)

  for (var linkIndex = 0; linkIndex < productsItems[i].product.images.length; linkIndex++) {
    console.log(productsItems[i].product.images[linkIndex].link)
  }
}
//if products author name is eBay and brand is canon
// if (productsItems[0].product.author.name === "eBay")
//   print all of those items


//**** function sample ****
// function checkColor(color) {
//   if (color == "black") {
//     return "Orrrrrrr orrr"
//   } else if ( color == "white") {
//     return "Peh peh"
//   }
//   console.log('hello');
// }

// var whatToSay = checkColor('white');
