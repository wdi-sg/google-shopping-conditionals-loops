var count = 0;
for (var i in products.items) {
    if (products.items[i].kind == "shopping#product") {
        count++;
    }
}
console.log(count);

for (var i in products.items) {
    if (products.items[i].product.inventories[0].availability == "backorder") {
        console.log(products.items[i].product.title);
    }
}

for (var i in products.items) {
    if (products.items[i].product.images.length > 1) {
        console.log(products.items[i].product.title);
    }
}

for (var i in products.items) {
    if (products.items[i].product.brand == "Canon") {
        console.log(products.items[i].product.title);
    }
}