var Browser= function(window){
			var Sys = {};
	    var ua = navigator.userAgent.toLowerCase();
	    
	    //Edge:    mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/52.0.2743.116 safari/537.36 edge/15.15063
	    //IE11:    mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; .net clr 2.0.50727; .net clr 3.0.30729; .net clr 3.5.30729; rv:11.0) like gecko
	    //IE6:     mozilla/4.0 (compatible; msie 6.0; windows nt 5.1; sv1)
	    //Safari:  mozilla/5.0 (windows nt 5.1) applewebkit/534.57.2 (khtml, like gecko) version/5.1.7 safari/534.57.2
	    //Chrome:  mozilla/5.0 (windows nt 10.0; wow64) applewebkit/537.36 (khtml, like gecko) chrome/61.0.3163.79 safari/537.36
	    //Firefox: mozilla/5.0 (windows nt 5.1; rv:52.0) gecko/20100101 firefox/52.0
	    //Opera:   mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/60.0.3112.90 safari/537.36 opr/47.0.2631.80 (edition baidu)
	    
	    var s = null;
	    if ( (s = ua.match(/msie ([\d.]+)/)) != null ) {
	        Sys.ie = s[1];
	    }
	    if ( (s = ua.match(/edge\/([\d.]+)/)) != null ) {
	        Sys.edge = s[1];
	    }
	    if ( (s = ua.match(/firefox\/([\d.]+)/)) != null ) {
	        Sys.firefox = s[1];
	    }
	    if ( (Sys.edge == null) && ((s = ua.match(/chrome\/([\d.]+)/)) != null) ) {
	        Sys.chrome = s[1];
	    }
	    if ( (s = ua.match(/opera.([\d.]+)/)) != null ) {
	        Sys.opera = s[1];
	    }
	    if ( (s = ua.match(/opr\/([\d.]+)/)) != null ) {
	        Sys.opera = s[1];
	        Sys.chrome = null;  
	        Sys.safari = null;
	    }
	    if ( (s = ua.match(/version\/([\d.]+).*safari/)) != null ) {
	        Sys.safari = s[1];
	    }
	    if ( (Sys.firefox == null ) && (ua.match(/windows nt ([\d.]+)/) != null) && ((s = ua.match(/rv\:([\d.]+)/)) != null) ) {
	        Sys.ie = s[1];
	    }
	 
	 
	    if (Sys.ie) {
	        return ('IE: ' + Sys.ie);
	    }
	    if (Sys.firefox) {
	        return ('Firefox: ' + Sys.firefox);
	    }
	    if (Sys.chrome) {
	        return ('Chrome: ' + Sys.chrome);
	    }
	    if (Sys.opera) {
	        return ('Opera: ' + Sys.opera);
	    }
	    if (Sys.safari) {
	        return ('Safari: ' + Sys.safari);
	    }
	    if (Sys.edge) {
	        return ('Edge: ' + Sys.edge);
	    }
	    
	    return "Unknow";

};
