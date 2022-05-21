$(document).ready(function () {

    $.get("./new/left/iframe.txt", function (data) {
        $('#left-iframe').attr("src", data);
    });
    $.get("./new/left/text.txt", function (data) {
        $("#left-text").html(data);
    }, 'text');
    jQuery.get("./new/left/title.txt", function (data) {
        $('#left-title').html(data);
    }, 'text');
    jQuery.get('./new/left/link.txt', function (data) {
        $("#left-link").attr("href", data);
    });


    $.get('./new/right/iframe.txt', function (data) {
        $("#right-iframe").attr("src", data);
    });
    $.get('./new/right/text.txt', function (data) {
        $("#right-text").html(data);
    }, 'text');
    $.get('./new/right/title.txt', function (data) {
        $("#right-title").html(data);
    }, 'text');
    $.get('./new/right/link.txt', function (data) {
        $("#right-link").attr("href", data);
    });
});