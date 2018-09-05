//Q1
//Initialise var count
var count = 0;

//Look through all array(items) in products
for(var i=0; i < products.items.length; i++){

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
  }
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
  if(products.items[i].product.author.name.includes("eBay") &&
        products.items[i].product.brand.toLowerCase() === "canon"){

    //Print product title of identified match
    console.log(products.items[i].product.title);
  }
}
