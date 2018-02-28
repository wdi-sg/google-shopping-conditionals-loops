console.log("Question #1");
var things = 0;

var items = products.items;

for (index in items) {
    if (items[index].kind === "shopping#product") {
        things += 1;
    }
}

console.log(things);

console.log("Question #2");
for (index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
        console.log(item.title);
    }
}   

console.log("Question #3");
for (index in items) {
    var item = items[index].product;
    if (item.images.length > 1) {
        console.log(item.title);
    }
}   

console.log("Question #4");
for (index in items) {
    var item = items[index].product;
    if (item.brand === "Canon") {
        console.log(item.title);
    }
}   

console.log("Question #5");
for (index in items) {
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
        console.log(item.title);
    }
}   

console.log("Question #6");
for (index in items) {
    var item = items[index].product;
    console.log("Brand: " + item.brand);
    console.log("Price: " + item.inventories[0].price);
    console.log("Link: " + item.images[0].link);
}   