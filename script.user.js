// ==UserScript==
// @name           What.CD Search in new Tab
// @namespace      What.CD
// @description    Open a new tab when searching something through the searchbar.
// @author         Z4ppy
// @include        http://what.cd/*
// @include        https://ssl.what.cd/*
// @updateURL      http://userscripts.org/scripts/source/123195.meta.js
// @version        1.0
// @date           2012-01-15
// ==/UserScript==

(function() {
	var forms = document.getElementsByTagName('form');
	for(var i = 0; i < forms.length; i++) {
		if(forms[i].parentNode.parentNode.parentNode.id == 'searchbars') {
			forms[i].target = '_blank';
		}
	}
})();