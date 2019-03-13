console.log("hi");

/* 1️⃣ ONE 👆🏻 ✅ */
// Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

var items = products["items"];
var results = 0;

for (var i = 0; i < items.length; i++) {
  var kind = products["items"][i]["kind"];
  if (kind === "shopping#product") {
    results += 1;
  }
}
console.log('There are ' + results + ' products with the kind "shopping#product".');

/* 2️⃣ TWO ✌🏻 ✅ */
// Print the title of all items with a backorder availability in inventories.

var itemsWithBackorderAvail = 0;
var backorderItems = [];

// e.g. inventories = products["items"][i]["products"]["inventories"]["availability"];

for (var i = 0; i < items.length; i++) {
  var inventories = products["items"][i]["product"]["inventories"][0]["availability"];
  if (inventories === "backorder") {
    itemsWithBackorderAvail += 1;
    backorderItems.push(products["items"][i]["product"]["title"]);
// this logs the products' titles into separate lines
    console.log(products["items"][i]["product"]["title"] + " has a backorder availability.");
  }
}

// console.log('There are ' + itemsWithBackorderAvail + ' products with a backorder availability in inventories.');

//this logs products titles in a single line; also tells u the number of items with backorder availability, i.e. backorderItems.length
console.log(backorderItems);

/* 3️⃣ THREE ✅ */
// Print the title of all items with more than one image link.

//find where image links are stored
//grab the array storing these image links
//count no. of image links i.e. objects in the array
  //run it through an if statement, image link > 1
    // do another if: if image link > 1 = true,
      //print titles of items
// Object.keys(object).length;

var countImg = 0;
var itemsWithMoreThan1Image = [];

for (var k = 0; k < items.length; k++) {
  var countImgWithinArray = 0;
  countImgWithinArray = products["items"][k]["product"]["images"].length;
  if (countImgWithinArray > 1) {
      itemsWithMoreThan1Image.push(products["items"][k]["product"]["title"]);
            console.log(products["items"][k]["product"]["title"] + " has more than 1 image link.")
      }
}

// console.log("These are the products with more than 1 image link: " + itemsWithMoreThan1Image);
console.log(itemsWithMoreThan1Image);

/* 4️⃣ FOUR * ✅/
// Print all "Canon" products in the items (careful with case sensitivity)

// search for where "Canon" can be found in items. => Settled for "brand" Canon, and not just products with the name Canon e.g. the WEAPON, canon, we don't want to print these.
  // are there instances where the brand name is not recorded correctly, hence missed out from the loop?
// run loop through items
  // make all lower case
    // check if X === Canon
      // if true, print titles

var canonProds = [];

for (var l = 0; l < items.length; l++) {
  var canon = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (canon === "canon") {
      canonProds.push(products["items"][l]["product"]["title"]);
      console.log("This is a Canon product: " + products["items"][l]["product"]["title"]);
    }
}

console.log(canonProds);

/* 5️⃣ FIVE ✅ */
// Print all items that have an author name of "eBay" and are brand "Canon"

// loop through all items:
// if author name INCLUDES "eBay" is true (DO NOT USE ===, as there are brands with the name "ebay - xxx")
// print item titles

// then check them against results from last exercise

var eBayProducts = [];

for (var i = 0; i < items.length; i++) {
  var eBayLowerCase = products["items"][i]["product"]["author"]["name"].toLowerCase();
  var canon = (products["items"][i]["product"]["brand"]).toLowerCase();
  var isItEbay = eBayLowerCase.includes("ebay");
    if (isItEbay === true && canon === "canon") {
      console.log("This product has an author name of eBay, and has the brand Canon: " + products["items"][i]["product"]["title"]);
    }
}

/* 6️⃣ SIX ✅ */
// Print all the products with their brand, price, and an image link

// intended output:
  // Product name / title,
  // Brand: Canon,
  // Price: $$,
  // See image: (1 image link)
// stored preferably in an array-object so it's more efficient to look at?
  //create new object, with an array containing objects
  //loop through items list, adding details of products' brand, price, and 1 image link

for (var v = 0; v < items.length; v++) {
  console.log("Product: " + products["items"][v]["product"]["title"] + "; Brand: " + products["items"][v]["product"]["brand"] + "; Price: " + products["items"][v]["product"]["inventories"][0]["price"] + "; See image:" + products["items"][v]["product"]["images"][0]["link"]);
}

/* FURTHER 1
1. Prompt the user for the product brand and print only those products. ✅
2. Prompt the user if they want to see only new or used items. (DOESN'T SAY ANYTHING ABOUT PRINT?) ✅
*/

// think about how results should be displayed! if user has already specified a brand, when they answer the next prompt with "used" or "new", results should only show either used or new products by the brand specified

var whatProductBrand = prompt("📷 Hi! Type the brand you are interested to see.").toLowerCase();

var nikonProds = [];
for (var l = 0; l < items.length; l++) {
  var nikon = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (nikon === "nikon") {
      nikonProds.push(products["items"][l]["product"]["title"]);
    }
}

var sonyProds = [];
for (var l = 0; l < items.length; l++) {
  var sony = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (sony === "sony") {
      sonyProds.push(products["items"][l]["product"]["title"]);
    }
}

var lytroProds = [];
for (var l = 0; l < items.length; l++) {
  var lytro = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (lytro === "lytro") {
      lytroProds.push(products["items"][l]["product"]["title"]);
    }
}

var panasonicProds = [];
for (var l = 0; l < items.length; l++) {
  var panasonic = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (panasonic === "panasonic") {
      panasonicProds.push(products["items"][l]["product"]["title"]);
    }
}

var samsungProds = [];
for (var l = 0; l < items.length; l++) {
  var samsung = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (samsung === "samsung") {
      samsungProds.push(products["items"][l]["product"]["title"]);
    }
}

var fujiProds = [];
for (var l = 0; l < items.length; l++) {
  var fuji = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (fuji === "fuji") {
      fujiProds.push(products["items"][l]["product"]["title"]);
    }
}

var olympusProds = [];
for (var l = 0; l < items.length; l++) {
  var olympus = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (olympus === "olympus") {
      olympusProds.push(products["items"][l]["product"]["title"]);
    }
}

var pentaxProds = [];
for (var l = 0; l < items.length; l++) {
  var pentax = (products["items"][l]["product"]["brand"]).toLowerCase();
    if (pentax === "pentax") {
      pentaxProds.push(products["items"][l]["product"]["title"]);
    }
}

function getBrandAndOutput () {
switch (whatProductBrand) {
  case "canon":
  message = alert(canonProds);
  break;
  case "nikon":
  message = alert(nikonProds);
  break;
  case "sony":
  message = alert(sonyProds);
  break;
  case "lytro":
  message = alert(lytroProds);
  break;
  case "panasonic":
  message = alert(panasonicProds);
  break;
  case "samsung":
  message = alert(samsungProds);
  break;
  case "fuji":
  message = alert(fujiProds);
  break;
  case "olympus":
  message = alert(olympusProds);
  break;
  case "pentax":
  message = alert(pentaxProds);
  break;
  default:
  message = alert("Sorry, nothing was found!");
}
}
getBrandAndOutput();


/* FURTHER 2
1. Prompt the user what kind of search they want to do- search by brand or search by condition. (This doesn't say anything about printing as well) _✅
2. Then prompt the user to put in their actual search value- (new/used for condition or brand name for brand) (This doesn't say anything about printing neither) ✅
 */

 var whatSearch = prompt("📷 Would you like to search by brand or condition?", "brand", "condition");

switch (whatSearch) {
  case "brand":
  whatProductBrand = prompt("📷 Type the brand you are interested to see.").toLowerCase();
          getBrandAndOutput();
  break;
  case "condition":
  whatCondition = prompt("OK. New or used?", "new", "used");
    // make a function called conditionOfProduct
      // within this function, make a switch statement with 3 cases: new, used, default
        // new: 2nd variable should trigger an alert, showing all new products
          // used: 2nd variable should trigger an alert, showing all used products
            // if user types something else, tell them their input should be either new or used
    // conditionOfProduct();
  default:
  msg = alert("Sorry, I can't do that right now. 😢")
}

/* FURTHER 3
Print out some special error text (e.g. "Sorry, nothing found") if there were no results.
*/
