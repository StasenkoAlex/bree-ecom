$( function() {
    $( "#slider-range" ).slider({
      step:100,
      range: true,
      min: 0,
      max: 5600,
      values: [ 400, 5200 ],
      slide: function( event, ui ) {
        $( "#amount_1" ).val( "$" + ui.values[ 0 ] );
        $( "#amount_2" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount_1" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
  } );