// ==UserScript==
// @name           What.CD :: Search to New Tab
// @namespace      Z4ppy.What.CD
// @description    Open a new tab when searching something through the searchbar.
// @author         Z4ppy
// @include        https://*what.cd/*
// @grant          none
// @version        1.1.1
// @date           2014-07-21
// ==/UserScript==

NodeList.prototype.forEach = Array.prototype.forEach;
var forms = document.querySelectorAll('#searchbars form');
forms.forEach(function(e) { e.target = '_blank' });
