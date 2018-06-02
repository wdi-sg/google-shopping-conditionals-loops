/* Deliverables 1
Go through the items and find all results that have kind of shopping#product. 
Print the count of these results. 
Where else is this count information stored in the search results?*/


console.log("Total number of shopping products is " + products.items.length);



/* Deliverables 2
Print the title of all items with a backorder availability in inventories.
*/

var productsItems = products.items

function backorderavailability(x) {
for (var i =0; i < (x).length; i++) {
if (x[i].product.inventories[0].availability == "backorder") 
console.log(x[i].product.title);
 }	
}	


console.log(backorderavailability(productsItems));

/* Deliverables 3
Print the title of all items with more than one image link.
*/

var productsItems = products.items
function imagelink(x) {
for( var i =0; i < (x).length; i++)	{
if (x[i].product.images.length > 1)
console.log(x[i].product.title); 
 }	
}

console.log(imagelink(productsItems));

/* Deliverables 4
Print all "Canon" products in the items (careful with case sensitivity)*/

var productsItems = products.items
function camerabrand(x) {
for( var i = 0; i < (x).length; i++) {
if (x[i].product.title.indexOf("Canon") > -1) {
console.log(x[i].product.title);
   }
  }
}



console.log(camerabrand(productsItems));


var productsItems = products.items;
function author(x) {
for (var i = 0; i < (x).length; i++){
if (x[i].product.author.name.indexOf("eBay") >= 0) {
console.log(x[i].product.author.name);
  }
 }
}

/* Deliverables 5 
Print all items that have an author name of "eBay" and are brand "Canon".*/
    
console.log(author(productsItems));


var productsItems = products.items;
function brand(x) {
for (var i = 0; i < (x).length; i++){
if (x[i].product.brand.indexOf("Canon") >= 0) {
console.log(x[i].product.brand);
  }
 }
}

console.log(brand(productsItems));


/*Print all the products with their brand, price, and an image link*/

var productsItems = products.items;
function brandpriceimage(x) {
  for (var i = 0; i < x.length; i++){
      console.log(x[i].product.brand);
      console.log(x[i].product.inventories[0].price);
      console.log(x[i].product.images);
    }
}
console.log(brandpriceimage(productsItems));