# Google Shopping - Conditionals and Loops

We'll be using a file represented as **JSON** for this assignment. JSON is a standard for formatting data, and it's a common format you'll see throughout your web development career. Even more important will be parsing JSON.

This large object is in the products js file. It is the kind of object you would really recieve from google shopping.


## Getting Started
Create a `script.js` file and an index.html file with the same boiler plate code as before.

Copy the `products.js` file into that directory.

In the html file, include the script `products.js`. Remember that the order of the script tags matters.

Write your functions in the `js/google-shopping.js` file. Run your functions in your `script.js` file.

## Deliverables

Use the product search result in your file to find the following results. Note that you may want to comment out your solutions as you solve them, to avoid a mess of output in the console.

1.) Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

2.) Print the `title` of all items with a `backorder` availability in `inventories`.

3.) Print the `title` of all items with more than one image link.

4.) Print all "Canon" products in the items (careful with case sensitivity).

5.) Print all `items` that have an author name of "eBay" and are brand "Canon".

6.) Print all the products with their **brand**, **price**, and an **image link**


## Hints
* install a sublime package if you want to be able to see the object more clearly: [https://packagecontrol.io/packages/SyntaxFold](https://packagecontrol.io/packages/SyntaxFold)

* it allows you to "fold" your code to see the format of it.

* If you type in the variable name `products` in the google chrome developer console, you can see and inspect all the items in the product object.
* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #5
* Documentation
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
