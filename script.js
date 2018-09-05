//Written by Beng Hui
//Google Shopping - Conditionals & Loops

//Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

var itemsCount = 0;

for (var i=0; i < products.items.length; i++){
    if(products.items[i].kind === "shopping#product"){
        itemsCount++
    }
}
    console.log(itemsCount)

//It is also stored in "itemsPerPage" and "currentItemCount"
