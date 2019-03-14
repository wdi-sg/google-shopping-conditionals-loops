console.log(products);

var kind = "shopping#products";
  var count1 = 0;
for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].kind = "shopping#products"){
    count1++;
  }
}
  console.log("Number of items with kind = shopping#products = " + count1);

console.log("-----backorder");

  var count2 = 0;
for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].product.inventories[0].availability === "backorder"){
    count2++

    console.log(products.items[i].product.title);
  }
}

console.log("-----#ofBackorder");

console.log("Number of items with availability = backorder = " + count2);

console.log("-----moreImageLink");

for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].product.images.length > 1){

    console.log(products.items[i].product.title);
  }
}
console.log("-----Canon");

for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].product.brand === "Canon"){

    console.log(products.items[i].product.author.name);
  }
}

console.log("-----eBay+Canon");

for ( var i = 0; i < products.items.length; i++ ){
    if (products.items[i].product.author.name === "eBay" && products.items[i].product.brand === "Canon"){

console.log("-----Brand+price+imageLink");


    console.log(products.items[i].product.title);
  }
}
for ( var i = 0; i < products.items.length; i++ ){




//   console.log(products.items[i].product.brand)
//   console.log(products.items[i].product.inventories[0].price)
//   console.log(products.items[i].product.images[0].link);


  console.log("Brand = " + products.items[i].product.brand + " Price: " + products.items[i].product.inventories[0].price + " Image link: " + products.items[i].product.images[0].link);

  }
