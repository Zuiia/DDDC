$(function () {
    $(".ok1").on("click", function () {
        $(".disclaimer1").hide();
        $(".disclaimer2").show();
    });
    $(".ok2").on("click", function () {
        $(".disclaimer2").hide();
        $(".download").show();
    });
});
