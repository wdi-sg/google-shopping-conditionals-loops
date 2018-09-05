// Go through the items and find all results that have kind of shopping#product.
// var tally = 0;
// for (var i = 0; i < products.items.length; i++){
//   var item = products.items[i];
//   var kind = item.kind;
//   if (kind === "shopping#product"){
//   tally++;
//   }
// }
//    console.log("Total kind:shopping#product in items: " + tally);

// Print the title of all items with a backorder availability in inventories
// for (var i = 0; i < products.items.length; i++){
//  if(products.items[i].product.inventories[0].availability === "backorder"){
//   console.log(products.items[i].product.title);
//  }
// }


// Print the title of all items with more than one image link.
// for (var i = 0; i < products.items.length; i++){
//  if(products.items[i].product.images.length > 1){
//   console.log(products.items[i].product.title);
//  }
// }


// Print all "Canon" products in the items (careful with case sensitivity)
// for (var i = 0; i < products.items.length; i++){
//  if(products.items[i].product.brand === "Canon"){
//   console.log(products.items[i].product);
//  }
// }

//Print all items that have an author name of "eBay" and are brand "Canon"
// for (var i = 0; i < products.items.length; i++){
//  if(products.items[i].product.brand === "Canon" && products.items[i].product.author.name.includes("eBay")){
//   console.log(products.items[i].product);
//  }
// }


// Print all the products with their brand, price, and an image link
// for (var i = 0; i < products.items.length; i++){
//   console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);
//  }

// Prompt the user for the product brand and print only those products.
// var brandName = prompt("What brand are you searching for?").toLowerCase();
// for (var i = 0; i < products.items.length; i++){
//  if(products.items[i].product.brand.toLowerCase() === brandName){
//    console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);
//   }
// }


// Prompt the user if they want to see only new or used items.
// var newOrUsed = prompt("Show new or used items?").toLowerCase();
// for (var i = 0; i < products.items.length; i++){
// if((newOrUsed === "new" || newOrUsed === "new items") && products.items[i].product.condition === "new"){
//   console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);
//   }
// else if ((newOrUsed === "old" || newOrUsed === "old items") && products.items[i].product.condition === "used"){
//   console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);
//   }
// else{
//   console.log("No items to show");
// }
// }


// Prompt the user what kind of search they want to do- search by brand or search by condition.
var searchMethod = prompt("Search by brand or condition?").toLowerCase();
var selectedMethod;
if (searchMethod === "brand" || searchMethod === "Search by brand") {
    selectedMethod = prompt("What brand are you searching for?")
    for (var i = 0; i < products.items.length; i++) {
        if (products.items[i].product.brand.toLowerCase() === selectedMethod) {
            console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);
        }
        else{
          console.log("Sorry, no items to show.");
        }
    }
} else if (searchMethod === "condition" || searchMethod === "Search by condition") {
    selectedMethod = prompt("Search for new or used items?")
    for (var i = 0; i < products.items.length; i++) {
        if ((selectedMethod === "new" || selectedMethod === "new items") && products.items[i].product.condition === "new") {
            console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);
        } else if ((selectedMethod === "old" || selectedMethod === "old items") && products.items[i].product.condition === "used") {
            console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);
        } else {
            console.log("Brand: " + products.items[i].product.brand + ". Price: $" + products.items[i].product.inventories[0].price + ". View image here: " + products.items[i].product.images[0].link);

        }
    }
} else {
    console.log("Error: Invalid input.");
}
