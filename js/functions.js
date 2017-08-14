
// РАБОТА КНОПКИ FILTER-PRODUCTS START
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    function FilterMenu() {
      $('.btn-filter').click(function() {
        $('.filters').slideDown();
      });
      $('.btn-close').click(function() {
        $('.filters').slideUp();
      });
    }
    FilterMenu();

  }); //end ready
  
  $(function() {
  $('.styler').styler();
  });
// РАБОТА КНОПКИ FILTER-PRODUCTS END

//SLICK SLIDER START
  $('.sl_1').slick({
    vertical:true,
    asNavFor: '.sl_2',
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4
  });

  $('.sl_2').slick({
    asNavFor: '.sl_1',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
//SLICK SLIDER END
}(jQuery));

