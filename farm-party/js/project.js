$("#sky> div:gt(0)").hide();

setInterval(function() { 
  $('#sky> div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#sky');
},  3000);

$("#sun> div:gt(0)").hide();

setInterval(function() { 
  $('#sun> div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#sun');
},  3000);



