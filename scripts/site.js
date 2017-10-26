var header = document.querySelector(".willow-page-header");
var open = document.querySelector(".willow-page-header__content-open");
var close = document.querySelector(".willow-page-header__content-close");

open.addEventListener("click", function(e) {
    e.preventDefault();
    header.setAttribute("data-content-open", "true");    
});
close.addEventListener("click", function(e) {
    e.preventDefault();
    header.setAttribute("data-content-open", "false");
});