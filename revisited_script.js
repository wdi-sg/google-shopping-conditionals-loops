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
 var productTitle = productItems.product.title;

 for (let i=0; i<productItems.length; i++) {
 	if (productItems[i].product.inventories[1] === "backorder") {
 		console.log(productTitle);
 	}
 }

/* 
3. Print all "Canon" products in the items (careful with case sensitivity).
	- Requires creating another for loop and iterating through all items in the array.
	- Final condition is to pick out all products with brand === Canon. 
	- Print the title of all these products. */


 

