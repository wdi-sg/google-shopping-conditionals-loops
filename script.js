console.log(products);

// //Go through the items and find all results that have kind of shopping#product. Print the count of these results.
// var count = 0;
// for (i=0; i < products.items.length; i++) {
//   if (products.items[i].kind === "shopping#product") {
//     count++;
//   }
// }
// console.log(count);
// //Where else is this count information stored in the search results?
// //Ans: current item count


// //Print "title" of all items with a "backorder" availability in "inventories"
// for (i=0; i < products.items.length; i++) {
//   for (j=0; j < products.items[i].product.inventories.length; j++) {
//     if (products.items[i].product.inventories[j].availability === "backorder") {
//     console.log(products.items[i].product.title);
//   }
// }
// }


// //Print "title" of all items with more than one image link
// for (i=0; i < products.items.length; i++) {
//     if (products.items[i].product.images.length > 1) {
//     console.log(products.items[i].product.title);
//   }
// }


// //Print all "Canon" products in the items (careful with case sensitivity).
// for (i=0; i<products.items.length; i++) {
//   if (products.items[i].product.brand.toLowerCase() === "canon") {
//     console.log(products.items[i].product.title);
//   }
// }


// //Print all items that have an author name of "eBay" and are brand "Canon".
// for (i=0; i<products.items.length; i++) {
//   if (products.items[i].product.author.name.includes("eBay") && products.items[i].product.brand.toLowerCase() === "canon") {
//   console.log(products.items[i].product.title);
// }
// }


// //Print all the products with their "brand", "price", and an "image link"
// for (i=0; i<products.items.length; i++) {
//   console.log(products.items[i].product.brand);
//   var invObj = products.items[i].product.inventories[0];
//   console.log(invObj.price);
//   for (j=0; j<products.items[i].product.images.length; j++) {
//     console.log(products.items[i].product.images[j]);
//   }
// }


//Further:
//Prompt the user for the product brand and print only those products.
//Print out some special error text (e.g. "Sorry, nothing found") if there were no results.
searchTypeBrand = function () {
  brandIn = prompt("Enter product brand e.g. Panasonic")
  for (i=0; i<products.items.length; i++) {
    if (products.items[i].product.brand.toLowerCase() === brandIn.toLowerCase()) {
      console.log(products.items[i].product.title)
    }
    else {
      alert(`No product found`);
      break;
    }
  }
}

//Prompt the user if they want to see only new or used items.
//Print out some special error text (e.g. "Sorry, nothing found") if there were no results.
searchTypeCond = function () {
  condIn = prompt("Are you looking for new or used products? Enter \"new\" or \"used\"")
  var array = [];
  for (i=0; i<products.items.length; i++) {
    if (products.items[i].product.condition.toLowerCase() === condIn.toLowerCase()) {
      console.log(products.items[i].product.title)
     }
     else {
      alert(`No ${condIn} product found`);
      break;
    }
  }
}

//Prompt the user what kind of search they want to do- search by brand or search by condition.
searchTypeIn = prompt("Do you want to search by brand or condition of item (new/used)? Enter b:brand, c:condition");
if (searchTypeIn === "b") {
  searchTypeBrand();
}
else {
  searchTypeCond();
}
