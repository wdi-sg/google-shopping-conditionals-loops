var itemList = products["items"];
//part1
// var count =0;
// for (var i=0; i<itemList.length;i++){
//   if (itemList[i].kind == "shopping#product"){
//     //console.log(itemList[i]);
//     count +=1;
//   }
// };
//part2
// for (var i=0; i<itemList.length;i++){
//   if (itemList[i].product.inventories[0].availability == "backorder"){
//     console.log(itemList[i].product.title);
//   }
// };
//part3
// for (var i=0; i<itemList.length;i++){
//   if (itemList[i].product.images.length >1){
//     console.log(itemList[i].product.title);
//   }
// };
//part4
// for (var i=0; i<itemList.length;i++){
//   if (itemList[i].product.brand == "Canon"){
//     console.log(itemList[i]);
//   }
// };
//part5
// for (var i=0; i<itemList.length;i++){
//   if (itemList[i].product.brand == "Canon"&&itemList[i].product.author.name == "eBay"){
//     console.log(itemList[i]);
//   }
// };
//part6
// for (var i=0;i<itemList.length;i++){
//   console.log(itemList[i].product.brand+" "+itemList[i].product.inventories[0].price+" "+itemList[i].product.link);
// };

// Further part 1
// var productBrand = prompt("what product brand do you like?");
// function pBrand (x) {
//   for (var i=0;i<itemList.length;i++){
//     if (itemList[i].product.brand == x){
//       console.log(itemList[i]);
//     }
//   }
// };
// pBrand(productBrand);

// Further part 2
// var searchType = prompt("Search type");
// var searchValue = prompt("Enter exact value");

// function search (x,y) {
//   var count =0;
//   for (var i=0;i<itemList.length;i++){
//     if (x == "condition" &&itemList[i].product.condition==y){
//       console.log(itemList[i]);
//     }
//     else if (x == "brand" &&itemList[i].product.brand==y){
//       console.log(itemList[i]);
//     }
//     else {console.log("sorry, nothing found");}
//   }
// };

// search(searchType,searchValue);
