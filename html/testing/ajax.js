var i = 0;
function AjaxSendForm(url, placeholder, form, append) {
var data = $(form).serialize();
append = (append === undefined ? false : true); // whatever, it will evaluate to true or false only

$.ajax({
    type: 'POST',
    url: url,
    data: data,
    dataType: 'html',
    beforeSend: function() {
        // setting a timeout
        $(placeholder).addClass('loading');
        i++;
    },
    success: function(data) {
        if (append) {
            $(placeholder).append(data);
        } else {
            $(placeholder).html(data);
        }
    },
    error: function(xhr) { // if error occured
        alert("Error occured.please try again");
        $(placeholder).append(xhr.statusText + xhr.responseText);
        $(placeholder).removeClass('loading');
    },
    complete: function() {
        i--;
        if (i <= 0) {
            $(placeholder).removeClass('loading');
        }
    }
});

$.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "LinkTagOut.aspx",
        dataType: "json",
        data: { id: 1 }, // or the string: 'id=1'
        complete:
        function () {
            window.location = "LinkTagOut.aspx";
        }
        // code LESS use this http://stackoverflow.com/a/17025764

});

$.get('yourJsonFileAsString.txt', function(data) {
   console.log( $.parseJSON( data ) );
 }); 

$.ajax(url, { data: { comment: text },
    type: "POST",
    beforeSend: function() {
        alert("before send");
    },
    error: function() {
        alert("error"); 
    },
    success: function(data) {
        alert(data);    
    }
});

$.post(url, { comment: text }, function(data) {
        alert(data);    
});

$.fn.blueBorder = function(){
    this.each(function(){
        $(this).css("border","solid blue 2px");
    });
    return this;
};
$("#button").on("click",function(){
    $('.blue').blueBorder();
});

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.post( "example.php", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
});
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  alert( "second finished" );
});