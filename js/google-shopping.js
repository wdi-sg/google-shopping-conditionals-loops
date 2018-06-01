//Before finding out currentItemCount
console.log("There are: " + products.items.length + " items in the search results!");
//After finding out about currentItemCount
console.log("The item count is " + products.currentItemCount);
// Question 1 done

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
