function solid() {
    function cback(e) {
        var t = [];
        for (var n = inputs.length; n--;) {
            if (!inputs[n].value.length) t.push(inputs[n]);
        }
        var r = t.length;
        var i = inputs.length;
        var s = document.querySelectorAll(".top");
        for (var o = s.length; o--;) {
            s[o].style.width = 100 - r / i * 100 + "%";
        }
    }
    var forms = document.querySelectorAll(".form"),
        inputs = [];
    for (var i = forms.length; i--;) {
        var els = forms[i].querySelectorAll("input, textarea, select");
        for (var j = els.length; j--;) {
            if (els[j].type != "button" && els[j].type != "submit") {
                inputs.push(els[j]);
                els[j].addEventListener("input", cback, false);
            }
        }
    }
    const email = document.getElementById("mail");
        email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Еmail некорректен!");
            mail.style.border = "1px solid red";
        } else {
            email.setCustomValidity("");
            mail.style.border = "1px solid #B8D2FA";
        }
        });
}
solid();
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:4,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
