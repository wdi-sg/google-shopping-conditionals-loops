//Go through the items and find all results that have kind of shopping#product. Print the count of these results.

/* for (var i=0;i<products.items.length; i++){

  var shopProd = products.items[i];
if (shopProd.kind == "shopping#product"){
  count++;
}
}

console.log(count);



//Where else is this count information stored in the search results?
console.log(shopProd);



//Print the title of all items with a backorder availability in inventories.

for (i=0; i<products.items.length; i++){
  var prodAvail = products.items[i];
  if(prodAvail.product.inventories[0].availability === "backorder"){
    console.log(prodAvail.product.title);
  }
}


//Print the title of all items with more than one image link.

for (i=0; i<products.items.length; i++){
  var prodImg = products.items[i];
if(prodImg.product.images[0].link !== null){
  console.log(prodImg.product.title);
}
}


//Print all "Canon" products in the items (careful with case sensitivity).

for (i=0; i<products.items.length; i++){
  var prodCanon = products.items[i];
  var word = "Canon";
  if (prodCanon.product.title.indexOf(word) != -1){
    console.log(prodCanon.product.title);
  }
}


//Print all items that have an author name of "eBay" and are brand "Canon".

 for (var i=0; i<products.items.length; i++){
  var prodEbay = products.items[i];
if((prodEbay.product.author.name.indexOf("eBay") != -1)&&(prodEbay.product.brand === "Canon")){
console.log(prodEbay.product.title);
}
}


//Print all the products with their brand, price, and an image link
for (var i=0; i<products.items.length; i++){
  var allProds = products.items[i];
  console.log(`Brand: ${allProds.product.brand}`);
  console.log(`Price: $${allProds.product.inventories[0].price}`);
  console.log(`Link: ${allProds.product.images[0].link}`);
  console.log(" ");
} */

//Futher 1: Prompt the user for the product brand and print only those products.
//Repeated below in Futher 3.

/*var stringPrompt = prompt(`Please enter one of the following product brands. \n
  Canon, Sony, Nikon, Panasonic, Samsung, Fuji, Pentax`);
var userBrand = stringPrompt.charAt(0).toUpperCase()+stringPrompt.slice(1);


for (var i=0; i<products.items.length; i++){
  var allProds = products.items[i];
  if (allProds.product.brand === userBrand){
  console.log( `Products: ${allProds.product.title}`);
}
}*/

/* //Further 2: Prompt the user if they want to see only new or used items.
//Repeated below in Further 3.

var stringPromptTwo = prompt (`Please enter "New" or "Used" to view available items.`)
var userCondition = stringPromptTwo.toLowerCase();

for (var i=0; i<products.items.length; i++){
  var allProds = products.items[i];
  if (userCondition === "new" && allProds.product.condition === userCondition){
  console.log(`New products available: ${allProds.product.title}`);
} else if (userCondition === "used" || allProds.product.condition === "used"){
  console.log(`Used products available: ${allProds.product.title}`);
} else if ((userCondition ==="new" && userCondition === "used") || allProds.product.condition.length === null){
  alert(`No product available at this time.`); break;
} else if (userCondition !== "new" || userCondition !== "used") {
  alert(`Error! Please key in "New" or "Used.`); break;
}
} */


//Further 3: Prompt the user what kind of search they want to do- search by brand or search by condition.
var stringPromptThree = prompt (`Please enter catergory to search by: "Brand"/"Condition".`);
var userCat = stringPromptThree.toLowerCase();

if (userCat === "brand"){
var stringPrompt = prompt(`Please enter one of the following product brands. \n
  Canon, Sony, Nikon, Panasonic, Samsung, Fuji, Pentax`);
var userBrand = stringPrompt.charAt(0).toUpperCase()+stringPrompt.slice(1);
}else if (userCat === "condition") {
    var stringPromptTwo = prompt (`Please enter "New" or "Used" to view available items.`)
var userCondition = stringPromptTwo.toLowerCase();
}


for (var i=0; i<products.items.length; i++){
  var allProds = products.items[i];
  if (allProds.product.brand === userBrand){
  console.log( `Products: ${allProds.product.title}`);
}
}

for (var i=0; i<products.items.length; i++){
  var allProds = products.items[i];
  if (userCondition === "new" && allProds.product.condition === userCondition){
  console.log(`New products available: ${allProds.product.title}`);
} else if (userCondition === "used" || allProds.product.condition === "used"){
  console.log(`Used products available: ${allProds.product.title}`);
} else if ((userCondition ==="new" && userCondition === "used") || allProds.product.condition.length === null){
  alert(`No product available at this time.`); break;
} else if (userCondition !== "new" || userCondition !== "used") {
  alert(`Error! Please key in "New" or "Used.`); break;
}
}
































