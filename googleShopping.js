console.log("hello");

console.log(products);

// //Question 1
console.log("Question 1");
var count = 0

for (var i = 0; i < products["items"].length; i++) {
  var product = products["items"][i];
  if (product["kind"] === "shopping#product"){
    count++;
  }
}
  console.log("Count base on loop: " + count);
  console.log("Count retrived from search result: " + products["currentItemCount"]);

// //Question 2
console.log("Question 2");

for (var i = 0; i < products["items"].length; i++) {
  var item = products["items"][i];
  var inventory = item.product;
  if (inventory.inventories[0].availability === "backorder") {
  console.log(inventory.title);
  }
}

// //Question 3
console.log("Question 3");

for (var i = 0; i < products["items"].length; i++) {
  var item = products["items"][i];
  var imgs = item.product["images"];
  if (imgs.length>0) {
    console.log(item.product.title);
  }
}

//Question 4
console.log("Question 4");

for (var i = 0; i < products["items"].length; i++) {
  var item = products["items"][i];
  var make = item.product.brand;
  if (make === ("Canon" || "canon")) {
    console.log(item.product.title);
  }
}

