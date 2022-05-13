$(document).ready(function () {
    $(".plus div:first-child").click(function () {
        $("#mimg").attr("src", "img/guitarmain.jpg");
    });
    $(".plus div:nth-child(2)").click(function () {
        $("#mimg").attr("src", "img/plus1.jpg");
    });
    $(".plus div:nth-child(3)").click(function () {
        $("#mimg").attr("src", "img/plus2.jpg");
    });
    $(".plus div:nth-child(4)").click(function () {
        $("#mimg").attr("src", "img/plus3.jpg");
    });
    $(".plus div:nth-child(5)").click(function () {
        $("#mimg").attr("src", "img/bodydetail.jpg");
    });


    $('#productdetail li:nth-of-type(3)').click(function () {
        $("#productdetail").hide();
        $("#review").fadeIn();
        $("#qa").hide();
        $("#shopping").hide();
        $('#detail').css({ height: 1200 })
    });
    $('#productdetail li:nth-of-type(5)').click(function () {
        $("#productdetail").hide();
        $("#review").hide();
        $("#qa").fadeIn();
        $("#shopping").hide();
        $('#detail').css({ height: 1800 })
    });
    $('#productdetail li:nth-of-type(7)').click(function () {
        $("#productdetail").hide();
        $("#review").hide();
        $("#qa").hide();
        $("#shopping").fadeIn();
        $('#detail').css({ height: 1500 })
    });

    $('#review li:nth-of-type(1)').click(function () {
        $("#productdetail").fadeIn();
        $("#review").hide();
        $("#qa").hide();
        $("#shopping").hide();
        $('#detail').css({ height: 4000 })
    });
    $('#review li:nth-of-type(5)').click(function () {
        $("#productdetail").hide();
        $("#review").hide();
        $("#qa").fadeIn();
        $("#shopping").hide();
        $('#detail').css({ height: 1800 })
    });
    $('#review li:nth-of-type(7)').click(function () {
        $("#productdetail").hide();
        $("#review").hide();
        $("#qa").hide();
        $("#shopping").fadeIn();
        $('#detail').css({ height: 1500 })
    });

    $('#qa li:nth-of-type(1)').click(function () {
        $("#productdetail").fadeIn();
        $("#review").hide();
        $("#qa").hide();
        $("#shopping").hide();
        $('#detail').css({ height: 4000 })
    });
    $('#qa li:nth-of-type(3)').click(function () {
        $("#productdetail").hide();
        $("#review").fadeIn();
        $("#qa").hide();
        $("#shopping").hide();
        $('#detail').css({ height: 1200 })
    });
    $('#qa li:nth-of-type(7)').click(function () {
        $("#productdetail").hide();
        $("#review").hide();
        $("#qa").hide();
        $("#shopping").fadeIn();
        $('#detail').css({ height: 1500 })
    });

    $('#shopping li:nth-of-type(1)').click(function () {
        $("#productdetail").fadeIn();
        $("#review").hide();
        $("#qa").hide();
        $("#shopping").hide();
        $('#detail').css({ height: 4000 })
    });
    $('#shopping li:nth-of-type(3)').click(function () {
        $("#productdetail").hide();
        $("#review").fadeIn();
        $("#qa").hide();
        $("#shopping").hide();
        $('#detail').css({ height: 1200 })
    });
    $('#shopping li:nth-of-type(5)').click(function () {
        $("#productdetail").hide();
        $("#review").hide();
        $("#qa").fadeIn();
        $("#shopping").hide();
        $('#detail').css({ height: 1800 })
    });

});
