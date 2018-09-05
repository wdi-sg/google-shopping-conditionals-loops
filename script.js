//Go through the items and find all results that have kind of shopping#product.
//Print the count of these results.
//Where else is this count information stored in the //search results?

var count = 0;

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === 'shopping#product') {
    count ++;
  };
};

console.log(`There are ${count} shopping#product items.`);
