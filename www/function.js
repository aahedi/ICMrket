$( document ).ready(function() {
var url = "http://icmarkets.com/?camp=18360";
var page = "<!DOCTYPE html><html><head><title>Selamat Datang</title><meta name=viewport content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0'><style>html{margin:0;padding:0;width:100%;height:100%;font-family:Arial;overflow:hidden}.logo{text-align:center;position:fixed;width:100%;height:100%;top:-1px;left:-1px;background-size:200px 200px;background-image:url(icon512.png);background-repeat:no-repeat;background-position:center;z-index:999999}*{margin:0;padding:0}@-ms-viewport{width:device-width}body{overflow:hidden;-ms-user-select:none;-ms-content-zooming:none;-ms-touch-action:none;overflow:hidden}#clouds{padding:100px 0;/*background:#c9dbe9;background:-webkit-linear-gradient(top,#c9dbe9 0,#fff 100%);background:-linear-gradient(top,#c9dbe9 0,#fff 100%);background:-moz-linear-gradient(top,#c9dbe9 0,#fff 100%)*/}.cloud{width:200px;height:60px;background:#fff;border-radius:200px;-moz-border-radius:200px;-webkit-border-radius:200px;position:relative}.cloud:after,.cloud:before{content:'';position:absolute;background:#fff;width:100px;height:80px;position:absolute;top:-15px;left:10px;border-radius:100px;-moz-border-radius:100px;-webkit-border-radius:100px;-webkit-transform:rotate(30deg);transform:rotate(30deg);-moz-transform:rotate(30deg)}.cloud:after{width:120px;height:120px;top:-55px;left:auto;right:15px}.x1{-webkit-animation:moveclouds 5s linear infinite;-moz-animation:moveclouds 5s linear infinite;-o-animation:moveclouds 5s linear infinite}.x2{left:200px;-webkit-transform:scale(.6);-moz-transform:scale(.6);transform:scale(.6);opacity:.6;-webkit-animation:moveclouds 15s linear infinite;-moz-animation:moveclouds 15s linear infinite;-o-animation:moveclouds 15s linear infinite}.x3{left:-250px;top:-200px;-webkit-transform:scale(.8);-moz-transform:scale(.8);transform:scale(.8);opacity:.8;-webkit-animation:moveclouds 10s linear infinite;-moz-animation:moveclouds 10s linear infinite;-o-animation:moveclouds 10s linear infinite}.x4{left:470px;top:-250px;-webkit-transform:scale(.75);-moz-transform:scale(.75);transform:scale(.75);opacity:.75;-webkit-animation:moveclouds 8s linear infinite;-moz-animation:moveclouds 8s linear infinite;-o-animation:moveclouds 8s linear infinite}.x5{left:-150px;top:-150px;-webkit-transform:scale(.8);-moz-transform:scale(.8);transform:scale(.8);opacity:.8;-webkit-animation:moveclouds 10s linear infinite;-moz-animation:moveclouds 10s linear infinite;-o-animation:moveclouds 10s linear infinite}@-webkit-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}@-moz-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}@-o-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}.cloud{display:none}#cloud,body{background:#4CAF50}</style><script src='cordova.js'></script><script>document.addEventListener('deviceready', masuk, false);function masuk(){setTimeout(function(){location.replace('"+url+"')},3e3)}</script><body onload=masuk() oncontextmenu=return!1 ondragstart=return!1><a href=javascript:location.replace('"+url+"')><div id=clouds><div class=logo></div><div class='cloud x1'></div><div class='cloud x2'></div><div class='cloud x3'></div><div class='cloud x4'></div><div class='cloud x5'></div></div></a>"
document.write(page);
});