document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    // console.log('Checkout this JSON! ', data)

// START YOUR CODE FROM HERE AND HERE ONLY
// ---------------------------------------------------------------------
var button = document.getElementById('addCartButton')
button.addEventListener('click', addToCart)

function addToCart () {
  var shoppingList = document.querySelectorAll('#shopping-list li')
  if (!shoppingList.length) {
    alert('Your shopping list is empty')
    return // need to return, so the function stops running
  }

  var cartList = document.querySelector('#cart-list')
  var lastItem = shoppingList[shoppingList.length - 1]
  cartList.appendChild(lastItem)
  }
// ---------------------------------------------------------------------
var items = data.items

function getItemsByBrand (items, brand) {
  var brandItems = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand === brand) {
      brandItems.push(items[i])
    }
  }
  return brandItems
}
//
// var filteredBrand = getItemsByBrand(items, 'Nikon')
//
function getItemsByAuthor (items, author) {
  var authorItems = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name === author) {
      authorItems.push(items[i])
    }
  }
  return authorItems
}

// var finalFilter = getItemsByAuthor(filteredBrand, 'pictureline.com')

var submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', submitInput)

function submitInput () {
  var inputBrand = document.querySelector('#brand').value
  var inputAuthor = document.querySelector('#author').value
  var filterBrand = getItemsByBrand(items, inputBrand)
  var finalFilter = getItemsByAuthor(items, inputAuthor)
  finalFilter.forEach(function (item) {
    var listItem = document.createElement('li')
    listItem.textContent = item.product.title
    shoppingList.appendChild(listItem)
  })
}
// ---------------------------------------------------------------------
// ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    // var items = data.items
    var shoppingList = document.querySelector('#shopping-list')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
