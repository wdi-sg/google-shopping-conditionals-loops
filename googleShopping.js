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

//Question 5
console.log("Question 5");

for (var i = 0; i < products["items"].length; i++) {
  var item = products["items"][i];
  var make = item.product.brand;
  var auth = item.product.author.name;
  if ((make === ("Canon" || "canon")) && (auth.includes("eBay"))) {
    console.log(item.product.title);
  }
}

//Question 6
console.log("Question 6");

for (var i = 0; i < products["items"].length; i++) {
  var item = products["items"][i];
  var make = item.product.brand;
  var prc = item.product.inventories[0].price;
  var img = item.product["images"][0];
      console.log("Item: " + item.product.title + " , " + " Brand: " + make + " , " + "Price: $" + prc + " , " + "Image: " + img.link );
  }

//Question 7
console.log("Question 7");

var userInput = prompt("What brand are you searching for?");
   console.log(userInput);

for (var i = 0; i < products["items"].length; i++) {
  var item = products["items"][i];
  var make = item.product.brand;
  var prc = item.product.inventories[0].price;
  var img = item.product["images"][0];
  if(userInput.toLowerCase() == make.toLowerCase()) {
      console.log("Item: " + item.product.title + " , " + " Brand: " + make + " , " + "Price: $" + prc + " , " + "Image: " + img.link );
  }
}
