// Go through the items and find all results that have kind of shopping#product. Print the count of these results.

// var itemsInPage= products.items;
// var count = 0
// for (var i = 0; i < itemsInPage.length; i++) {
//   if (itemsInPage[i].kind === "shopping#product") {
//     count ++;
//   }
// }
// console.log(count);




// //Where else is this count information stored in the search results?

// currentItemCount




// // Print the title of all items with a backorder availability in inventories.

// var itemsInPage= products.items;
// for (var i = 0; i < itemsInPage.length; i++) {
//    var pdtInv = itemsInPage[i].product.inventories;
//     for (var j = 0; j < pdtInv.length; j++) {
//       if (pdtInv[j].availability === "backorder") {
//         console.log("Items with backorder availability: " + itemsInPage[i].product.title);
//       }
//     }
// }




// // Print the title of all items with more than one image link.

// var itemsInPage= products.items;
// for (var i = 0; i < itemsInPage.length; i++) {
//   var pdtImageCount = itemsInPage[i].product.images.length;
//     if (pdtImageCount > 1) {
//       console.log("Items with more than one image: " + itemsInPage[i].product.title);
//     }
// }


// // Print all "Canon" products in the items (careful with case sensitivity).

// var itemsInPage= products.items;
// for (var i = 0; i < itemsInPage.length; i++) {
//   var pdtBrand = itemsInPage[i].product.brand.toLowerCase();
//     if (pdtBrand === "canon") {
//       console.log("Items by Canon : " + itemsInPage[i].product.title);
//     }
// }




// // // Print all items that have an author name of "eBay" and are brand "Canon".

// var itemsInPage= products.items;
// for (var i = 0; i < itemsInPage.length; i++) {
//   var pdtBrand = itemsInPage[i].product.brand.toLowerCase();
//   var pdtAuthorName = itemsInPage[i].product.author.name.toLowerCase();
//   if (pdtBrand === "canon" && pdtAuthorName.includes("ebay") === true) {
//     console.log("Items by Canon and author ebay: " + itemsInPage[i].product.title);
//   }
// }




// // Print all the products with their brand, price, and an image link

// var itemsInPage= products.items;
// for (var i = 0; i < itemsInPage.length; i++) {
//   var pdtBrand = itemsInPage[i].product.brand;
//   var pdtInv = itemsInPage[i].product.inventories;
//   var pdtTitle = itemsInPage[i].product.title;
//   var pdtImageArray = itemsInPage[i].product.images;
//     for (var j = 0; j < pdtInv.length; j++) {
//       var pdtPrice = pdtInv[j].price;
//     }
//     console.log ("Brand : " + pdtBrand + ", " + "Title : " + pdtTitle + ", " + "Price : " + pdtPrice)
//     for (var k = 0; k < pdtImageArray.length; k++) {
//       pdtImageLink = pdtImageArray[k].link;
//       console.log ("    Imagelink " + (k+1) + ": " + pdtImageLink);
//       }
//   }




// // ### Further:
// // Prompt the user what kind of search they want to do- search by brand or search by condition.
// // Then prompt the user to put in their actual search value- (new/used for condition *or* brand name for brand)
// // Prompt the user for the product brand and print only those products.
// // Prompt the user if they want to see only new or used items.
// // Print out some special error text (e.g. "Sorry, nothing found") if there were no results.

var userInputSearchBy = prompt ("Would you like to search by brand or by condition? Please input 'Brand' or 'Condition'.");

if (userInputSearchBy.toLowerCase().includes("br")) {
  userInputSearchBy = "Brand";
  var userInputBrand = prompt("Please input the brand name you would like to enquire about.").toLowerCase();
} else if (userInputSearchBy.toLowerCase().includes("con")) {
  userInputSearchBy = "Condition"
  var userInputCond = prompt("Please input if you would like to see only new or used items? Input 'New' or 'Used'");

      if (userInputCond.toLowerCase().includes('use')) {
        userInputCond = "Used";
      } else if (userInputCond.toLowerCase() === 'new') {
          userInputCond = "New";
      } else {
          alert("Invalid input. Please refresh page and try again!");
      }

} else {
    alert("Invalid input. Please refresh page and try again!")
}
console.log("Search by: " + userInputSearchBy + ", Brand: " + userInputBrand + ", Condition: " + userInputCond);


var itemsInPage= products.items;
var pdtBrandFound = false;

for (var i = 0; i < itemsInPage.length; i++) {
  var pdtBrand = itemsInPage[i].product.brand;
  var pdtInv = itemsInPage[i].product.inventories;
  var pdtTitle = itemsInPage[i].product.title;
  var pdtImageArray = itemsInPage[i].product.images;
  var pdtCondition = itemsInPage[i].product.condition;

  if ((userInputSearchBy.toLowerCase() === "brand" && pdtBrand.toLowerCase() === userInputBrand.toLowerCase()) || (userInputSearchBy.toLowerCase() === "condition" && pdtCondition.toLowerCase() === userInputCond.toLowerCase())) {
    pdtBrandFound = true;
    for (var j = 0; j < pdtInv.length; j++) {
      var pdtPrice = pdtInv[j].price;
    }
    console.log ("Brand : " + pdtBrand + ", " + "Title : " + pdtTitle + ", " + "Price : " + pdtPrice + ", " + "Condition : " + pdtCondition);

    for (var k = 0; k < pdtImageArray.length; k++) {
      pdtImageLink = pdtImageArray[k].link;
      console.log("    Imagelink " + (k+1) + ": " + pdtImageLink);
      }
  }

}

if (pdtBrandFound === false) {
alert("Sorry, nothing found");
}

