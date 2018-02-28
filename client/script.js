const itemsArray = products.items;

// Utility functions
// 1. clear(): clears the output on the page
// 2. print(text): outputs text to the page
function clear () {
    document.getElementById('output').innerHTML = "";
}
function print (text) {
    document.getElementById('output').innerHTML += text + "<br>";
};

// Solutions
function countByKind (kind) {
    clear();
    let count = 0;
    itemsArray.forEach(item => (item.kind == kind) ? count++ : count);
    print(count);
}

function searchByAvailability (availability) {
    clear();
    itemsArray.forEach(item => {if (item.product.inventories[0].availability == availability) {
        print(item.product.title);
    }}); 
}

function searchByImageNumber (lowerThreshold) {
    clear();
    itemsArray.forEach(item => {if (item.product.images.length > lowerThreshold) {
        print(item.product.title);
    }}); 
}

function searchByBrand (brand) {
    clear();
    let searchFilter = brand.toLowerCase();
    itemsArray.forEach(item => {if (item.product.brand.toLowerCase().indexOf(searchFilter) >= 0) {
        print(item.product.title);
    }}); 
}

function searchByAuthorNameAndBrand (author, brand) {
    clear();
    let searchFilter_Author = author.toLowerCase();
    let searchFilter_Brand = brand.toLowerCase();
    itemsArray.forEach(item => {if (item.product.brand.toLowerCase().indexOf(searchFilter_Brand) >= 0 && item.product.author.name.toLowerCase().indexOf(searchFilter_Author) >= 0) {
        print(item.product.title);
    }}); 
}

function printProductBrandPriceImglink () {
    clear();
    itemsArray.forEach(item => {
        print("Brand: " + item.product.brand + "<br>Price: " + item.product.inventories[0].price + "<br>Image link: <a href='" + item.product.images[0].link + "'>" + item.product.images[0].link + "</a><br><br>");
    })
}

// countByKind("shopping#product");
// searchByAvailability("inStock");
// searchByImageNumber(1);
// searchByBrand("Canon");
// searchByAuthorNameAndBrand('eBay', 'Canon');
// printProductBrandPriceImglink();
