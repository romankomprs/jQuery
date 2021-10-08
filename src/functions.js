import * as bootstrap from "bootstrap";
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );


var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
// require("jquery-ui-dist/jquery-ui.js");
// require('bootstrap');



$(function() {
//   $("#datepicker").datepicker();
    $("p").click(function(){
        alert("The paragraph was clicked.");
    });


    $("button.ajaxButton").click(function(){
        $.getJSON({url: "https://jsonplaceholder.typicode.com/todos/1", success: function(result){
          $("#ajaxResponse").html(result);
          console.log(result);
        }});
      });

      $("button.ajaxButton").click(function(){

    $.getJSON( "https://jsonplaceholder.typicode.com/todos/1", {
        format: "json"
        // $("#ajaxResponse").html("JSON Data: " + "title: " + json.title + "useID " + json.id );
        // console.log( "JSON Data: " + "title: " + json.title + "useID " + json.id );
       })
       .done(function( data ) {
           console.log("data: ",data);
            $.each( data, function( i, item ) {
                console.log(i + ": ",item);
                //   $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
                //   if ( i === 3 ) {
                //     return false;
                //   }
            });
      })
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
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