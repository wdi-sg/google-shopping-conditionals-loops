//Find all result that have kind === "shopping#product"
var count = 0;
var itemsLength = products.items.length;

//loop for each items array
for (i=0; i < itemsLength; i++) {
    var items = products.items[i];
    //check if kind is equal to shopping#product print count
    if (items.kind === "shopping#product")  {

            count ++;

    }       //Print items with backorder availibility
            var inventories = items.product.inventories;
            for (j=0; j < inventories.length; j++ ) {

                    if (inventories[j].availability === 'backorder')    {

                        var title = items.product.title;
                        console.log("Product title with backorder inventories: " + title)
                    }
                }

}   console.log("The total count for items with kind of shopping#product is " + count);


//Print items with more than one image links
var items = products.items;
for(k=0; k < itemsLength; k++){
    var images = items[k].product.images.length;
        if( images > 1) {
            var title = items[k].product.title;
            console.log("Items have more than one image link: " + title);
        }
 }


 //Print all "Canon" products case sensitive
var items = products.items;
for(m=0; m < itemsLength; m++){
    var brand = items[m].product.brand;
        if( brand === "Canon") {
            var title = items[m].product.title;
            console.log("Products by Canon " + title);
        }
 }

 //Print all items that have an author name of "eBay" and are brand "Canon".
var items = products.items;
for(n=0; n < itemsLength; n++){
    var brand = items[n].product.brand;
    var author = items[n].product.author.name;
        if( brand === "Canon" && author === "eBay") {
            var title = items[n].product.title;
            var name = items[n].product.author.name
            console.log("Name of author " + name + " & Name of brand " + title);
        }
 }






//for(j=0; j < inventoriesLength; j++ )  {
//
//    if (inventories[j].availability === "backorder")    {
//
//        var title = items.product.title;
//
//        console.log("Product title with backorder inventories: " + title);
//        }
//}
                    ////Print the title of all items with more than one image link.
                    //var images = items.product.images;
//
//                    //for(k=0; k < itemsLength; k++)  {
//                    //    if (images[k].length === 2)
//                    //        console.log("hello");
                    //}




