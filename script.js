for (let i = 0; i < products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability == "backorder") {
    console.log("backorders ", products.items[i].product.title);
  };
  if (products.items[i].product.images.length > 1) {
    console.log("more that one images ", products.items[i].product.title)
  };
  if (products.items[i].product.brand === "Canon") {
    console.log("Canon stuffs ", products.items[i].product.title)
  };
  if (products.items[i].product.brand === "Canon" && products.items[i].product.author.name.startsWith("eBay")) {
    console.log("eBay ", products.items[i].product.title)
  };
  console.log(`This product is ${products.items[i].product.brand} and its price is ${products.items[i].product.inventories[0].price} and you can see it at ${products.items[i].product.images[0].link}.`)
};


