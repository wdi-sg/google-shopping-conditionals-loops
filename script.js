
/*/part 1/
var r=0;
for(var i=0;i<products.items.length;i++){
if(products.items[i].kind==="shopping#product"){
r++;
}
}
console.log(r);
*/
/* part 2
for(var i=0;i<products.items.length;i++){
if(products.items[i].product.inventories[0].availability==="backorder"){
console.log(products.items[i].product.title);
}
}
*/

/* part 3
for(var i=0;i<products.items.length;i++){
if(products.items[i].product.images.length>1){
console.log(products.items[i].product.title);
}
}
*/

/* part 4
for(var i=0;i<products.items.length;i++){
if(products.items[i].product.brand==="Canon"){
console.log(products.items[i].product.title);
}
}
*/

/* part 5
for(var i=0;i<products.items.length;i++){
if(products.items[i].product.brand==="Canon"){
console.log(products.items[i].product.title);
}
}
*/

/* part 6
for(var i=0;i<products.items.length;i++){
if(products.items[i].product.brand==="Canon" && products.items[i].product.author.name==="eBay"){
console.log(products.items[i].product.title);
}
}
*/

/* Further part 1
var productBrand = prompt("What is the product brand?");
var newOrOld = prompt("Do you want new or old products?");

for(var i=0;i<products.items.length;i++){
if(products.items[i].product.brand===productBrand && products.items[i].product.condition=== newOrOld){
console.log(products.items[i].product.title);
}
}
*/

/* Further part 2
var userSelection = prompt("Search by condition or by brand?");

if(userSelection==="condition"){
var newOrOld = prompt("Do you want new or old products?");

for(var i=0;i<products.items.length;i++){
if(products.items[i].product.condition=== newOrOld){
console.log(products.items[i].product.title);
}
}
}
else if (userSelection==="brand"){
  var productBrand = prompt("What is the product brand?");
  for(var i=0;i<products.items.length;i++){
if(products.items[i].product.brand===productBrand){
console.log(products.items[i].product.title);
}
}
}
*/

/* Further final code */
var x=0;
var y=0;
var userSelection = prompt("Search by condition or by brand?");

if(userSelection==="condition"){
var newOrOld = prompt("Do you want new or old products?");

for(var i=0;i<products.items.length;i++){
if(products.items[i].product.condition=== newOrOld){
console.log(products.items[i].product.title);
x++;
}
}
if(x===0){
  alert(" Sorry, nothing found. ")
}
}
else if (userSelection==="brand"){
  var productBrand = prompt("What is the product brand?");
  for(var i=0;i<products.items.length;i++){
if(products.items[i].product.brand===productBrand){
console.log(products.items[i].product.title);
y++;
}
}
if(y===0){
  alert("Sorry, nothing found")
}
}
