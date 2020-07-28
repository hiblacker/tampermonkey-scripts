// ==UserScript==
// @name         知乎-隐藏标题
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  显示或者隐藏标题
// @author       You
// @match        *://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    console.log("youhou  隐藏标题");

    var style = {
        position: "fixed",
        left: "20px",
        bottom: "200px",
        padding: "3px 5px",
        fontSize: "10px",
        color: "#fff",
        background: "#3785f7",
        borderRadius: "4px",
        opacity: ".4",
        cursor: "pointer",
    };
    var button = document.createElement("div");
    button.innerHTML = "隐藏标题";
    Object.keys(style).forEach((key) => (button.style[key] = style[key]));
    document.body.appendChild(button);

    button.onclick = function () {
        loadCssCode(".AppHeader{display:none}");
        button.style.display = "none";
    };

    function loadCssCode(code) {
        var style = document.createElement("style");
        style.type = "text/css";
        style.rel = "stylesheet";
        //for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(code));
        //for IE
        //style.styleSheet.cssText = code;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
    }
})();
