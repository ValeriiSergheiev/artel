$(document).ready(function(){

  /*  Ticket Table */
  var headertext = [],
  headers = document.querySelectorAll("#tickets th"),
  tablerows = document.querySelectorAll("#tickets th"),
  tablebody = document.querySelector("#tickets tbody");

  for(var i = 0; i < headers.length; i++) {
    var current = headers[i];
    headertext.push(current.textContent.replace(/\r?\n|\r/,""));
  }
  for (var i = 0, row; row = tablebody.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
      col.setAttribute("data-th", headertext[j]);
    }
  }
  /*  End Ticket Table */

  /* Responsive menu - my plugin  */
  $(window).resize(function(){

    if ($(window).width() <= 740){
      //var n = 6;
      $('.main-menu li:nth-child(6)').css('display', 'none');
      $('.submenu li:nth-child(6)').css('display', 'block');
    } else {
      $('.main-menu li:nth-child(6)').css('display', 'inline-block');
      $('.submenu li:nth-child(6)').css('display', 'none');
    }

    if ($(window).width() <= 650){
      //n = n -1; ('+n+')
      $('.main-menu li:nth-child(5)').css('display', 'none');
      $('.submenu li:nth-child(5)').css('display', 'block');
    } else {
      //n = n +1;
      $('.main-menu li:nth-child(5)').css('display', 'inline-block');
      $('.submenu li:nth-child(5)').css('display', 'none');
    }

    if ($(window).width() <= 580){
      $('.main-menu li:nth-child(4)').css('display', 'none');
      $('.submenu li:nth-child(4)').css('display', 'block');
    } else {
      $('.main-menu li:nth-child(4)').css('display', 'inline-block');
      $('.submenu li:nth-child(4)').css('display', 'none');
    }

    if ($(window).width() <= 512){
      $('.main-menu li:nth-child(3)').css('display', 'none');
      $('.submenu li:nth-child(3)').css('display', 'block');
    } else {
      $('.main-menu li:nth-child(3)').css('display', 'inline-block');
      $('.submenu li:nth-child(3)').css('display', 'none');
    }

    if ($(window).width() <= 380){
      $('.main-menu li:nth-child(2)').css('display', 'none');
      $('.submenu li:nth-child(2)').css('display', 'block');
    } else {
      $('.main-menu li:nth-child(2)').css('display', 'inline-block');
      $('.submenu li:nth-child(2)').css('display', 'none');
    }

    if ($(window).width() > 740){
      $('.secondary-submenu > a').addClass('inactive-submenu');
    } else {
      $('.secondary-submenu > a').removeClass('inactive-submenu');
    }

  });
  /*-------without resize-------------*/
  if ($(window).width() <= 740){
    //var n = 6;
    $('.main-menu li:nth-child(6)').css('display', 'none');
    $('.submenu li:nth-child(6)').css('display', 'block');
  } else {
    $('.main-menu li:nth-child(6)').css('display', 'inline-block');
    $('.submenu li:nth-child(6)').css('display', 'none');
  }

  if ($(window).width() <= 650){
    //n = n -1; ('+n+')
    $('.main-menu li:nth-child(5)').css('display', 'none');
    $('.submenu li:nth-child(5)').css('display', 'block');
  } else {
    //n = n +1;
    $('.main-menu li:nth-child(5)').css('display', 'inline-block');
    $('.submenu li:nth-child(5)').css('display', 'none');
  }

  if ($(window).width() <= 580){
    $('.main-menu li:nth-child(4)').css('display', 'none');
    $('.submenu li:nth-child(4)').css('display', 'block');
  } else {
    $('.main-menu li:nth-child(4)').css('display', 'inline-block');
    $('.submenu li:nth-child(4)').css('display', 'none');
  }

  if ($(window).width() <= 512){
    $('.main-menu li:nth-child(3)').css('display', 'none');
    $('.submenu li:nth-child(3)').css('display', 'block');
  } else {
    $('.main-menu li:nth-child(3)').css('display', 'inline-block');
    $('.submenu li:nth-child(3)').css('display', 'none');
  }

  if ($(window).width() <= 380){
    $('.main-menu li:nth-child(2)').css('display', 'none');
    $('.submenu li:nth-child(2)').css('display', 'block');
  } else {
    $('.main-menu li:nth-child(2)').css('display', 'inline-block');
    $('.submenu li:nth-child(2)').css('display', 'none');
  }

  /* End Responsive menu - my plugin  */

  $('.secondary-submenu a').click(function(){
    $('.submenu').slideToggle('fast');
  });

  if ($(window).width() > 740){
    $('.secondary-submenu > a').addClass('inactive-submenu');
  } else {
    $('.secondary-submenu > a').removeClass('inactive-submenu');
  }

$('section, .main-menu').click(function(){
  $('.submenu').hide();
});

});
