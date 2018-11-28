var productArray = products.items
var shoppingProductCount = 0

for (var product in productArray){
  var type = productArray[product].kind
  var inventoryAvailability = productArray[product].product.inventories[0].availability
  var name = productArray[product].product.title
  var seller = productArray[product].product.author.name
  var brand = productArray[product].product.brand
  var price = productArray[product].product.inventories[0].price
  var imageArray = productArray[product].product.images

  // For each product in the product array, every time a "shopping product" is found, add 1 count
  // The total number of shopping products can also be found in products.currentItemCount
  if (type === "shopping#product"){
      shoppingProductCount++
  }

  // Check for backorders by using a conditional with the productInventoryAvailability
  if (inventoryAvailability === "backorder"){
    console.log(name + " is a backorder item.")
  }

  // Check for whether the number of product images is greater than 1
  if (imageArray.length >  1){
    console.log(name + " has more than 1 product image.")
  }

  // Check for whether the product name contains "Canon"
  if (name.includes("Canon")){
    console.log(name)
  }

  // Check for Canon products sold by eBay
  if (seller.includes("eBay") && brand === "Canon"){
    console.log(productArray[product])
  }

  // Print products with their name, brand, price and image links.
  console.log(name + " is a " + brand + " product. It costs $" + price + ".")
  if (imageArray.length > 0){
    console.log(name + " has the following images: ")

    for (let i = 0; i < imageArray.length; i++){
      console.log(imageArray[i].link)
    }
  }
}

