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
  var n = 6;
  $(window).resize(function(){

    if ($(window).width() <= 740){
      $('.main-menu li:nth-child(6)').css('display', 'none');
      $('.submenu li:nth-child(6)').css('display', 'block');
    } else {
      $('.main-menu li:nth-child(6)').css('display', 'inline-block');
      $('.submenu li:nth-child(6)').css('display', 'none');
    }

    /*if ($(window).width() <= 740){
    $('.main-menu li:nth-child(k)').css('display', 'none');
  } else {
  $('.main-menu li:nth-child(k)').css('display', 'inline-block');
}*/

});
/* End Responsive menu - my plugin  */


});
