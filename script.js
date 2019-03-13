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



