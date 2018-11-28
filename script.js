var count = 0;
for (var i in products.items) {
    if (products.items[i].kind == "shopping#product") {
        count++;
    }
}
console.log(count);