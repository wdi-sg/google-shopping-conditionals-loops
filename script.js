// Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

var productItems = products.items;
var count = 0; // count of shopping#product
var productPrice;
var productCurrency;
var actualPrice;

for (var i=0; i < productItems.length; i++){
    if (productItems[i].kind === "shopping#product"){
        count += 1;
    }
}

console.log("total sum of shopping#product: " + count);


// Print the title of all items with a backorder availability in inventories.


for (var j=0; j < productItems.length; j++){
    var productDetails = productItems[j].product;
    var productInventory = productDetails.inventories;

    for (var k=0; k < productInventory.length; k++){
        productPrice = productInventory[k].price;
        productCurrency = productInventory[k].currency;
        actualPrice = productPrice + productCurrency;

        if (productInventory[k].availability === "backorder") {
        //     console.log(productDetails.title + " is on backorder.");

        }
    }

// Print the title of all items with more than one image link.

    var productImages = productDetails.images;
    var countImages = 0;

    for (var m=0; m < productImages.length; m++){
        if (productImages[m].link) {
            countImages += 1;
         }
    }
    if (countImages > 0) {
        // console.log(productDetails.title + " has more than 1 image.");
    }


// Print all "Canon" products in the items (careful with case sensitivity).


    var productBrand = productDetails.brand;

    if (productBrand === "Canon"){
        // console.log(productDetails.title + " is from Canon.");
    }


// Print all items that have an author name of "eBay" and are brand "Canon".


    var authorName = productDetails.author.name;
    var authorNameArray = authorName.split(" - ");

    for (var p = 0; p < authorNameArray.length; p++) {
        if (authorNameArray[p] === "eBay" && productBrand === "Canon"){
            // console.log(productDetails.title + " is from Canon and sold on eBay.")
        }
    }


// Print all the products with their brand, price, and an image link

    if (countImages == 0){
        console.log("Product Name: " + productDetails.title + "; Brand:  " + productBrand + "; Price: " + actualPrice + "; Image Link: nil");
    } else {
        console.log("Product Name: " + productDetails.title + "; Brand:  " + productBrand + "; Price: " + actualPrice + "; Image Link: " + productImages[0].link);
    }
}
