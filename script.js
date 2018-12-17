var items = products.items;

// Count of items that that have `kind` of `shopping#product

// var count = 0;

// for (var i=0; i<items.length; i++)
// 	{
// 		for (var key in products.items)
// 	    {	
// 		     if (products.items[key] === "shopping#product")
// 		     {    
// 		     count+1;
// 		     }	    
//      }console.log(count);
// 	}

// Print the `title` of all items with a `backorder` availability in `inventories`

// for (var i=0; i<items.length; i++)
//     {
// 		var itemsInventory = items[i].product.inventories;		 
// 		for (var j=0; j<itemsInventory.length; j++) 
//      	{
// 			 if (itemsInventory[j].availability === "backorder")
// 			 {
// 				console.log("Product Title with availability 'backorder' is :" + " " + items[i].product.title);

// 			 }
     			
//      	}
// 	}

// Print the `title` of all items with more than one image link.

// var imageCount = 0;
// for (var i=0; i<items.length; i++)
//     {
// 		var itemsImages = items[i].product.images;		 
// 		if (itemsImages.length > 1)
// 		{
// 		console.log("Product Title with more than one image link :" + " " + items[i].product.title);
// 		}  	    
//     }
 
// Print all "Canon" products in the items (careful with case sensitivity).

// for (var i=0; i<items.length; i++)
//     {
// 		var itemsBrand = items[i].product.brandtoLowerCase();		 
// 		if (itemsBrand === "canon")
// 			{
// 			console.log("Item with brand 'Canon' is :" + " " + items[i].product.title);
// 			}
     			
// 	}

// Print all `items` that have an author name of "eBay" and are brand "Canon".

// for (var i=0; i<items.length; i++)
//     {
// 	    if (items[i].product.author.name.toLowerCase() === "ebay" && items[i].product.brand.toLowerCase() === "canon")
// 			{
// 			console.log("Item having an author name of 'eBay' and are brand 'Canon' :" + " " + items[i].product.title + " " + items[i].product.author.name + " " + items[i].product.brand);
// 			}
     			
// 	}

// Print all the products with their **brand**, **price**, and an **image link**
	
// for (var i=0; i<items.length; i++)
//     {
// 		console.log("ITEM BRAND is :" + " " + items[i].product.brand + " " + "PRICE is:" + " " + items[i].product.inventories[0].price + " " + "IMAGELINK is:" + " " + items[i].product.images[0].link);
		     			
// 	}
	






	