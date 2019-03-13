console.log("hi");

//find all results that have kind of shopping#product
// name or title?

//get 1st product name with kind: shopping#product

var items = products["items"];
var results = 0;

for (var i = 0; i < items.length; i++) {
  var kind = products["items"][i]["kind"];
  if (kind === "shopping#product") {
    results += 1;
  }
}
console.log('There are ' + results + ' products with the kind "shopping#product".');

/* 2️⃣ TWO ✌🏻 */
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
  } else {
    // console.log("boop!");
  }
}

// console.log('There are ' + itemsWithBackorderAvail + ' products with a backorder availability in inventories.');

//this logs products titles in a single line; also tells u the number of items with backorder availability, i.e. backorderItems.length
console.log(backorderItems);

/* 3️⃣ THREE */
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
      } else {
        console.log("pop");
      }
}

console.log("These are the products with more than 1 image link: " + itemsWithMoreThan1Image);
console.log(itemsWithMoreThan1Image);










