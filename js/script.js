console.log('Hi! Welcome to my portfolio site')

function menuToggle () {
  var x = document.getElementById ('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// 2.0
var slideIndex = [1, 1, 1, 1, 1]
/* Class the members of each slideshow group with different CSS classes */
var slideId = ['mySlides1', 'mySlides2', 'mySlides3', 'mySlides4', 'mySlides5']
showSlides(1, 0)
showSlides(1, 1)
showSlides(1, 2)
showSlides(1, 3)
showSlides(1, 4)

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no)
}

function showSlides (n, no) {
  var i
  var x = document.getElementsByClassName(slideId[no])
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  x[slideIndex[no] - 1].style.display = 'block'
}
