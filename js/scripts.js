$(document).ready(function(){
    $('.modal').on('hidden.bs.modal', function () {
        var $iframe = $(this).find('iframe');
        var tempSrc = $iframe.attr('src');
        $iframe.attr('src', "");
        $iframe.attr('src', tempSrc);
    });
});