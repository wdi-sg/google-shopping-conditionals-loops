//1.) Go through the `items` and find all results that have `kind` of `shopping#product`. = 25
//Print the count of these results. = 25

var count = 0;

for (var i = 0 ; i < products.items.length; i ++) {
	if (products.items[i].kind == 'shopping#product') {
		count++;
	}
}
 console.log(count)

//Where else is this count information stored in the search results?
//"itemsPerPage": 25,
//"currentItemCount": 25,
