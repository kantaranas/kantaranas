    var quotes = [
        "dfdw qwefgrwgreb rw reqr",
        "quote2",
        "quote3",
        "quote4",
        "quote5",
        ];
        
        var i = 0;
        
        setInterval(function() {
            $("#textslide").html(quotes[i]);
            if (i == quotes.length)
                i=0;
            else
                i++;
        }, 1 * 1000);