// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );


var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
// require("jquery-ui-dist/jquery-ui.js");

$(function() {
//   $("#datepicker").datepicker();
    $("p").click(function(){
        alert("The paragraph was clicked.");
    });









});


// ajax request
(function() {
    $('#ajaxForm').bind('submit', function(evetn){
        event.preventDefault();
        var  search = $('#title').val();
        $response.empty().addClass('loading');
    

    var ajaxResults = $.ajax({
        url: '',
        dataType: 'json',
        data: {
            title: search
        },
        timeout: 15000
    });
    ajaxResults.done(successFn).fail(errorFn).always(compoleteFn);
});

})();