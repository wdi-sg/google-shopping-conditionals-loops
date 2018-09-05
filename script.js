/*
Deliverables
Use the product search result in your file to find the following results. Note that you may want to comment out your solutions as you solve them, to avoid a mess of output in the console.

1.) Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
2.) Print the title of all items with a backorder availability in inventories.
3.) Print the title of all items with more than one image link.
4.) Print all "Canon" products in the items (careful with case sensitivity).
5.) Print all items that have an author name of "eBay" and are brand "Canon".
6.) Print all the products with their brand, price, and an image link
*/
/*PART 1
var productItems= products.items
var count=0;
for (i=0;i<productItems.length;i++)
{
	if(productItems[i].kind=="shopping#product")
		{count++;}
}
console.log(count);*/
/*PART 2
var productItems=products.items;
var count=0;

for(i=0;i<productItems.length;i++)
{

	if(products.items[i].product.inventories[0].availability == "backorder")
	{
	
		console.log(products.items[i].product.title);
	}
}
*/
/*Part 3
var productItems=products.items;
for(i=0;i<productItems.length;i++)
{
	if(products.items[i].product.images.length>1)
	console.log(products.items[i].product.title)
}*/
/* Part 4
var productItems=products.items;
for(i=0;i<productItems.length;i++)
{
	if(products.items[i].product.brand == "Canon")
	{
		console.log(products.items[i].product.title)
	}
}
*/
/* Part 5
var productItems=products.items;
for(i=0;i<productItems.length;i++)
{
	if(products.items[i].product.author.name == "eBay" && products.items[i].product.brand == "Canon")
	{
		console.log(products.items[i].product.title)
	}
}
/*Part 6
var productItems=products.items;
for(i=0;i<productItems.length;i++)
{
	
		console.log(products.items[i].product.brand +" "+ products.items[i].product.inventories[0].price +" "+ products.items[0].product.images[0].link)

}
*/