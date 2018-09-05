// Part I
 console.log(products);

 var count = 0;

  for (var i=0; i<products.items.length; i++){
  var item = products.items[i];
  if (item.kind === "shopping#product"){
  count++;
  }
}
  console.log(count)

 // Part II
  for (var i=0; i<products.items.length; i++){
  var item = products.items[i];
  if (item.product.inventories[0].availability === "backorder"){
  console.log(item.product.title);
  }
  }

// Part III
  for (var i=0; i<products.items.length; i++){
  var item = products.items[i];
  if (item.product.images[1] != ""){
  console.log(item.product.title);
  }
  }

  // Part IV
  for (var i=0; i<products.items.length; i++){
  var item = products.items[i];
  if (item.product.brand === "Canon"){
  console.log(item);
  }
  }

  // Part V
  for (var i=0; i<products.items.length; i++){
  var item = products.items[i];
  if (item.product.author.name === "eBay" && item.product.brand === "Canon"){
  console.log(item);
  }
  }

  // Part VI 
  for (var i=0; i<products.items.length; i++){
  var item = products.items[i];
  console.log("Product", i+1, ":", item.product.brand, item.product.inventories[0].price, item.product.images[0].link);
  }
  


  

  

