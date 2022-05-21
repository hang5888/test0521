// 01
$.get('./event/1/link.txt', function (data) {
    $("#01_event_link").attr("href", data);
});
$.get('./event/1/image.txt', function (data) {
    $("#01_event_image").attr("src", data);
})
$.get('./event/1/title.txt', function (data) {
    $("#01_event_title").html(data);
}, 'text');
$.get('./event/1/text.txt', function (data) {
    $("#01_event_text").html(data);
}, 'text');


// 02
$.get('./event/2/link.txt', function (data) {
    $("#02_event_link").attr("href", data);
});
$.get('./event/2/image.txt', function (data) {
    $("#02_event_image").attr("src", data);
})
$.get('./event/2/title.txt', function (data) {
    $("#02_event_title").html(data);
}, 'text');
$.get('./event/2/text.txt', function (data) {
    $("#02_event_text").html(data);
}, 'text');

// 03
$.get('./event/3/link.txt', function (data) {
    $("#03_event_link").attr("href", data);
});
$.get('./event/3/image.txt', function (data) {
    $("#03_event_image").attr("src", data);
})
$.get('./event/3/title.txt', function (data) {
    $("#03_event_title").html(data);
}, 'text');
$.get('./event/3/text.txt', function (data) {
    $("#03_event_text").html(data);
}, 'text');

// 04
$.get('./event/4/link.txt', function (data) {
    $("#04_event_link").attr("href", data);
});
$.get('./event/4/image.txt', function (data) {
    $("#04_event_image").attr("src", data);
})
$.get('./event/4/title.txt', function (data) {
    $("#04_event_title").html(data);
}, 'text');
$.get('./event/4/text.txt', function (data) {
    $("#04_event_text").html(data);
}, 'text');

