function resizeThumb(e,t,s){for(var r=document.getElementById(e),m=r.getElementsByTagName("img"),c=0;c<m.length;c++)m[c].src=m[c].src.replace(/\/s72\-c/,"/s"+t),m[c].width=t,m[c].height=s}resizeThumb("PopularPosts1",300,170);
function resetScroller(e){var o=window.pageYOffset,n=document.getElementById(e).offsetTop,r=setTimeout("resetScroller('"+e+"')",speed);o>n?(scrollY=o-distance,window.scroll(0,scrollY)):clearTimeout(r)}var appended=!1,bookmark2=document.createElement("div");bookmark2.id="backto-top",bookmark2.innerHTML='<div id="backtotop" onclick="return false;" onmousedown="resetScroller(&quot;judulblog&quot;);"></div>',onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>600?appended||(document.body.appendChild(bookmark2),appended=!0):appended&&(document.body.removeChild(bookmark2),appended=!1)};var scrollY=0,distance=40,speed=24;
var button=document.querySelector(".menu");button.addEventListener("click",function(){var t=document.querySelector(button.getAttribute("data-target"));t.style.left="0px"==t.style.left?"-250px":"0px"});
for(var imgEl=document.getElementsByTagName("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].removeAttribute("src"),imgEl[i].setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="));console.log(document.body.innerHTML);
var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

function openSosprofil(){var e=document.getElementById("search-box");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("close-icon");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("search-icon");"none"!==e.style.display?e.style.display="none":e.style.display="block"};

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

var jump=function(o){if(o)var t=jQuery(this).attr("href").replace("/","");else var t=location.hash;jQuery("html,body").animate({scrollTop:jQuery(t).offset().top-80},4e3,function(){})};jQuery(document).ready(function(o){o(document).on("click","a[href*=#]",jump),location.hash?setTimeout(function(){o("html, body").scrollTop(0).show(),jump()},0):o("html, body").show()});

function openMobilemenu(){var e=document.getElementById("mobile-menu-nav");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

