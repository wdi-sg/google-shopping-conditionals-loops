// console.log for more convinient inspecting of data in browser
console.log(products);

// 1. Go through the items and find all results that have kind of shopping#product.

console.log('%c Question 1 ', 'background: #222; color: #bada55');

for (var i = 0; i < products.items.length; i++) {
  var item = products.items[i];

if (item.kind = "shopping#product")
  console.log(products.items[i].product.title);
};

// 2. Print the title of all items with a backorder availability in inventories.

console.log('%c Question 2 ', 'background: #222; color: #bada55');

for (var i = 0; i < products.items.length; i++) {
  var available = products.items[i].product.inventories[0].availability
  var elementWeNeed = products.items[i].product

if (available === "backorder")
  console.log(elementWeNeed.title);
};

// 3. Print the title of all items with more than one image link.

console.log('%c Question 3 ', 'background: #222; color: #bada55');

for (var i = 0; i < products.items.length; i++) {
var imgMore = products.items[i].product.images
var elementWeNeed = products.items[i].product

if (imgMore.length > 1) {
  console.log(elementWeNeed.title);
  }
};

// 4. Print all "Canon" products in the items (careful with case sensitivity).

console.log('%c Question 4 ', 'background: #222; color: #bada55');

for (var i = 0; i < products.items.length; i++) {
var particularBrand = products.items[i].product.brand
var elementWeNeed = products.items[i].product

if (particularBrand === "Canon") {
  console.log(elementWeNeed.title);
  }
};

// 5. Print all items that have an author name of "eBay" and are brand "Canon".

console.log('%c Question 5 ', 'background: #222; color: #bada55');

for (var i = 0; i < products.items.length; i++) {
  var particularBrand = products.items[i].product.brand
  var particularName = products.items[i].product.author.name
  var elementWeNeed = products.items[i].product

if (particularBrand === "Canon" && particularName === 'eBay') {
  console.log(elementWeNeed.title);
  }
};

// 6. Print all the products with their brand, price, and an image link.

console.log('%c Question 6 ', 'background: #222; color: #bada55');

for (var i = 0; i < products.items.length; i++) {
  var item = products.items[i];

console.log(products.items[i].product.title, products.items[i].product.brand, products.items[i].product.inventories[0].price, products.items[i].product.images );
};
console.log('%c really dont understand why this statement is here :) ', 'background: #222; color: #bada55');
