// HOW TO IMPROVE CODE:
// (1) DRY - i repeat the forEach function
// (2) use "requirejs" properly, so i can refer to other js files housing
// the functions, instead of copy and pasting here
// (3) Lay out the Add buttons next to text, rather than on next line

// var functions = require('google-shopping-functions-michelle.js')

// THIS IS NOT WORKING. i ran this in shell, but still "ReferenceError: require is not defined":
// npm install requirejs. I got this output in Shell:
// google-shopping-conditionals-loops@ /Users/mlaimba/wdi-github/code/google-shopping-conditionals-loops
// └── requirejs@2.3.3
// npm WARN google-shopping-conditionals-loops@ No repository field.

// require(['michelle'], function (michelle) {
//   console.log(michelle)
    // michelle.getItemsByBrand()
    // michelle.something()
// })

document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    // console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items
    var shoppingList = document.querySelector('#shopping-list')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    var brandSearchButton = document.body.querySelector('#brandSearchButton')
    brandSearchButton.addEventListener('click', brandSearchButtonCascade)

    var authorSearchButton = document.body.querySelector('#authorSearchButton')
    authorSearchButton.addEventListener('click', authorSearchButtonCascade)

    function brandSearchButtonCascade (event) {
      // grab text input >> insert into and run getItemsByBrand function
      // delete li's in Shopping List >> append each product as li to Shopping List

      // var searchButton = event.target
      var searchInput = document.querySelector('#brandSearchText')
      var searchInputValue = searchInput.value
      // var searchText = searchButton.previousSibling.value
      // THIS ABOVE IS NOT WORKING. THE previousSibling returns the right node,
      // but .value RETURNS UNDEFINED
      // console.log(getItemsByBrand(items, searchInputValue))
      var resultsArr = getItemsByBrand(items, searchInputValue)

      // this below clears the Shopping List of all items
      while (shoppingList.firstChild) {
      shoppingList.removeChild(shoppingList.firstChild);
      }

      resultsArr.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        shoppingList.appendChild(listItem)

        var listButton = document.createElement('input')
        listButton.setAttribute("type", "button")
        listButton.setAttribute("value", "Add")
        listButton.addEventListener("click", addToCart)
        listItem.appendChild(listButton)
      })
    }

    function authorSearchButtonCascade (event) {
      // grab text input >> insert into and run getItemsByAuthor function
      // delete li's in Shopping List >> append each product as li to Shopping List

      var searchInput = document.querySelector('#authorSearchText')
      var searchInputValue = searchInput.value
      var resultsArr = getItemsByAuthor(items, searchInputValue)

      // this below clears the Shopping List of all items
      while (shoppingList.firstChild) {
      shoppingList.removeChild(shoppingList.firstChild);
      }

      resultsArr.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        shoppingList.appendChild(listItem)

        var listButton = document.createElement('input')
        listButton.setAttribute("type", "button")
        listButton.setAttribute("value", "Add")
        listButton.addEventListener("click", addToCart)
        shoppingList.appendChild(listButton)
      })
    }

    function addToCart (event) {
      var buttonToRemove = event.target
      var itemToAddToCart = event.target.parentNode
      var cartList = document.querySelector('#cart-list')
      buttonToRemove.remove()
      cartList.appendChild(itemToAddToCart)
    }

    var getItemsByBrand = function (items, brand) {
      var itemsByBrandArr = items.filter(function(item) {
        return (item.product.brand === brand)
      })
      return itemsByBrandArr
    }

    function getItemsByAuthor (items, author) {
      var itemsByAuthorArr = items.filter (function (item) {
        return (item.product.author.name === author)
      })
      return itemsByAuthorArr
    }

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
