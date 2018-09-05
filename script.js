console.log(products);

var count = 0;

for (var i = 0; i < products.items.length; i++) {
    if (products.items[i].kind === "shopping#product") {
      count++;
    }
  }

  console.log(count);

var title = products.items[i];

for (var i = 0; i < products.items.length; i++) {
    if (products.items[i].product.inventories[0].availability === "backorder");{
      console.log(title);
    }
  }

  console.log(title);
