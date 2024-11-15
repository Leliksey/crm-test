$(document).ready(function() {
    $(".menu__item").on("click", function() {
        $(".menu__item").removeClass("active");
        $(this).addClass("active");
    });
    $(".pagination__item").on("click", function() {
        $(".pagination__item").removeClass("active");
        $(this).addClass("active");
    });
    $(".pagination__prev").on("click", function() {
        let index = $(".pagination__item.active").index();
        if (index > 0) {
            $(".pagination__item").removeClass("active");
            $(".pagination__item").eq(index - 1).addClass("active");
        }
    });
    $(".pagination__next").on("click", function() {
        let index = $(".pagination__item.active").index();
        let last_item = $(".pagination__item:last-child").index();
        if (index < last_item) {
            $(".pagination__item").removeClass("active");
            $(".pagination__item").eq(index + 1).addClass("active");
        }
    });

    $(".burger").on("click", function() {
        $(".column-left").addClass("open");
        $(".overlay").show();
    });
    $(".btn-close, .overlay").on("click", function() {
        $(".column-left").removeClass("open");
        $(".overlay").hide();
    });

    function setPaginationPosition() {
        let spanOffset = $("td:last-child span").offset().left + $("td:last-child span").outerWidth();
        let screenWidth = $(window).width();
        let rightOffset = screenWidth - spanOffset;
        $(".pagination, .input-search-box").css("margin-right", rightOffset - 95 + "px");
        if($(window).width() < 1441 && $(window).width() > 1100) {
            $(".pagination, .input-search-box").css("margin-right", rightOffset - 40 + "px");
        }
        if($(window).width() < 1201 && $(window).width() > 1100) {
            $(".pagination, .input-search-box").css("margin-right", rightOffset - 30 + "px");
        }
    }
    setPaginationPosition()
    $(window).on("resize", function() {
        setPaginationPosition()
    });

    $('.hand-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 300,
        fade: true,
        cssEase: 'linear'
      });
    
});