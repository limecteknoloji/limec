retinajs();

$(document).ready(
    function () {

        $('#fullpage').fullpage({
            anchors      : ['anasayfa', 'projeler', 'markalar', 'oduller', 'haberler', 'biz', 'limec-ile-tanisin'],
            sectionsColor: ['#FFFFFF', '#FFFFFF', '#CECECE', '#FFFFFF', '#C4C4C4', '#FFFFFF', '#E5E5E5'],
            css3         : true
        });

        $('#carousel-projects').slick(
            {
                arrows        : true,
                dots          : false,
                fade          : true,
                slidesToShow  : 1,
                slidesToScroll: 1,
                prevArrow     : '<button type="button" class="carousel-prev"></button>',
                nextArrow     : '<button type="button" class="carousel-next"></button>'
            }
        );

        setTimeout(function () {
            $('.zoom').magnify();
        }, 2500);

    }
);