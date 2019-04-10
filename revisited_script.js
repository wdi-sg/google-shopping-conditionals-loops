/* THIS ASSIGNEMNT IS ALL ABOUT USING LOOPS TO ACCESS DATA */

/* Deliverable ===
1. Create a loop that iterates through all the 'items' and finds those that have 'kind' of 'shopping#product'. Print these results. 
	- Requires me to create a for loop to iterate through the length of the array.
 	- The final condition is that it should pick out the relevant results and print them in the console. */

 const productItems = products.items
 var shoppingProd = 0;

 for (let i=0; i<productItems.length; i++) {
 	if (productItems[i].kind === "shopping#product") {
 		shoppingProd++;
 	}
 }

console.log(shoppingProd);
 
 /* 
 2. Print the title of all items with a 'backorder' availability in 'inventories'
 	- Requires creating a for loop again that iterates though the array.
 	- It should then pick out all the items that have inventories === backorder.
 	- Finally it should print the title of these items. */
 
 var backorderProd = [];
 var count = 0;

 for (let i=0; i<productItems.length; i++){
 	if (productItems[i]["product"]["inventories"][0]["availability"] === "backorder") {
 		backorderProd.push(productItems[i]["product"]["title"]);
 	}
 }

 console.log(backorderProd);

/*
3. Print title of all items with more than one image link.
	- Requires a for loop to iterate through all the products.
	- Final condition is to identify all products where image link > 1.
	- Print the title of all qualifying products. */

var prodImgLink = [];

for (let i=0; i<productItems.length; i++) {
	if (productItems[i]["product"]["images"].length > 1) {
		prodImgLink.push(productItems[i]["product"]["title"]);
	}
}

console.log(prodImgLink);

/* 
4. Print all "Canon" products in the items (careful with case sensitivity).
	- Requires creating another for loop and iterating through all items in the array.
	- Final condition is to pick out all products with brand === Canon. */

var canonProd = [];

for (let i=0; i<productItems.length; i++) {
	if (productItems[i]["product"]["brand"] === "Canon") {
		canonProd.push(productItems[i]);
	}
}

console.log(canonProd);

/*
5. Print all items which have author name === eBay && brand === Canon.
	- Requires a for loop.
	- Final condition is similar to above, except, extra condition in the if statement && author === eBay. */

var eBayCanonProd = [];

for (let i=0; i<productItems.length; i++) {
	if (canonProd && productItems[i]["product"]["author"]["name"] === "eBay") {
		eBayCanonProd.push(productItems[i]);
	}
}

console.log(eBayCanonProd);

/*
6. Print all products with their brand, name, and an image link.
	- Still requires a for loop to iterate througth all products and pick out the relevant info. 
	- Probably best to start by setting variables for identifying brand, name and image liink(s). */

	var productInfo = [];

for (let i=0; i<productItems.length; i++) {
	
	let prodBrand = productItems[i]["product"]["brand"];
	let prodName = productItems[i]["product"]["title"];
	let prodImg = productItems[i]["product"]["image"];

	productInfo.push(prodBrand, prodName, prodImg);
}

console.log(productInfo);

/* FURTHER ===
1. Prompt the user for the product brand and print only those products.
	- Start by using prompt() function to get the necessary input from the user. 
	- Next, depending on the user input, iterate through the products and retrieve them.
	- Iteration through products is possible using a for loop.
	- Finally, once all the relevant products are identified, then print their titles. */

var userInput  = prompt("Enter the brand you would like to seach for");
var userReqRes = [];

for (let i=0; i<productItems.length; i++) {
	let prodBrand = productItems[i]["product"]["brand"];
	if (userInput.toLowerCase() == prodBrand.toLowerCase()) {
		userReqRes.push(productItems[i]["product"]["title"]);
	}
}

console.log(userReqRes);

/* 
2. Prompt the user if they want to see only new or used items.
	- Same basic logic as before. i.e. for loop to iterate through everything. 
	- But here the prompt is whether the user wants to see old/new items. Requires a prompt() function.
	- Depending on the user's choice, results print what the user requests. */

var userNewUsed = prompt("Please type 'new' or 'used' depending on the type of products you are interested in");
var userChoice = [];

for (let i=0; i<productItems.length; i++) {
	if (userNewUsed.toLowerCase() === "new") {
		userChoice.push(productItems[i]);
	} else if (userNewUsed.toLowerCase() === "used") {
		userChoice.push(productItems[i]);
	} else {
		userNewUsed;
	}
}

console.log(userChoice);

/*
3. Prompt the user what kind of search they want to do- search by brand or search by condition. 
Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand). 
	- Create two prompts. So one leads into the other. 
	- First one should be whether they want to search by brand || condition.
	- Second depedning on the first choice should prompt user to enter a relevant search value depending on their initial choice. */

const userFirstChoice = prompt("Enter 'brand' or 'condition' depending on the type of search you would like to do");
var userProd = [];

if (userFirstChoice.toLowerCase() == "brand") {
	var userBrandInput = prompt("Please enter the relevant brand name");
	for (i=0; i<productItems.length; i++) {
		if (userBrandInput.toLowerCase() == productItems[i]["product"]["brand"]) {
			userProd.push(productItems[i]["product"]["title"]);
		}
	}
	console.log(userProd);
} else if (userFirstChoice.toLowerCase() == "condition") {
	var userConditionInput = prompt("Please type 'new' or 'used' depending on the type of search you would like to do");
	for (let i=0; i<productItems.length; i++) {
		if (userConditionInput.toLowerCase() === "new") {
			userChoice.push(productItems[i]["product"]["title"]);
		} else (userConditionInput.toLowerCase() === "used") {
			userChoice.push(productItems[i]["product"]["title"]);
		}
	}
	console.log(userChoice);
} else {
	alert("Sorry, nothing found. Please try again.")
}


 

