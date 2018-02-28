/*1.) Go through the items and find all results that 
have kind of shopping#product. Print the count of these results.
Where else is this count information stored in the search results?

let total = 0;

//From the products list, search for items
products.items.forEach(function(item) {
  //within each items, search for shopping#product
  if(item.kind === "shopping#product")
    //for every shopping#product, add 1 to total
    total += 1;
  });
//print out the total number of shopping#product
console.log(total);*/

/*2.) Print the title of all items with a backorder
availability in inventories.

//from the products list, search inside items
products.items.forEach(function(item) {
  //to find the item "backorder", search inside product>inventories[0]>availability
  if(item.product.inventories[0].availability === "backorder")
    //print the items that its availability is "backorder"
    console.log(item.product.title);
});*/

/*3.) Print the title of all items with more than one image link.

//from the products list, search inside items
products.items.forEach(function(item) {
  //to find image length >1, search inside product
  if (item.product.images.length > 1)
    //print the list of items
    console.log(item.product.title);
});*/

/*4.) Print all "Canon" products in the items (careful with case sensitivity).
products.items.forEach(function(item) {
  if (item.product.brand === "Canon")
    console.log(item.product.title);
});*/

/*5.) Print all items that have an author name of "eBay" and are brand "Canon".
products.items.forEach(function(item) {
  if (item.product.author === "eBay" && item.product.brand === "Canon")
    console.log(item.product.title);
});*/

/*6.) Print all the products with their brand, price, and an image link
price is in inventories[0], link is in images[0]
products.items.forEach(function(item) {
    console.log('Brand: ' + item.product.brand + ' Price: ' + item.product.inventories[0].price + ' Link: ' + item.product.images[0].link);
});*/