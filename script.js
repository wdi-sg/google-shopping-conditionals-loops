//part 1: Go through the items and find all results that have kind of shopping#product.
//Print the count of these results.
//Where else is this count information stored in the search results?

var count = 0;
for (var i = 0; i < products.items.length;i++){
  if (products.items[i].kind === "shopping#product"){
    count += 1;
  }
}
 console.log(count);

 //part 2: Print the title of all items with a backorder availability in inventories
 for (var i = 0; i < products.items.length; i++){
  var short_item = products.items[i];
  for (var j = 0; j < short_item.product.inventories.length; j++){
    if (short_item.product.inventories[j].availability === "backorder"){
      console.log(short_item.product.title);
    }
  }
 }
 //part 3: Print the title of all items with more than one image link.
 for (var i = 0; i < products.items.length; i++){
  var short_item = products.items[i];
  if (short_item.product.images.length > 1){
    console.log(short_item.product.title);

  }
 }

//part 4: Print all "Canon" products in the items (careful with case sensitivity)
for (var i = 0; i < products.items.length; i++){
  var short_item = products.items[i];
  if (short_item.product.brand === "Canon"){
    console.log(short_item.product.title);

  }
 }



 //part 5: Print all items that have an author name of "eBay" and are brand "Canon".
 for (var i = 0; i < products.items.length; i++){
  var short_item = products.items[i];
  if (short_item.product.brand === "Canon" && short_item.product.author.name === "eBay"){
    console.log(short_item);

  }
 }


 //part 6: Print all the products with their brand, price, and an image link
 for (var i = 0; i < products.items.length; i++){
  var short_item = products.items[i];
  for (var j = 0; j< short_item.product.inventories.length; j++){
      console.log("Brand name: " + short_item.product.brand + " , price: " + short_item.product.inventories[j].price + " , image links: " + short_item.product.images[0].link);
  }
}



//Further: Prompt the user for the product brand and print only those products.
//Prompt the user if they want to see only new or used items. (There are only condition:new)
var inp = prompt("Input product brand: ");
for (var i = 0; i < products.items.length;i++){
  var short_item = products.items[i];
  if (short_item.product.brand === inp){
    console.log(short_item);
  }
}

var inp2 = prompt("New or used items?: ");
var inp2_lowerCase = inp2.toLowerCase();
for (var i = 0; i < products.items.length;i++){
  var short_item = products.items[i];
  if (short_item.product.condition === inp2_lowerCase){
    console.log(short_item);
  }
  else if (short_item.product.condition === inp2_lowerCase){
    console.log(short_item);
  }
}


//Prompt the user what kind of search they want to do- search by brand or search by condition.
//Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)
var inp3 = prompt("What do you want to search by? (Brand or Condition)?: ");
if (inp3 === "Brand"){
  var inp4 = prompt("What is the search value? (please input brand name): ");
  for (var i = 0; i < products.items.length;i++){
  var short_item = products.items[i];
  if (short_item.product.brand === inp4){
    console.log(short_item);
  }
  }
}

if (inp3 === "Condition"){
  var inp5 = prompt("What is the search value? (please input new or used): ");
  for (var i = 0; i < products.items.length;i++){
  var short_item = products.items[i];
  if(short_item.product.condition === inp5){
    console.log(short_item);
  }
  }
}



















