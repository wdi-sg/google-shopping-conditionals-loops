console.log('Part 1');

var count = 0;
var getItemsByBrand = function() {
	for (var i = 0; i < products.items.length; (i++) {
		if (products.items[i].kind === "shopping#product") {
			count += 1;		
		}
	} console.log(count);
}

shopping();
console.log('')

