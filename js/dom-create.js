document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items
    var shoppingList = document.querySelector('.shoppinglist')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    // function for getItemsByBrand
    function getItemsByBrand (items, searchBrand) {
      var arrBrand = []
      for (var k = 0; k < items.length; k++) {
        var brand = items[k].product.brand
        if (searchBrand === brand) {
          arrBrand.push(items[k].product.title)
        }
      }
      // console.log(arrBrand)
      return arrBrand
    }

    // function for getItemsByAuthor
    function getItemsByAuthor (items, searchAuthor) {
      var arrAuthor = []
      for (var x = 0; x < items.length; x++) {
        var author = items[x].product.author.name
        for (var y = 0; y <= searchAuthor.length; y++) {
          if (author.substring(0, y) === searchAuthor) {
            // to extract only 'eBay' out from 'eBay - blah' to be used for comparison with searchAuthor
            arrAuthor.push(items[x].product.title)
          }
        }
      }
      // console.log(arrAuthor)
      return arrAuthor
    }

    var brandButton = document.querySelector('.search1')
    brandButton.addEventListener('click', myFunction1)

    function myFunction1 () {
      var brandList = document.querySelector('#brands')
      var x = document.getElementById('brandSearch').value
      var arr1 = getItemsByBrand(items, x)
      while (shoppingList.firstChild) {
        shoppingList.removeChild(shoppingList.firstChild)
      }
      arr1.forEach(function (element) {
        var listItem = document.createElement('li')
        listItem.textContent = element
        shoppingList.appendChild(listItem)
      })

      // ?what is this?document.getElementById('brands').innerHTML
    }

    var authorButton = document.querySelector('.search2')
    authorButton.addEventListener('click', myFunction2)

    function myFunction2 () {
      var y = document.getElementById('authorSearch').value
      var arr2 = getItemsByAuthor(items, y)
      while (shoppingList.firstChild) {
        shoppingList.removeChild(shoppingList.firstChild)
      }
      arr2.forEach(function (element) {
        var listItem = document.createElement('li')
        listItem.textContent = element
        shoppingList.appendChild(listItem)
      })
    }

    var buttonList = document.querySelector('.addToCart')
    buttonList.addEventListener('click', shiftList)

    function shiftList () {
      var shoppingList = document.querySelectorAll('.shoppinglist li')
      var cartList = document.querySelector('.cartlist')
      if (shoppingList.length === 0) {
        alert('Shopping List is empty')
      } else {
        var lastItem = shoppingList[shoppingList.length - 1]
        cartList.appendChild(lastItem)
      }
    }

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})

// CLASSWORK
// // UPDATING EXISTING ELEMENT
// // targets the p element
// var p = document.querySelector('p')
//
// // updates the p text content property
// // p.textContent = 'My Shopping list descriptions'
//
// // add button
// var buttonParagraph = document.querySelector('.paragraph')
// buttonParagraph.addEventListener('click', paraCreator)
//
// // anonymous functions
// // button.addEventListener('click', function() {
// //   alert('button is clicked')
// // })
// //
// // create p in body
// function paraCreator () {
//   // CREATING NEW ELEMENT
//   // create new paragraph
//   var newP = document.createElement('p')
//
//   newP.textContent = 'new paragraph'
//
//   // target the parent
//   var body = document.body
//   body.appendChild(newP)
// }
// // //
// // // create list in UL
// // //
// // var buttonList = document.querySelector('.list')
// // buttonList.addEventListener('click', ulList)
// //
// // function ulList() {
// //   var newList = document.createElement('li')
// //
// //   newList.textContent = 'new list'
// //
// //   var ul = document.querySelector('ul')
// //   ul.appendChild(newList)
// // }
//
// var buttonList = document.querySelector('.addToCart')
// buttonList.addEventListener('click', shiftList)
//
// function shiftList () {
//   var shoppingList = document.querySelectorAll('.shoppinglist li')
//   var cartList = document.querySelector('.cartlist')
//   if (shoppingList.length === 0) {
//     alert('Shopping List is empty')
//   } else {
//     var lastItem = shoppingList[shoppingList.length - 1]
//     cartList.appendChild(lastItem)
//   }
// }
