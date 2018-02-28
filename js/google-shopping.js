var data = require('../products.js');

// Write your solutions below

/*----------Question 1----------*/
//1.) Go through the items and find all results that have kind of shopping#product.Print the count of these results.Where else is this count information stored in the search results ?

const findShoppingProductCount = (data) => {
    // initialize the items arrary and assign to variable
    const dataItems = data.items;
    let shoppingProductCount = 0;
    dataItems.forEach(item => {
        if(item.kind === 'shopping#product') {
            shoppingProductCount++;
        }
    });
    console.log(shoppingProductCount);
    return shoppingProductCount;
}

// findShoppingProductCount(data);

    // it is already store in itemsPerPage and currentItemCount

const easyFindShoppingProductCount = (data) => {
    console.log(data.currentItemCount);
    return data.currentItemCount;
}

// easyFindShoppingProductCount(data);


/*----------Question 2----------*/
//2.) Print the title of all items with a backorder availability in inventories.

const findBackorderAvailability = (data) => {
    let dataItems = data.items;
    let backorderItems = [];
    dataItems.forEach(item => {
        if(item.product.inventories[0].availability === 'backorder'){
            backorderItems.push(item.product.title);
        }
    });
    return backorderItems;
}

// findBackorderAvailable(data);


/*----------Question 3----------*/
//3.) Print the title of all items with more than one image link.
const findItemsImageAboveTwo = (data) => {
    let dataItems = data.items;
    let imageCountAboveTwoItems = [];
    dataItems.forEach(item => {
        let numOfImageLinks = item.product.images.length;
        if(numOfImageLinks > 1){
            imageCountAboveTwoItems.push(item.product.title);
        }
    });
    return imageCountAboveTwoItems;
}

// findItemsImageAboveTwo(data);


/*----------Question 4----------*/
//4.) Print all "Canon" products in the items(careful with case sensitivity).
const findCanonProducts = (data) => {
    let dataItems = data.items;
    let canonItems = [];
    dataItems.forEach(item => {
        let itemBrand = item.product.brand.toLowerCase();
        if(itemBrand === 'canon'){
            canonItems.push(item);
        }
    });
    return canonItems;
}

// findCanonProducts(data);


/*----------Question 5----------*/
//5.) Print all items that have an author name of "eBay" and are brand "Canon".
const findEbayAuthorAndCanonItems = (data) => {
    let dataItems = data.items;
    let ebayAndCanonItems = [];
    dataItems.forEach(item => {
        // console.log(item.product.author.name.toLowerCase().includes("ebay"));
        let itemAuthor = item.product.author.name.toLowerCase();
        let itemBrand = item.product.brand.toLowerCase();
        if(itemAuthor.includes('ebay') && itemBrand === 'canon'){
            ebayAndCanonItems.push(item);
        }
    });
    return ebayAndCanonItems;
}

// findEbayAuthorAndCanonItems(data);


/*----------Question 6----------*/
//6.) Print all the products with their brand, price, and an image link
const printProductInfo = (data) => {
    let dataItems = data.items;
    let itemInfo = [];
    dataItems.forEach(item => {
        // console.log(item.product.images);
        let obj = {
            brand: item.product.brand,
            price: item.product.inventories[0].price,
            imageLink: item.product.images
        };
        itemInfo.push(obj);
    });
    console.log(itemInfo);
    return itemInfo;
}

// printProductInfo(data);
