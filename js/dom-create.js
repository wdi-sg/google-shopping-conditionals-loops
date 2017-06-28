document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
var items = data.items
console.log(items)

var button = document.getElementById('button')

function addToCart () {
  var shopList = document.querySelectorAll('#shop li')
  var cartList =
  document.getElementById('cart')
  if (shopList.length === 0) {
    alert ('no more items!')
  } else {
  var item = shopList[shopList.length -1]
  cartList.appendChild(item)
  }
}

button.addEventListener('click', addToCart)

// function getItems(inputData){
//   return inputData.items
// }

function getItemsByBrand(items, brand) {
  var itemsByBrand = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand === brand) {
      itemsByBrand.push(items[i].product.title)
    }
  }
  return itemsByBrand
}

function getItemsByAuthor (items, author) {
  var itemsByAuthor = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.includes(author)) {
      itemsByAuthor.push(items[i].product.title)
    }
  }
  return itemsByAuthor
}

var searchBrandButton = document.querySelector('#searchBrand')
var searchAuthorButton = document.querySelector('#searchAuthor')
searchBrandButton.addEventListener('click', searchBrand)
searchAuthorButton.addEventListener('click', searchAuthor)

function searchBrand () {
  var brand = document.querySelector('#brandInput').value
  var brandItems = getItemsByBrand(items, brand)
  var shopList = document.querySelector('#shop')
  console.log(brand)
  console.log(brandItems)
  var cartList =
    document.getElementById('cart')
  brandItems.forEach(function (item) {
    var listItem = document.createElement('li')
    listItem.textContent = item
    shopList.appendChild(listItem)
  })

  // for (i = 0; i < brandItems.length; i++) {
  //     var listItem = document.createElement('li')
  //     listItem.textContent = brandItems[i]
  //     shopList.appendChild(listItem)
  //   }
  }

function searchAuthor () {
  var author = document.querySelector('#authorInput').value
  var authorItems = getItemsByAuthor(items, author)
  var shopList = document.querySelector('#shop')
  console.log(author)
  console.log(authorItems)
  var cartList =
  document.getElementById('cart')
  authorItems.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item
        shopList.appendChild(listItem)
  })
}



})
})
