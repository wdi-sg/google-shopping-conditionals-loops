//Store the entire products.items array into a variable for easy use later
var productArray = products.items

//shoppingProductCount is used for the earlier part of the assignment. searchResultsCount is used for indexing of the search results found by user
var shoppingProductCount = 0
var searchResultsCount = 0

//These fields are left null so that the code can check whether to search by brand or use condition
var userInputBrand = null
var usedOrNew = null
var brandOrCondition = null

//This search results string is a constant to be used for later if products are found
var searchResultsString = "We found the following products for you: \n\n"

//This function is explained at the end
getUserInputs()

for (var product in productArray){
  var actualProduct = productArray[product]
  // var type = productArray[product].kind
  // var inventoryAvailability = productArray[product].product.inventories[0].availability
  var name = actualProduct.product.title
  // var seller = productArray[product].product.author.name
  var brand = actualProduct.product.brand
  var price = productArray[product].product.inventories[0].price
  // var imageArray = productArray[product].product.images
  var condition = actualProduct.product.condition

  // For each product in the product array, every time a "shopping product" is found, add 1 count
  // The total number of shopping products can also be found in products.currentItemCount
  // if (type === "shopping#product"){
  //     shoppingProductCount++
  // }

  // Check for backorders by using a conditional with the productInventoryAvailability
  // if (inventoryAvailability === "backorder"){
  //   console.log(name + " is a backorder item.")
  // }

  // Check for whether the number of product images is greater than 1
  // if (imageArray.length >  1){
  //   console.log(name + " has more than 1 product image.")
  // }

  // Check for whether the product name contains "Canon"
  // if (name.includes("Canon")){
  //   console.log(name)
  // }

  // Check for Canon products sold by eBay
  // if (seller.includes("eBay") && brand === "Canon"){
  //   console.log(productArray[product])
  // }

  // // Print products with their name, brand, price and image links.
  // console.log(name + " is a " + brand + " product. It costs $" + price + ".")
  // if (imageArray.length > 0){
  //   console.log(name + " has the following images: ")

  //   for (let i = 0; i < imageArray.length; i++){
  //     console.log(imageArray[i].link)
  //   }
  // }

  //Determine whether to search by condition or by brand
  if (userInputBrand === null){
    //searchByCondition() builds the string to be delivered as searchResultsString later
    searchByCondition()
  } else if (usedOrNew === null){
    //searchByBrand() builds the string to be delivered as searchResultsString later
    searchByBrand()
  }
}

//If no results are found, give an alert. List the items in order if there are results.
if (searchResultsCount === 0){
  alert("We didn't find nuthin', kiddo!")
} else {
  alert(searchResultsString)
}

function searchByCondition(){
  if (condition === usedOrNew){
    searchResultsCount++
    searchResultsString += searchResultsCount + ". " + name + " - $" + price + "\n"
  }
}

function searchByBrand(){
  if (brand === userInputBrand){
    searchResultsCount++
    searchResultsString += searchResultsCount + ". " + name + " - $" + price + "\n"
  }
}

function getUserInputs(){
  brandOrCondition = prompt("Do you be wantin' to search by brand or by condition?")
  checkBrandOrCondition(brandOrCondition)
}

function checkBrandOrCondition(brandOrCondition){
  if (brandOrCondition === "brand"){
    userInputBrand = prompt("DAT BE GOOT TO HEAR... what product brand are you looking for, jolly boy?")
    checkBuyerBrand(userInputBrand)
  } else if (brandOrCondition === "condition"){
    usedOrNew = prompt("WELL OKIE THENNNNN. You lookin' for used or new products?")
    checkBuyerRequirements(usedOrNew)
  } else {
    brandOrCondition = prompt("NNOIIIO PLS CHOOSE BRAND OR CONDITION SEARCHES!")
    checkBrandOrCondition(brandOrCondition)
  }
}

function checkBuyerBrand(userInputBrand){
  if (userInputBrand === "" || !userInputBrand){
    userInputBrand = prompt("AYY YE GOTTA INPUT A BRAND 'ERE!")
    checkBuyerBrand(userInputBrand)
  }
}

function checkBuyerRequirements(usedOrNew){
  if (usedOrNew === "" || !(usedOrNew === "used" || usedOrNew === "new")){
    usedOrNew = prompt("NAYYY YOU GOTTA CHOOSE USED OR NEW PRODUCTS ONLY!")
    checkBuyerRequirements(usedOrNew)
  }
}
