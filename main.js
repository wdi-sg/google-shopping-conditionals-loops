//Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

/**

var catalogue = products.items;

var itemCount = 0;

for (var i= 0; i < catalogue.length; i++) {
  if (catalogue[i].kind === "shopping#product"){
    itemCount += 1;
  }
}

console.log(itemCount);

**/

//Print the title of all items with a backorder availability in inventories.

//catalogue[i].product.inventories[0].availability

//"inStock" versus "backorder"
/**
var catalogue = products.items;

var sum = 0;

//var productInfo = ;

for (var i= 0; i < catalogue.length; i++) {
  if (catalogue[i].product.inventories[0].availability === "backorder") {
    console.log (catalogue[i].product.title);
    sum += 1;
  }
}

console.log(sum);
**/

//Print the title of all items with more than one image link.

/**

var catalogue = products.items;

var sum = 0;

for (var i= 0; i < catalogue.length; i++) {
  if (catalogue[i].product.images.length>1) {
    console.log (catalogue[i].product.title);
    sum += 1;
  }
}

console.log(sum);

**/

//Print all "Canon" products in the items (careful with case sensitivity).
/**

var catalogue = products.items;

var sum = 0;

for (var i= 0; i < catalogue.length; i++) {
  if (catalogue[i].product.brand==="Canon") {
    console.log (catalogue[i].product.title);
    sum += 1;
  }
}

console.log(sum);
**/

//Print all items that have an author name of "eBay" and are brand "Canon".
/**
var catalogue = products.items;

var sum = 0;

for (var i= 0; i < catalogue.length; i++) {
  if (catalogue[i].product.author.name.includes("eBay")===true && catalogue[i].product.brand==="Canon"){
    console.log (catalogue[i].product.title);
    sum += 1;
  }
}

console.log(sum);
**/
//Print all the products with their brand, price, and an image link

//all products have brands

/**
var catalogue = products.items;

var sum = 0;

for (var i= 0; i < catalogue.length; i++) {{
    console.log (catalogue[i].product.brand);
    console.log (catalogue[i].product.inventories[0].price);
    console.log (catalogue[i].product.images)
    sum += 1;
  }
}

console.log(sum);
**/
//Further:
//Prompt the user for the product brand and print only those products.
/**
var userInput= prompt("For what brand do you want to see the availability of?");
var catalogue = products.items;

var sum = 0;

for (var i= 0; i < catalogue.length; i++) {
  if (catalogue[i].product.brand.toLowerCase()===userInput) {
    console.log (catalogue[i].product.title);
    sum += 1;
  }
}

console.log(sum);
**/
//Prompt the user if they want to see only new or used items.

/**
var userInput= prompt("Do you want 'new' or 'used' items?");
var catalogue = products.items;

var sum = 0;

for (var i= 0; i < catalogue.length; i++) {
  if (catalogue[i].product.condition.toLowerCase()===userInput) {
    console.log (catalogue[i].product.title);
      sum += 1;
  }
}

console.log(sum);
**/

/**

Further:
Prompt the user what kind of search they want to do- search by brand or search by condition.

Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)

Further:
Print out some special error text (e.g. "Sorry, nothing found") if there were no results.
**/

var catalogue = products.items;

var userChoice = prompt("Do you want to search based on 'brand' or 'condition'?");

var sum = 0;

if (userChoice === "brand") {
  var userInput= prompt("For what brand do you want to see the availability of?");
    for (var i= 0; i < catalogue.length; i++) {
      if (catalogue[i].product.brand.toLowerCase()===userInput) {
      console.log (catalogue[i].product.title);
      sum+=1;
      }
    }
  } else if (userChoice==="condition") {
    var userInput= prompt("Do you want 'new' or 'used' items?");
    for (var i= 0; i < catalogue.length; i++) {
      if (catalogue[i].product.condition.toLowerCase()===userInput) {
      console.log (catalogue[i].product.title);
      sum+=1;
    }
  }
}

if (sum === 0) {
  alert("sorry, nothing found");
}

