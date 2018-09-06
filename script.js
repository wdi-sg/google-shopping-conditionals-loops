/*
Name:Abdul Hakim
Date 050918
Purpose:Homework 2 google-shopping


//part 1

var count = 0 ;
var items = products.items ;

for (var counter = 0 ; counter < items.length ; counter++){
    if (items[counter].kind === "shopping#product" ){
      count += 1 ;
    }
}

console.log(count) ;


//part 2

var items = products.items

for(var i = 0; i < items.length; i++) {
  if(items[i].product.inventories[0].availability === "backorder") {
    console.log(items[i].product.title);
  }
}


//part 3

var items = products.items

for(var i=0; i<items.length; i++){
  if(items[i].product.images.length > 1){
    console.log(items[i].product.title)
  }

}

//part 4

var items = products.items

for(var i=0 ; i<items.length ; i++){
  if(items[i].product.brand === "Canon"){
    console.log(items[i].product.title)
  }
}

//part 5

var items = products.items

for(var i =0 ; i<items.length ; i++){
  if(items[i].product.brand === "Canon" && items[i].product.author.name === "eBay"){
    console.log(items[i].product.title)
  }
}

*/

//part 6

var items = products.items

for(var i=0 ; i<items.length ; i++){
    console.log(items[i].product.brand)
    console.log(items[i].product.inventories[0].price)
    console.log(items[i].product.images[0].link)
    }

//////////////FURTHER//////////////////////

/*
//Further 1
var brand= prompt("please enter brand")
var condition = prompt("please enter condition")
var items = products.items

for(var i=0 ; i<items.length ; i++){
  if(brand === items[i].product.brand ){
    if(condition ===items[i].product.condition){
  console.log(items[i].product.title)
  console.log(items[i].product.condition)
    }
  }
}


//Further 2

var items = products.items
var input = prompt ("Search by : Enter condition or brand");

if(input === "condition"){
  var inputCondition=prompt("Enter used or new")
  }
else {
  var inputBrand=prompt("Enter brand")
  }


for(var i=0 ; i<items.length ; i++){
  if(items[i].product.condition.includes(inputCondition)){
    console.log(items[i].product.title)
  }
  else if(items[i].product.brand.includes(inputBrand)){
    console.log(items[i].product.title)
  }
  else{console.log("nothing")
  if(input !== items[i].product.condition && input !== items[i].product.brand){
    console.log("nothing") //further 3
    }
  }
}

*/
