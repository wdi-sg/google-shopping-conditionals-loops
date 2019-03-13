
// Q1 Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

console.log(products) // View this in console developer to view data tree
// HINT!!! if conditionals keep prompting an error, console log it to see if prints out your desired result.
var shoppingProduct = 0;

// products.items is an array of 25 indexes, which is why you need products.items[i]
for (i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    shoppingProduct ++;
  }
}
console.log(shoppingProduct);

//Q2 Print the title of all items with a backorder availability in inventories.
// inventories key is an array, must be back ordered

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder") {
    console.log(products.items[i].product.title);
  }
}

//console.log(products.items[1].product.inventories[1].availability)

//Q3 Print the title of all items with more than one image link.

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.images.length > 1 ) {
    console.log(products.items[i].product.title);
  }
} // use .length as images is an array.


//Q4 Print all "Canon" products in the items (careful with case sensitivity).

for (i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand === "Canon") {
    console.log(products.items[i].product.title);
  }
}
//console.log(products.items[3].product.brand)

//Q5 Print all items that have an author name of "eBay" and are brand "Canon".

for (i=0; i<products.items.length; i++) {
  var authorName = products.items[i].product.author.name
  var itemBrand = products.items[i].product.brand
  if (authorName.includes ("eBay") && itemBrand === "Canon") {
  console.log(products.items[i].product.title);
  }
}

//var ebaySplit = (products.items[10].product.author.name).split(' ');
//take note that there are items that have ebay and a suffix

//Q6 Print all the products with their brand, price, and an image link
for (i = 0; i < products.items.length; i++ ) {
  let randomImage = Math.floor((Math.random() * products.items[i].product.images.length)) // randomised the images
  console.log(products.items[i].product.title);
  console.log(products.items[i].product.brand);
  console.log(products.items[i].product.inventories[0].price)
  console.log(products.items[i].product.images[randomImage]); //var randomImage is a number, so it should be accessed as an index
}

//Q7 Prompt the user for the product brand and print only those products.
// Prompt the user if they want to see only new or used items.

var userInput = prompt('What brand of products are you looking for?');
var userInputCondition = prompt("Are you looking for new or used condition?")
var userChoice = prompt("Search by brand or condition?");

var userQuery = userInput.charAt(0).toUpperCase() + userInput.slice(1) //Capitalize due to case sensitive brands.
var userConditionQuery = userInputCondition.toLowerCase();

if (userChoice === 'brand' || userChoice === "Brand" || userChoice === "BRAND") {
  alert(userQuery);
}  else if (userChoice === 'condition' || userChoice === 'Condition' || userChoice === "CONDITION"){
  alert(userConditionQuery);
}  else {
  alert("Sorry Nothing Found!")
}

for (i = 0; i < products.items.length; i++) {
  if(products.items[i].product.brand === userQuery && products.items[i].product.condition === userConditionQuery ) { //simple conditional, userQuery is the brand.
    console.log(products.items[i].product.title);
  }
  }

console.log(products.items[0].product.condition)
