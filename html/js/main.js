$(document).ready(function() {
    //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'popup';
    $('#myInput').editable({
        type: 'text',
        pk: 1,
        mode: "inline",
        url: function(params) {
          var d = new $.Deferred;
          console.log("id of element changed: " + params.name);
          console.log("new value: " + params.value);
          setTimeout(function() {
                // to simulate some asynchronous processing
                d.resolve();
                // change myInput content
                $(this).val($('#myInput').val(params.value));
                // change a 'href' attribute
                $("#w3s").attr("href", "http://www.w3schools.com/jquery");
                //display my text on a Div above the input field
                $('#myDiv').html(params.value);
            }, 500); // http://tutorials.jenkov.com/jquery/deferred-objects.html#codeBox
            return d.promise();
        }
    });

    /* to submit
        url: function(params) {
              return $.post("post.php", params);
        });﻿
    */

    $('#myTextarea').editable({
        type: 'text',
        pk: 2,
        mode: "inline",
        url: function(params) {
          console.log("id of element changed: " + params.name);
          console.log("new value: " + params.value);
         // $(this).html(params.value);
        }
    });

    //make username editable
    $('#username').editable({
        type: 'text',
        pk: 1,
        url: 'post.php',
        send: 'always'
    });

    //make status editable
    $('.status').editable({
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'status 1'},
            {value: 2, text: 'status 2'},
            {value: 3, text: 'status 3'}
        ]
        /*
        //uncomment these lines to send data on server
        ,pk: 1
        ,url: '/post'
        */
    });
});