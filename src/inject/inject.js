chrome.extension.sendMessage({}, function(response) {
	if(document.getElementsByClassName("permalink-inner").length !== 0) return;
	var css = ".promoted-tweet { display: none; } .cards-media-container { display: none; } .open .cards-media-container { display: block; }", 
		head = document.getElementsByTagName('head')[0], 
		style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}	
	head.appendChild(style);
});