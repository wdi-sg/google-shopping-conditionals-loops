// own referene - hard code
products["items"][0]["kind"];   // product kind
products["items"][0]["product"]["title"];  // title
products["items"][0]["product"]["inventories"][0]["availability"];  // instock  or backorder
products["items"][0]["product"]["images"].length; // find the number of images link
products["items"][0]["product"]["images"][0]["link"];   // link
products["items"][0]["product"]["brand"];  // brand
products["items"][0]["product"]["author"]["name"];  // author name
products["items"][0]["product"]["inventories"][0]["price"]; //price
products["items"][0]["product"]["inventories"][0]["currency"];  // currency
products["items"][1]["product"]["condition"] //condition

var itemsInProd = products.items;
//ONE
//Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
var kindShoppingProd = 0;   // count for first question

///////////   START of prompt exercise    ////////////////////
// Prompt the user what kind of search they want to do- search by brand or search by condition.
var choice = Number(prompt("Enter 1 for Search by Brand \nEnter 2 for Search by condition"));

if (choice === 1) {
    // Prompt the user for the product brand and print only those products.
  var promptBrand = prompt("Enter Brand Name");
  var capPromptBrand = promptBrand.charAt(0).toUpperCase() + promptBrand.slice(1)  // to auto capitalise the word

  for (i = 0; i < itemsInProd.length; i++) {
    var title = itemsInProd[i]["product"]["title"];
    var brand = itemsInProd[i]["product"]["brand"];
    if (brand === capPromptBrand) {
      console.log(title + " is a product of " + capPromptBrand);
    }
  }
} else if (choice === 2) {
  // Prompt the user if they want to see only new or used items.
  var promptCondition = prompt("Enter condition (new/used)").toLowerCase();

  for (i = 0; i < itemsInProd.length; i++) {
    var title = itemsInProd[i]["product"]["title"];
    var condition = itemsInProd[i]["product"]["condition"];
    if (condition === promptCondition) {
      console.log(title + " is " + promptCondition);
    }
  }
}
/////////    END of prompt exercise  //////////////////////



/*/////////    START OF THE FIRST EXRCISE   //////////////////////
for (i = 0; i < itemsInProd.length; i++) {
  var objInItems = products["items"][i];
  var title = objInItems["product"]["title"];
  var inventories = objInItems["product"]["inventories"];
  var images = objInItems["product"]["images"];
  var brand = objInItems["product"]["brand"];
  var authorName = objInItems["product"]["author"]["name"];
  var price;    // to store the value so that i can retrieve out of the for loop
  var currency;
  var imagesLink;


  // ONE
  if (objInItems["kind"] === "shopping#product") {
    //console.log(objInItems)
    kindShoppingProd += 1;
  }


  for (j = 0; j < inventories.length; j++) {
    var availability = inventories[j]["availability"];

    //TWO
    // Print the title of all items with a backorder availability in inventories.
    if (availability === "backorder") {
      //console.log(title + " have a backorder availability in inventories.");
    }
    price = inventories[j]["price"];
    currency = inventories[j]["currency"];
  }

  for (var x = 0; x < images.length; x++) {
    imagesLink = images[x]["link"];
  }

  // SIX
  //Print all the products with their brand, price, and an image link
  //console.log("Brand: " + brand + "\nPrice: " + price + "\nImages: " + imagesLink);

  // THREE
  //Print the title of all items with more than one image link.
  if (images.length > 1) {
    //console.log(title + " have more than one image link.");
  }

  // FOUR
  // Print all "Canon" products in the items (careful with case sensitivity).
  if (brand === "Canon") {
    //console.log(title + " is a product of " + brand);
  }

  // FIVE
  // Print all items that have an author name of "eBay" and are brand "Canon".
  if (brand === "Canon" && authorName === "eBay") {
    //console.log(products["items"][i]);
  }

}

console.log(kindShoppingProd)*/










