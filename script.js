console.log(products)

var typeOfSearch = prompt("Do you want to search by brand or condition?")

if (typeOfSearch === "brand") {
  var brandSearch = prompt("Which brand do you want to search for?")
  for (i = 0; i < products.items.length; i++) {
    if (brandSearch === products.items[i].product.brand) {
      console.log(products.items[i].product.title)
    };
  };
} 
else if (typeOfSearch === "condition") {
  var newOrOld = prompt("Do you want a new or old item?")
  for (i = 0; i < products.items.length; i++) {
    if (newOrOld === products.items[i].product.condition) {
      console.log(products.items[i].product.title)
    }
  };
};
