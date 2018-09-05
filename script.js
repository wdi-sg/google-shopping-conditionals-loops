//Written by Beng Hui
//Google Shopping - Conditionals & Loops

//Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

/*var itemsCount = 0;

for (var i=0; i < products.items.length; i++){
    if(products.items[i].kind === "shopping#product"){
        itemsCount++
    }
}
    console.log(itemsCount)*/

//It is also stored in "itemsPerPage" and "currentItemCount"

//Print the title of all items with a backorder availability in inventories.

//Location of "backorder" is products.items.product.inventories.availability

/*for (var i=0; i < products.items.length; i++){
    if (products.items[i].product.inventories[0].availability === "backorder"){
        console.log(products.items[i].product.title);
    }
}*/

//Print the title of all items with more than one image link.

for (var i=0; i < products.items.length; i++){
    if (products.items[i].product.images.length > 1){
        console.log(products.items[i].product.title);
    }
}

//Print all "Canon" products in the items (careful with case sensitivity).

//Print all items that have an author name of "eBay" and are brand "Canon".

//Print all the products with their brand, price, and an image link