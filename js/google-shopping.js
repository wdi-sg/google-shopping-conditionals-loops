// Write your solutions below
// 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
//
// 2.) Print the title of all items with a backorder availability in inventories.
//
// 3.) Print the title of all items with more than one image link.
//
// 4.) Print all "Canon" products in the items (careful with case sensitivity).
//
// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
//
// 6.) Print all the products with their brand, price, and an image link

//console.log(products);

//Before finding out currentItemCount
console.log("There are: " + products.items.length + " items in the search results!");
//After finding out about currentItemCount
console.log("The item count is " + products.currentItemCount);
// Question 1 done

//global var to shorten names
var shortify = products.items;
// finding out the availability products.items[0].product.inventories[0].availability
for (i = 0; i < shortify.length; i++){
  if (shortify[i].product.inventories[0].availability == "backorder")
  console.log("This item: " + shortify[i].product.title + " is not available");
}
//Question 2 done

for (i = 0; i < shortify.length; i++){
  if (shortify[i].product.images.length >= 2)
  console.log("This item: " + shortify[i].product.title + " has more than 6 images");
}
//question 3 done
for (i = 0; i < shortify.length; i++){
  if (shortify[i].product.brand === "Canon")
  console.log("Canon Products: " + shortify[i].product.title);
}
//question 4 done
for (i = 0; i < shortify.length; i++){
  if (shortify[i].product.brand === "Canon" && shortify[i].product.author.name === "eBay")
  console.log("eBay & Canon: " + shortify[i].product.title);
}
//question 5 done

for (i = 0; i < shortify.length; i++){
  console.log("Brand: " + shortify[i].product.brand + "\n" + "Price: " + shortify[i].product.inventories[0].price + "\n" + "Image Link: " + shortify[i].product.images[0].link);
}
