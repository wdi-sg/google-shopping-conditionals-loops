function deliverablesOne(q1) {

	 var count = 0;

	for(var i = 0; i < q1.items.length; i++) { 
		if(q1.items[i].kind === "shopping#product") {
			count++;
		};
	};

	console.log(count);


};

deliverablesOne(products);


function deliverablesTwo(q2) {

	for(var i = 0; i < q2.items.length; i++) {
		if(q2.items[i].product.inventories[0].availability === "backorder") {
			console.log(q2.items[i].product.title);
		};
	};
};

deliverablesTwo(products);


function deliverablesThree(q3) {

for(var i = 0; i < q3.items.length; i++) {
	if(q3.items[i].product.images.length > 1){
		console.log(q3.items[i].product.title);
		};
	};
};

deliverablesThree(products);


function deliverablesFour(q4) {

for(var i = 0; i < q4.items.length; i++) {
	if(q4.items[i].product.images.length > 1) {
		console.log(q4.items[i].product.title);
		};
	};
};

deliverablesFive(products);

function deliverablesFive(q5) {

for(var i = 0; i < q5.items.length; i++) {
	if(q5.items[i].product.brand === "Canon") {
		console.log(q5.items[i].product.title);
		};
	};
};

deliverablesFive(products);


function deliverablesSix(q6) {

for (var i = 0; i < q6.items.length; i++) {
console.log("Brand: " + q6.items[i].product.brand);
console.log("Price: $"  + q6.items[i].product.inventories[0].price);
console.log("Image: " + q6.items[i].product.images[0].link);
	};
};

deliverablesSix(products);
