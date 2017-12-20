///Déclaration de variables

var $element = $('.element');
var $doc = $(document);
var $elementOffset;
var $docScroll = $doc.scrollTop();
var $windHeight = $(window).height();
var offset = 80;
var ratio = $winHeight * offset / 100;

$element.addClass('cacher');

$doc.on("scroll", function(){

    $element.each(function() {

        elementOffset = $(this).offset().top;

        if($docScroll > ($element - ratio) && $(this).hasClass('cacher')){
            $(this).removeClass('cacher');
        }
    });
});
