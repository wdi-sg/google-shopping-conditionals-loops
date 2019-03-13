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

// Print the title of all items with a backorder availability in inventories.

var itemsWithBackorderAvail = 0;

// e.g. inventories = products["items"][i]["products"]["inventories"]["availability"];

for (var i = 0; i < items.length; i++) {
  var inventories = products["items"][i]["product"]["inventories"][0]["availability"];
  if (inventories === "backorder") {
    itemsWithBackorderAvail += 1;
  } else {
    console.log("boop!");
  }
}

console.log('There are ' + itemsWithBackorderAvail + ' products with a backorder availability in inventories.')






