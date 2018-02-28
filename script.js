// 1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
var count = 0;
console.log(products['items'].length);

console.log(products['totalItems']); // although there are only 25 listed because itemsPerPage = 25

// 2.) Print the title of all items with a backorder availability in inventories.
for (var i=0; i<products['items'].length;i++) {
  var item = products['items'][i];
  if (item['product']['inventories'][0]['availability'] == 'backorder') console.log(item['product']['title']);
}

// 3.) Print the title of all items with more than one image link.
for (var i=0; i<products['items'].length;i++) {
  var item = products['items'][i];
  if (item['product']['images'].length > 1) console.log(item['product']['title']);
}

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
var canon_items = [];
for (var i=0; i<products['items'].length;i++) {
  var item = products['items'][i];
  if (item['product']['brand'] == 'Canon') {
    console.log(item);
    canon_items.push(item);
  }
}

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
for (var i=0; i<canon_items.length;i++) {
  var item = canon_items[i];
  if (item['product']['author']['name'].includes('eBay')) console.log(item);
}

// 6.) Print all the products with their brand, price, and an image link
for (var i=0; i<products['items'].length;i++) {
  var item = products['items'][i];
  console.log('Brand: ' + item['product']['brand']);
  console.log('Price: ' + item['product']['inventories'][0]['price']);
  console.log('Image link: ' + item['product']['images'][0]['link']);
}

// Class exercises
var time = function() {
  console.log("hello");
};

// var five_secs_timeout = setTimeout(time("hello"), 5000);

var five_secs_interval = setInterval(time, 1000);
setTimeout(function() {clearInterval(five_secs_interval)}, 20000);

var multiply = function(a,b) {
  return a*b;
}

var listOfNumbers = [91,52,53,54,5,6,7,8];
// var listOfNumbers = [1,1,1,1];

var repeatOperation = function(numbers, callback){

  var currentResult = 1; // start with one since we are multiplying

  for( var i=0; i<numbers.length; i++){
    console.log(currentResult);
    currentResult = callback(currentResult, numbers[i]);
  }

  return currentResult;
};

var total = repeatOperation(listOfNumbers, multiply);
