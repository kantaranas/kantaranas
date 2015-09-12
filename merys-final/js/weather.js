$(function(){     

        var i = 0;
  
        setInterval(function() {
            $("#textslide p.current").removeClass("current");
            $("#textslide p").eq(i % $("#textslide p").length).addClass("current");
            i++;
        }, 1 * 4000);


});

$(function(){ 
	
	var i = 0;
        
        setInterval(function() {
            $("#bookslide p.currentbook").removeClass("currentbook");
            $("#bookslide p").eq(i % $("#bookslide p").length).addClass("currentbook");
            i++;
        }, 1 * 4000);


});