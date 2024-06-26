function getUTMParameters() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var vars = queryString.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = pair[0];
        var value = decodeURIComponent(pair[1]);

        if (key.startsWith("utm_")) {
            params[key] = value;
        }
    }

    return params;
}

function updateProductLinks() {
    var utmParameters = getUTMParameters();
    
    if (Object.keys(utmParameters).length > 0) {
        var productLinks = document.querySelectorAll('.product-link');
        
        productLinks.forEach(function(link) {
            var href = link.getAttribute('href');
            
            for (var key in utmParameters) {
                if (!href.includes(key + '=')) {
                    href += (href.includes('?') ? '&' : '?') + key + '=' + utmParameters[key];
                }
            }
            
            link.setAttribute('href', href);
        });
    }
}

updateProductLinks();