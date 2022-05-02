$(document).ready(function () {
    //Header setting up
    setHeader();
    $(window).scroll(setHeader);

    //Date on weather
    const date = new Date();
    $('#date').html(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear());

    //CSS properties for header
    function setHeader() {
        if ($(window).scrollTop() > 100) {
            $('#header').css({
                backgroundColor: "#144182",
                padding: "0"
            });
        } else {
            $('#header').css({
                background: "transparent",
                padding: "10px 0 0 0"
            });
        }
    }
});