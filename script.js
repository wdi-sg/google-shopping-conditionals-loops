/**
 * This program demonstrates how to access JSON object.
 * @author Liang Xin Chloe
 */

var items = products.items;;
var count = 0;
var result = [];
var i;
var product;
var inventories;
var availability;
var images;
var brand;
var authorName;
var price;
var imageLink;
var condition;
var searchBy;
var searchValue;

// Go through the items and find all results that have kind of shopping#product.
for (i = 0; i < items.length; i++) {

  if (items[i].kind === 'shopping#product') {
    console.log(items[i]);
    count++;
  }
}

/**
 * This count information is also stored in:
 * products.currentItemCount,
 * products.itemsPerPage
 */
console.log(count);

// Print the title of all items with a backorder availability in inventories.
for (i = 0; i < items.length; i++) {
  product = items[i].product;
  inventories = product.inventories;
  availability = inventories[0].availability;

  if (availability === 'backorder') {
    console.log(product.title);
  }
}

// Print the title of all items with more than one image link.
for (i = 0; i < items.length; i++) {
  product = items[i].product;
  images = product.images;

  if (images.length > 1) {
    console.log(product.title);
  }
}

// Print all "Canon" products in the items.
for (i = 0; i < items.length; i++) {
  product = items[i].product;
  brand = product.brand.toLowerCase();

  if (brand === 'canon') {
    console.log(items[i]);
  }
}

// Print all items that have an author name of "eBay" and are brand "Canon".
for (i = 0; i < items.length; i++) {
  product = items[i].product;
  brand = product.brand.toLowerCase();
  authorName = product.author.name.toLowerCase();

  if (authorName.indexOf('ebay') !== -1 && brand === 'canon') {
    console.log(items[i]);
  }
}

// Print all the products with their brand, price, and an image link.
for (i = 0; i < items.length; i++) {
  product = items[i].product;
  brand = product.brand;
  price = product.inventories[0].price;
  imageLink = product.images[0].link;

  console.log('Brand: ' + brand);
  console.log('Price: ' + price);
  console.log('Image link: ' + imageLink);
  console.log('\n');
}

// Prompt the user what kind of search they want to do - search by brand or condition.
searchBy = prompt('Would you like to search by brand or by condition? (b/c)');

if (searchBy) {
  searchBy = searchBy.toLowerCase();

  if (searchBy === 'b') {

    // Prompt the user to put in their search brand.
    searchValue = prompt('Which brand are you interested in?');

    if (searchValue) {
      searchValue = searchValue.toLowerCase();

      for (i = 0; i < items.length; i++) {
        product = items[i].product;
        brand = product.brand.toLowerCase();

        if (brand === searchValue) {
          result.push(items[i]);
          console.log(items[i]);
        }
      }

      // Print out some special error text if there were no results.
      if (!result.length) {
        console.log('Sorry, nothing found.');
      }
    }
  } else if (searchBy === 'c') {

    // Prompt the user to put in their search condition (new/used).
    searchValue = prompt('Which condition are you interested in? (new/used)');

    if (searchValue) {
      searchValue = searchValue.toLowerCase();

      if (searchValue === 'new') {
        for (i = 0; i < items.length; i++) {
          product = items[i].product;
          condition = product.condition;

          if (condition === 'new') {
            result.push(items[i]);
            console.log(items[i]);
          }
        }

        // Print out some special error text if there were no results.
        if (!result.length) {
          console.log('Sorry, nothing found.');
        }
      } else if (searchValue === 'used') {
        for (i = 0; i < items.length; i++) {
          product = items[i].product;
          condition = product.condition;

          if (condition === 'used') {
            result.push(items[i]);
            console.log(items[i]);
          }
        }

        // Print out some special error text if there were no results.
        if (!result.length) {
          console.log('Sorry, nothing found.');
        }
      } else {
        console.log('Invalid input.');
      }
    }
  } else {
    console.log('Invalid input');
  }
}
