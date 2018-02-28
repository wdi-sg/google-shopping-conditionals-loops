
// 1) Go through the items and find all results that have kind of shopping#product.
// 1) Print the count of these results. Where else is this count information stored in the search results?
// var item_count= 0;
// for (var i=0; i<products.currentItemCount; i++){
//   if (products.items[i].kind == "shopping#product"){
//     item_count += 1;
//   }
// }
// console.log("Product Item Count = " + item_count);

// 2) Print the title of all items with a backorder availability in inventories.
// for (var i=0; i<products.currentItemCount; i++){
//   if (products.items[i].product.inventories[0].availability == "backorder"){
//     console.log("Items with backorder availability: " + products.items[i].product.title);
//   }
// }

// 3) Print the title of all items with more than one image link.
// for (var i=0; i<products.currentItemCount; i++){
//   if (products.items[i].product.images.length > 1){
//     console.log("Items with more than one image link: " + products.items[i].product.title);
//   }
// }

// 4) Print all "Canon" products in the items (careful with case sensitivity).
// for (var i=0; i<products.currentItemCount; i++){
//   if (products.items[i].product.brand === "Canon"){
//     console.log("Items with more than one image link: " + products.items[i].product.title);
//   }
// }

// 5) Print all items that have an author name of "eBay" and are brand "Canon".
// for (var i=0; i<products.currentItemCount; i++){
//   if (products.items[i].product.brand === "Canon" && products.items[i].product.author.name === "eBay"){
//     console.log("Title of item which is Canon brand and eBay author : " + products.items[i].product.title);
//   }
// }

// 6) Print all the products with their brand, price, and an image link
var all_products = [];
for (var i=0; i<products.currentItemCount; i++){
  var individual_product = {};
  individual_product["title"] = products.items[i].product.title;
  individual_product["brand"] = products.items[i].product.brand;
  individual_product["price"] = products.items[i].product.inventories[0].price;
  for (var a=0; a<products.items[i].product.images.length; a++){
    individual_product["link " + (a+1)] = products.items[i].product.images[a].link;
  }
  all_products.push(individual_product);
}

console.log("All products with it's respective title, brand, price and image links: ");
console.log(all_products);
