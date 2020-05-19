//MIXITUP
var mixer = mixitup(".grid-portfolio-container");

//HUMBERGER MENU
function openMenu() {
    document.getElementById("menu").style.display = "block";
}
function closeMenu() {
    document.getElementById("menu").style.display = "none";
}
//HUMBERGER MENU
$(function () {
    $(".menu-items a,.scroll-down a").on("click", function () {
        $("body,html").animate({ 
            scrollTop: $($.attr(this, "href")).offset().top 
        }, 1000);
        return false;
    });
});