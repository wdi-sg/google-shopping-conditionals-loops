// DELIVERABLE 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/*

var matchArray = [];

//create a function to find a match 
function findObjectByKey(key, value) {
    for (var i = 0; i < productList.length; i++) {
        if (productList[i][key] === value) {

//store any matches into the array
		matchArray.push(productList[i]);
        }
    }
    return null;
}

//search for the value in the array
var obj = findObjectByKey('kind', 'shopping#product');

//print the number of matches 
console.log('The number of matches for "shopping#product" is ' + matchArray.length);

*/


// DELIVERABLE 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/*

//create a function to find a match 
function findObjectByValue(value) {
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].product.inventories[0].availability === value) {

//print the title of any matches
		console.log(productList[i].product.title);
        }
    }
    return null;
}

//call the function
findObjectByValue('backorder');

*/


// DELIVERABLE 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/*

//create a function iterate through list 
function multipleImageTitle() {
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].product.images.length>1) {

//print the title of any matches
		console.log(productList[i].product.title);
        }
    }
    return null;
}

//call the function
multipleImageTitle();

*/


// DELIVERABLE 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/*

//create a function to find a match 
function findObjectByValue(value) {
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].product.brand === value) {

//print the title of any matches
		console.log(productList[i]);
        }
    }
    return null;
}

//call the function
findObjectByValue('Canon');

*/

// DELIVERABLE 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/*

//create a function to find a match 
function findObjectByValue(authorName, brandName) {
    for (var i = 0; i < productList.length; i++) {
        if ((productList[i].product.author.name.indexOf(authorName) >= 0) && (productList[i].product.brand.indexOf(brandName) >= 0)) {

//print the title of any matches
		console.log(productList[i]);
        }
    }
    return null;
}

//call the function
findObjectByValue('eBay', 'Canon');

*/


// DELIVERABLE 6 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


/*

console.log(productList[1]);

function printBrandPriceImage() {
    for (var i = 0; i < productList.length; i++) 
		console.log(productList[i].product.brand);
		console.log(productList[i].product.inventories[0].price);
		console.log(productList[i].product.images);
};

printBrandPriceImage();

*/










