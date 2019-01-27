$(document).ready(function () {
  $('.btn1').click(function () {
    $('html, body').animate({
      scrollTop: $('#me').offset().top
    }, 500)
  })
  $('.btn2').click(function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 500)
  })

  $('#more').click(function () {
    $('html, body').animate({
      scrollTop: $('#me').offset().top
    }, 500)
  })
  $('#nav1').click(function () {
    $('html, body').animate({
      scrollTop: $('#index').offset().top
    }, 500)
  })

  $('#nav2').click(function () {
    $('html, body').animate({
      scrollTop: $('#me').offset().top
    }, 500)
  })

  $('#nav3').click(function () {
    $('html, body').animate({
      scrollTop: $('#tree').offset().top
    }, 500)
  })

  $('#nav4').click(function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 500)
  })

  $('#nav5').click(function () {
    $('html, body').animate({
      scrollTop: $('#job').offset().top
    }, 500)
  })
})
