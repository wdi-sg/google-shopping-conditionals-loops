/*
Name:Abdul Hakim
Date 050918
Purpose:Homework 2 google
*/

//part 1
/*
var count = 0 ;
var items = products.items ;

for (var counter = 0 ; counter < items.length ; counter++){
    if (items[counter].kind === "shopping#product" ){
      count += 1 ;
    }
}

console.l
og(count) ;
*/
//part 2

/*
var items = products.items

for(var i = 0; i < items.length; i++) {
  if(items[i].product.inventories[0].availability === "backorder") {
    console.log(items[i].product.title);
  }
}

*/

//part 3
/*

var items = products.items

for(var i=0; i<items.length; i++){
  if(items[i].product.images.length > 1){
    console.log(items[i].product.title)
  }

}

*/

//part 4

/*
var items = products.items

for(var i=0 ; i<items.length ; i++){
  if(items[i].product.brand === "Canon"){
    console.log(items[i].product.title)
  }
}

*/

//part 5

/*
var items = products.items

for(var i =0 ; i<items.length ; i++){
  if(items[i].product.brand === "Canon" && items[i].product.author.name === "eBay"){
    console.log(items[i].product.title)
  }
}

*/

var items = products.items

for(var i=0 ; i<items.length ; i++){
    console.log(items[i].product.brand)
    console.log(items[i].product.inventories[0].price)
    console.log(items[i].product.images.length)}










