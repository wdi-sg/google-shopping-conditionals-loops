//target the p element

var p = document.querySelector('p')
var body = document.body
var ul = document.querySelector('ul')
var button = document.querySelector('button')
var li = document.querySelector('li')
var list = document.querySelector('ul').querySelector('li')

// itemList = ['Nikon Camera G2000', 'Canon D30', 'Leica X70']
//
// function itemListHtml(arr) {
//   for (var i = 0; i < itemList.length; i++) {
//   var list = itemList[i]
//   }
//   return list
// }
//
// ul.textContent = itemListHtml ()

function addToCart () {
  var shoppingList = document.querySelectorAll('#shopping-list li')
}

function paraCreator() {
  var newP = document.createElement('p')
  newP.textContent = 'New Paragraph'
  body.appendChild(newP)
}

function ulCreator() {
  var newLi = document.createElement('li')
  newLi.textContent = 'New List'
  ul.appendChild(newLi)
}

function cartAdder() {
  var newLi = document.createElement('li')
}

// button.addEventListener('click', ulCreator)
// button.addEventListener('click', paraCreator)
