/*$("div.hamburger-menu").show();*/

var close = $("i.fa-bars");
var x = $("i.fa-times")

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

var open = false;
close.click(function () {
     if (open) {
        $("div.hamburger-menu").hide();
        open = false;

     } else {
       $("div.hamburger-menu").show();
       open = true
     }

})

var chiuso = false;
x.click(function (){
  if (open) {
     $("div.hamburger-menu").hide();
     open = false;

  } else {
    $("div.hamburger-menu").show();
    open = true
  }

})
