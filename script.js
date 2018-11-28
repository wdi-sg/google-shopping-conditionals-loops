// ##Part 1

// - Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

// var countItems = 0;

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i]; // Number of array in items
//   if(numItems == numItems){
//     countItems += 1;
//   }
// }
// console.log(countItems);

//#Part 2

//Print the title of all items with a backorder availability in inventories.

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   if(numItems.product.inventories[0].availability == "backorder") {
//     console.log("Backorder item: " + numItems.product.title);
//   }
//   }

// console.log(products.items[15].product.inventories[0]);
// Back order on line 145/720

//##Part 3

// Print the title of all items with more than one image link.

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var numImages = numItems.product.images
//   if(numImages.length > 1) {
//     console.log("Image link more than one:  " + numItems.product.title);
//   }
//   }

// console.log(products.items[15].product.images);
// 6 images with more than 1 image link

//##Part 4

//Print all "Canon" products in the items (careful with case sensitivity).

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemCanon = numItems.product.brand;
//   if(itemCanon.toLowerCase() === "canon") {
//     console.log("Canon products:  " + numItems.product.title);
//   }
//   }

  //console.log(numItems.product.title);


//##Part 5

//Print all items that have an author name of "eBay" and are brand "Canon".

// for(var i = 0; i < products.items.length; i++){
//   var numItems = products.items[i];
//   var itemCanon = numItems.product.brand;
//   var itemAuth = numItems.product.author.name;
//   if(itemCanon.toLowerCase() === "canon" && itemAuth.toLowerCase().includes("ebay") === true) {
//     console.log("Canon products from eBay:  " + numItems.product.title);
//   }
//   }

//##Part 6

//Print all the products with their brand, price, and an image link

for(var i = 0; i < products.items.length; i++){
  var numItems = products.items[i];
  var itemBrand = numItems.product.brand;
  var itemPrice = numItems.product.inventories[0].price;
  var itemImage = numItems.product.images[0].link;
  // if(itemCanon.toLowerCase() === "canon" && itemAuth.toLowerCase().includes("ebay") === true) {
  //   console.log("Canon products from eBay:  " + numItems.product.title);
  // }
  console.log("Brand: " + itemBrand + "Price: " + itemPrice+ "Image: " + itemImage);
  }


