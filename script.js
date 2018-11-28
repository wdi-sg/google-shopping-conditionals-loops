// - Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?
var productTotalCount = products["currentItemCount"];

console.log('Total number of product: ' + productTotalCount);


console.log('************************');
// - Print the `title` of all items with a `backorder` availability in `inventories`.

for (var i=0; i<productTotalCount; i++) {
var backOrderStatus = products['items'][i]["product"]["inventories"][0]['availability'];
var productTitle = products["items"][i]["product"]["title"];

if (backOrderStatus == 'backorder') {
  console.log('The item \"' + productTitle + '\" is in back order.');
};
};

console.log('************************');
// - Print the `title` of all items with more than one image link.

for (var i=0; i<productTotalCount; i++) {

  var itemsWithMoreImage = products['items'][i]['product']['images'].length;
  var productTitle = products["items"][i]["product"]["title"];

  if (itemsWithMoreImage > 1) {
    console.log("\"" + productTitle + "\" has more than 1 image.");
  };
};

console.log('************************');
// - Print all "Canon" products in the items (careful with case sensitivity).

for (var i=0; i<productTotalCount; i++) {
  var productTitle = products["items"][i]["product"]["title"];
  if (productTitle.substring(0,5) == "Canon") {
    console.log('The item \"' + productTitle + '\" is a Canon product.');
  };
};

console.log('************************');
// - Print all `items` that have an author name of "eBay" and are brand "Canon".

for (var i=0; i<productTotalCount; i++) {
  var checkAuthor = products['items'][i]['product']['author']['name'];
  var checkBrand = products['items'][i]['product']['brand'];
  var printItem = products["items"][i]["product"]["title"];

  if (checkAuthor == 'eBay' && checkBrand == 'Canon') {
    console.log('The Author and Brand of \"' + printItem + '\" is ' + checkAuthor + ' and ' + checkBrand + '.');
  };
};

console.log('************************');
// - Print all the products with their **brand**, **price**, and an **image link**

for ( var i=0; i<productTotalCount; i++) {
  var brand = products['items'][i]['product']['brand'];
  var price = products['items'][i]["product"]["inventories"][0]['price'];
  var imageLink = products['items'][i]['product']['images'][0];
  var printItem = products["items"][i]["product"]["title"];

  console.log(printItem + '\n' + brand + '\n' + price + '\n' + imageLink);
};

// ### Further:
// Prompt the user for the product brand and print only those products.

// Prompt the user if they want to see only new or used items.

// ### Further:
// Prompt the user what kind of search they want to do- search by brand or search by condition.

// Then prompt the user to put in their actual search value- (new/used for condition *or* brand name for brand)

// ### Further:
// Print out some special error text (e.g. "Sorry, nothing found") if there were no results.
var searchCollate = [];
var againUserInput;

var thankYouMessage = function() {
  alert('Thank you for shopping at imPROMPTu Shop!\nIf you would like to search again, please refresh the web page.\nGood bye!');
  return;
};

var sorryMessage = function() {
  alert('Sorry, we do not have any products that matches your search right now. :(')
  searchAgain();
};

var foundMessage = function() {
  alert('This are your search results:\n\n' + searchCollate);
  searchAgain();
};

var searchAgain = function() {
  againUserInput = prompt('Would you like to try another search? (yes or no)');
  if (againUserInput == null) {
    thankYouMessage();
  };

againUserInput = againUserInput.toLowerCase();

if (againUserInput.charAt(0) == 'y') {
  searchCollate = [];
  searchRun();
} else if (againUserInput.charAt(0) == 'n') {
  thankYouMessage();
};
};

var showBrandSearch = function(brandNameByUser) {
  brandNameByUser = brandNameByUser.substring(0,5);
  var searchCollateCount = 0;
    for ( var i=0; i<productTotalCount; i++) {
      var brandToCheck = products['items'][i]['product']['brand'];
      brandToCheck = brandToCheck.toLowerCase();
      brandToCheck = brandToCheck.substring(0,5);
      var brand = products['items'][i]['product']['brand'];
      var productTitle = products["items"][i]["product"]["title"];
      var price = products['items'][i]["product"]["inventories"][0]['price'];
      var condition = products['items'][i]['product']['condition'];
      if (brandToCheck == brandNameByUser) {
        // tempCollate = productTitle;
        var tempCollate = '\nProduct name: ' + productTitle + '\nBrand: ' + brand + '\nCondition: ' + condition + '\nPrice: $' + price + '\n';
        searchCollate.push(tempCollate);
        searchCollateCount++;
       };
       };
  if (searchCollateCount == 0) {
  sorryMessage();
 } else if (searchCollateCount > 0) {
  foundMessage();
      };
};

var showConditionSearch = function(conditionNameByUser) {
  var searchCollateCount = 0;
    for (var i=0; i<productTotalCount; i++) {
        var brand = products['items'][i]['product']['brand'];
        var productTitle = products["items"][i]["product"]["title"];
        var price = products['items'][i]["product"]["inventories"][0]['price'];
        var condition = products['items'][i]['product']['condition'];
      if (conditionNameByUser.charAt(0) == condition.charAt(0)) {
        var tempCollate = '\nProduct name: ' + productTitle + '\nBrand: ' + brand + '\nCondition: ' + condition + '\nPrice: $' + price + '\n';
        searchCollate.push(tempCollate);
        searchCollateCount++;
      };
  };
  if (searchCollateCount == 0) {
    sorryMessage();
  } else if (searchCollateCount > 0) {
    foundMessage();
  };
};

//   for ( var i=0; i<productTotalCount; i++) {
//     var brand = products['items'][i]['product']['brand'];
//     brand = brand.toLowerCase();

//     }
//   }
// }

var searchRun = function() {
  var brandOrCondition = prompt("Would you like to search products by brand or condition of product? (brand or condition)")

  if (brandOrCondition == null) {
    thankYouMessage();
  };

  brandOrCondition = brandOrCondition.toLowerCase();

  if (brandOrCondition.charAt(0) == 'b') {
    var brandNameByUser = prompt("What product brand would you like to look at??");

    if (brandNameByUser == null) {
      thankYouMessage();
    };

    brandNameByUser = brandNameByUser.toLowerCase();
    showBrandSearch(brandNameByUser);
  }  else if (brandOrCondition.charAt(0) == 'c') {
    var conditionNameByUser = prompt("What condition would you prefer? (used or new)");

    if (conditionNameByUser == null) {
      thankYouMessage();
    }

    conditionNameByUser = conditionNameByUser.toLowerCase();
    showConditionSearch(conditionNameByUser);
  };
};

alert('Welcome to imPROMPTu shop!');
searchRun();
