// ==UserScript==
// @name           What.CD Search in new Tab
// @namespace      What.CD
// @description    Open a new tab when searching something through the searchbar.
// @author         Z4ppy
// @include        https://what.cd/*
// @include        https://ssl.what.cd/*
// @updateURL      http://userscripts.org/scripts/source/123195.meta.js
// @version        1.0
// @date           2012-08-27
// ==/UserScript==

/*
Changelog:
1.0    2012-01-15  Initial version
1.0.1  2012-08-27  Fix @include for https://what.cd
*/

(function() {
	var forms = document.getElementsByTagName('form');
	for(var i = 0; i < forms.length; i++) {
		if(forms[i].parentNode.parentNode.parentNode.id == 'searchbars') {
			forms[i].target = '_blank';
		}
	}
})();