var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

function on() {
    $('#nav').style.left = '0'
    $('#nav').style.opacity = '1'
    $('.overlay').style.display = 'block'
    $('.mobile-btn').style.display = 'none'
    $('.mobile-close').style.display = 'block'
}

function off() {
    $('#nav').style.opacity = '0'
    $('#nav').style.left = '-315px'
    $('.subnav').style.display = 'none'
    $('.overlay').style.display = 'none'
    $('.mobile-btn').style.display = 'block'
    $('.mobile-close').style.display = 'none'
}

function autoclose() {
    $('#nav').style.opacity = '0'
    $('#nav').style.left = '-315px'
    $('.subnav').style.display = 'none'
    $('.overlay').style.display = 'none'
    $('.mobile-btn').style.display = 'block'
    $('.mobile-close').style.display = 'none'
}

function openn() {
    $('.subnav').style.opacity = '1'
    $('.subnav').style.display = 'block'
}

var elements = $$('.closeAuto')

for(var i=0; i<elements.length; i++) {
    elements[i].onclick = function () {
        $('.subnav').style.opacity = '0'
        $('#nav').style.left = '-315px'
        $('.subnav').style.display = 'none'
        $('.overlay').style.display = 'none'
        $('.mobile-btn').style.display = 'block'
        $('.mobile-close').style.display = 'none'
    }
}

