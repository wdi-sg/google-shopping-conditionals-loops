//1. products.items[0].product.brand = " nikon" if i want to find brand
//2. print kind of shopping#product


//setting variables to use
console.log(products.items.length);

var prodItem = products.items;
/****************************/

//1.  - Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

var counter = 1;
/*
for (var i = 0; i < prodItem.length; i++) {
  if(prodItem[i].kind === "shopping#product") {
    // counter =+
    console.log(counter++);

  }
}
*/

/****************************/

//2.Print the `title` of all items with a `backorder` availability in `inventories`.
// check is availability equals to "inStock"
// products.items[1].product.inventories[0].availability
//print products.items[1].product.title
/*
for (var i = 0; i < prodItem.length; i++) {
  if(prodItem[i].product.inventories[0].availability == "inStock") {
    // console.log(counter++)
    console.log(counter++ + "." + " "+ "In stock: " + prodItem[i].product.title)
  }
}
*/

/****************************/
/*
//3. Print the `title` of all items with more than one image link.
//find object directory to image key.
//image is in array. find length
// if length more than 1
//products.items[0].product.images.length

for (var i = 0; i < prodItem.length; i++) {
  if(prodItem[i].product.images.length > 1 ) {
    counter++;
    console.log(prodItem[i].product.images);
    // console.log(counter++ + "." + " "+ "In stock: " + prodItem[i].product.title)
  }
}
console.log(counter);

*/
/****************************/
/*
//4. Print all "Canon" products in the items (careful with case sensitivity)
//prodItem[1].product.brand
for (var i = 0; i < prodItem.length; i++) {
  if(prodItem[i].product.brand == "Canon" ) {
    // console.log(counter++)
    console.log(counter++ + "." + " "+ "Brand: " + prodItem[i].product.brand + ", " + products.items[i].product.title )
  }
}&& prodItem[i].product.brand
*/

/****************************/
//x = asdf Big
// var y = x.search("Big");
// console.log(y);
//5. Print all `items` that have an author name of "eBay" and are brand "Canon".
/*
for (var i = 0; i < prodItem.length; i++) {
  var brand = prodItem[i].product.brand;
  var title = products.items[i].product.title;
  var author = prodItem[i].product.author.name;
  var hasName = author.search("eBay");
  // console.log(hasName)

  if(brand == "Canon" && hasName >= 0) {
    // console.log(counter++)
    console.log(i+ ". " + " "+ "Brand: " + brand  + ", " + title + ", " + author);
  }
}
*/


// 6. Print all the products with their **brand**, **price**, and an **image link**
/*
for (var i = 0; i < prodItem.length; i++) {
  var brand = prodItem[i].product.brand;
  var title = products.items[i].product.title;
  var author = prodItem[i].product.author.name;
  var price = prodItem[i].product.inventories[0].price;
  var imgLink = prodItem[i].product.images[0].link;
  // var hasName = author.search("eBay");
    // console.log(hasName)
    // console.log(counter++)
    console.log(i+ ". " + " "+ "Brand: " + brand  + ", " + "Price: " + "$" + price + ", " + "Image Link: " + imgLink);

}
*/
//7. Prompt the user for the product brand and print only those products.
// Prompt the user if they want to see only new or used items.
var userInputun = prompt("Search for brands (Sony, Canon, Nikon)").toLowerCase();
var userInput = userInputun.charAt(0).toUpperCase() + userInputun.slice(1, userInputun.length);
// console.log(userInput);
var newOrOld = prompt("Would you want to view a new or old item?").toLowerCase();

function searchBrand(thingBrand, thingNeworOld) {
for (var i = 0; i < prodItem.length; i++) {
  var brand = prodItem[i].product.brand;
  var title = products.items[i].product.title;
  var author = prodItem[i].product.author.name;
  var hasName = author.search("eBay");
  var imgLink = prodItem[i].product.images[0].link;
  var condition = prodItem[i].product.condition;
  // console.log(hasName)

  if(brand == thingBrand && condition == thingNeworOld) {
    // console.log(counter++)
    console.log(i+ ". " + " "+ "Title: " + title + ", " + imgLink);
  }
}
}

searchBrand(userInput,newOrOld);



