//Q1
//Initialise var count
var count = 0;
var productBrandInput;
var productConditionInput;

//Prompt user for search input
searchInput = prompt("Search by brand or Search by condition?",
"brand or condition");

if(searchInput.toLowerCase() === "brand"){
  //Prompt user for product brand
  productBrandInput = prompt("Enter product brands: ", "canon, nikon, etc");
  for(var i=0; i < products.items.length; i++){
    if(productBrandInput.toLowerCase() === products.items[i].product.brand.toLowerCase()){
      console.log(products.items[i].product.title);
    }
    else{
      console.log("Sorry, nothing found");
    }
  }
}
else if(searchInput.toLowerCase() === "condition"){
  //Prompt user for condition of product
  productConditionInput = prompt("Enter product condition: ", "new or used");
  for(var i=0; i < products.items.length; i++){
    if(productConditionInput.toLowerCase() === products.items[i].product.condition.toLowerCase()){
      console.log(products.items[i].product.title);
    }
    else{
      console.log("Sorry, nothing found");
    }
  }
}

//Look through all array(items) in products
//for(var i=0; i < products.items.length; i++){ //

  //Print all 25 items
  /*console.log(products.items[i]);

  //Find conditions of kind = 'shopping#product'
  if(products.items.kind === "shopping#product"){

    //For every match, count will be 1
    count = 1;
  }

  //Increment count
  count++;
}

  //Print sum values
  console.log(count);*/

//Q2
  //Find condition of inventories == 'backorder'
  /*if(products.items[i].product.inventories[0].availability === "backorder"){

    //Print product title of identified match
    console.log(products.items[i].product.title);
  }
}*/

//Q3
  //Find condition with > 1 image link
  /*if(products.items[i].product.images.length > 1){

    //Print product title of identified match
    console.log(products.items[i].product.title);
}*/

//Q4
  //Find condition for all 'Canon'.lowercase item
  /*if(products.items[i].product.brand.toLowerCase() === "canon"){

    //Print product title of identified match
    console.log(products.items[i].product.title);
  }
}*/

//Q5
  //Find condition for all author == 'eBay' && brand == 'canon'
  /*if(products.items[i].product.author.name.includes("eBay") &&
        products.items[i].product.brand.toLowerCase() === "canon"){

    //Print product title of identified match
    console.log(products.items[i].product.title);
  }
}*/

//Q6
  //Print all the products with following details
  /*console.log(products.items[i].product.title); //name
  console.log(products.items[i].product.brand); //brand
  console.log("USD " +parseInt(products.items[i].product.inventories[0].price)); //price
  console.log(products.items[i].product.link); //image link
}*/

//Further
  //Compare input with product brand
  /*if(productBrandInput.toLowerCase() === products.items[i].product.brand.toLowerCase()){

    //Print only those products
    console.log(products.items[i].product.title);
  }
  //Compare input with product condition
  else if(productConditionInput.toLowerCase() === products.items[i].product.condition.toLowerCase()){
    console.log(products.items[i].product.title);
  }
  else{
    console.log("Sorry, nothing found");
  }
}*/
