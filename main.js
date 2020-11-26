/*$("div.hamburger-menu").show();*/

/*var open = false;
close.click(function () {
if(open) {
$('div.hamburger-menu').show();
open = false;

} else {
$('div.hamburger-menu').hide();
open = true;
}

});*/

var hb = $("i.fa-bars");
var x = $("i.fa-times")

hb.click(function () {
       $("div.hamburger-menu").show();
})


x.click(function (){
     $("div.hamburger-menu").hide();
})
