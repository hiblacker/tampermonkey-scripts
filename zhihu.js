// ==UserScript==
// @name         知乎-隐藏标题和边栏
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
        opacity: ".5",
        cursor: "pointer",
        userSelect: "none",
    };
    var $ = key => document.querySelector(key)
    var header = $(".AppHeader");
    var sideBar = $(".GlobalSideBar") || $(".Question-sideColumn");
    var main = $(".Topstory-mainColumn") || $(".Question-mainColumn");
    var mainWidth = main ?? null;
    var button = document.createElement("div");
    button.innerHTML = "隐藏";
    Object.keys(style).forEach((key) => (button.style[key] = style[key]));
    header.classList.add("youhou-hide");
    document.body.appendChild(button);

    button.onclick = function () {
        if (button.innerHTML == "隐藏") {
            button.innerHTML = "显示";
            header.style.display = sideBar.style.display = "none";
            mainWidth && (main.style.width = "100%");
        } else {
            button.innerHTML = "隐藏";
            header.style.display = sideBar.style.display = "block";
            mainWidth && (main.style.width = mainWidth);
        }
    };
})();
