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
