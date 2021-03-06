/* Load and execute a JavaScript file. jquery API
$.ajax({
  method: "GET",
  url: "main.js",
  dataType: "script"
}); */

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

$.getJSON("json/preface.php", function(states) {
  //  var string = JSON.stringify(states); // make string
  //  var states = $.parseJSON(string); // make arrays from string
  //  console.log(states);

  $('#simpleJSON .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: substringMatcher(states)
  });
}).error(function(){
            console.log('error');
  });;

/// Simplest JSON prefetch typeahead.js 0.9.3 outdated, as currently it is 0.11.1
$(function(){

      // applied typeahead to the text input box
      $('#my-input').typeahead({
        name: 'countries',

        // data source
        prefetch: 'json/countries.json',

        // max item numbers list in the dropdown
        limit: 10 // http://code.runnable.com/UlXgeluakNULAAAv/create-an-autocomplete-input-box-with-typeahead-js-for-jquery-and-javascript
      });
});

//// Scrollable ////

$(function(){
var countryData;

$.ajax({
  dataType: "json",
  url: "json/countries.json"})
  .done( function(countries, textStatus, errorThrown) {
    console.log(textStatus);
    if (textStatus ==='success')
      countryData = countries;
  })
  .fail(function(jqXHR, textStatus, errorThrown){
    console.log('ERROR', textStatus, errorThrown);
  });
console.log(countryData);

var xhr = $.getJSON("json/countries.json", function(countries) {
  var string = JSON.stringify(countries); // make string
  var states = $.parseJSON(string); // make arrays from string
}).done(function(){countryData = countries;
        countryData = countries.responseText;
  }).error(function(){
            console.log('error');
    });

});

var jsonString = '[{"label":"System Administrator","value":"1"},{"label":"Software Tester","value":"3"},{"label":" Software Developer","value":"4"},{"label":"Senior Developer","value":"5"},{"label":"Cloud Developer","value":"6"},{"label":"Wordpress Designer","value":"7"}]';
var jsonObj = $.parseJSON(jsonString);
var sourceArr = [];
 
for (var i = 0; i < jsonObj.length; i++) {
   sourceArr.push(jsonObj[i].label);
}

var countries = ["India", "United States", "Canada"];
  $('#scrollable-dropdown-menu .typeahead').typeahead({
    name: 'countries',
    limit: 10,
    source: countries
  });

//////////// Bloodhound - Prefetch - TypeaheadJS //////////
  $.getJSON("json/preface.php", function(states) {
    // var string = JSON.stringify(states); // make string
    // var states = $.parseJSON(string); // make arrays from string
    // console.log(states);

  // constructs the suggestion engine
  var engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: $.map(states, function(state) { return { value: state }; })
  });
  
  // kicks off the loading/processing of `local` and `prefetch`
  engine.initialize();
  
  $('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    displayKey: 'value',
    // `ttAdapter` wraps the suggestion engine in an adapter that
    // is compatible with the typeahead jQuery plugin
    source: engine.ttAdapter()
  });
}).error(function(){
            console.log('error');
    });;

// new test
$.ajax({
  dataType: "json",
  url: "json/countries.json"})
  .done( function(countries) {   
    $.getJSON("json/countries.json", function(countries) {
      // constructs the suggestion engine
      var engine = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `countries` is an array of country names defined in "The Basics"
        local: $.map(countries, function(country) { return { value: country }; })
      });
      
      // kicks off the loading/processing of `local` and `prefetch`
      engine.initialize();
      
      $('#blood .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'countries',
        displayKey: 'value',
        // `ttAdapter` wraps the suggestion engine in an adapter that
        // is compatible with the typeahead jQuery plugin
        source: engine.ttAdapter()
      });
    }); 
  }
);

// AJAX async
// new test
$.ajax({
  dataType: "json",
  url: "json/countries.json"})
  .done( function(countries) {
      // constructs the suggestion engine
      var engine = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `countries` is an array of country names defined in "The Basics"
        local: $.map(countries, function(country) { return { value: country }; })
      });
      
      // kicks off the loading/processing of `local` and `prefetch`
      engine.initialize();
      
      $('#async .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'countrie',
        displayKey: 'value',
        // `ttAdapter` wraps the suggestion engine in an adapter that
        // is compatible with the typeahead jQuery plugin
        source: engine.ttAdapter()
      });
  })
  .fail(function(jqXHR, textStatus, errorThrown){
    console.log('ERROR', textStatus, errorThrown);
  }); // at sitepoint below they use only jqXHR, textStatus

// Instantiate the Bloodhound suggestion engine
var countries = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
        url: 'https://cdn.rawgit.com/twitter/typeahead.js/gh-pages/data/countries.json',
        filter: function (countries) {
            return $.map(countries, function (country) {
                return {
                    name: country
                };
            });
        }
    }
}); // filter can be omitted, prefetch must use external url

// Initialize the Bloodhound suggestion engine
countries.initialize();

// Instantiate the Typeahead UI
$('#pre-fetch .typeahead').typeahead(null, {
    displayKey: 'name',
    source: countries.ttAdapter()
});

// Instantiate the Bloodhound suggestion engine
var local = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
        url: 'json/countries.json',
        filter: function (local) {
            return $.map(local, function (country) {
                return { name: country };
            });
        }
    }
}); // filter can be omitted, prefetch must use external url

// Initialize the Bloodhound suggestion engine
local.initialize();

// Instantiate the Typeahead UI
$('#pre-fetch-local .typeahead').typeahead(null, {
    displayKey: 'name',
    source: local.ttAdapter()
});

// deffered http://www.html5rocks.com/en/tutorials/async/deferred/
//errorThrown
// dataFilter, request 'timeout',fail handler, contentType options,parsing XML http://www.sitepoint.com/5-jquery-ajax-examples/
//getJSON nested elements
// http://stackoverflow.com/questions/10490473/jsonjavascript-jquery-how-to-import-data-from-a-json-file-and-parse-it
$.ajax({
        url: "json/staff.php",
        dataType: "json",
        success: function(data) {
            // console.log(data);
            // output Anna name
            $('#console').append('<p style="color:olive">'+ data.employees[0].firstName+'</p>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR - Requested page not found. [404]', textStatus, errorThrown);
        }
});

var $input = $('#obj-behavior .typeahead');
$input.typeahead({source:[{id: "someId1", name: "Display name 1"}, 
            {id: "someId2", name: "Display name 2"}], 
            autoSelect: true}); 
$input.change(function() {
    var current = $input.typeahead("getActive");
    if (current) {
        // Some item from your model is active!
        if (current.name == $input.val()) {
            // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
        } else {
            // This means it is only a partial match, you can either add a new item 
            // or take the active if you don't want new items
        }
    } else {
        // Nothing is active so it is a new value (or maybe empty value)
    }
});

// tie Typeahead suggestion to a cross-domain data http://jsfiddle.net/Fresh/UkB7u/

// http://code.runnable.com/UhY_jE3QH-IlAAAP/how-to-parse-a-json-file-using-jquery
// http://www.kodingmadesimple.com/2015/05/read-parse-json-string-jquery-html-table.html
// http://webhole.net/2009/11/28/how-to-read-json-with-javascript/
// http://hayageek.com/jquery-ajax-json-parsejson-post-getjson/
var obj = $.parseJSON('{"name":"hayageek","age":32,"marks":[80,70,60,50,60,80]}');
	console.log(obj.name);
	console.log(obj.age);
	console.log(obj.marks);
// Print out all JSON data http://hayageek.com/examples/jquery/ajax-json-examples/index.php?tab=2	
var getParams={  };
$.getJSON("json/name.json",getParams,
function(data, textStatus, jqXHR)
{
  console.log(data);
	 $.each(data, function(k, v) 
	 {
		$("#get-json-msg").append(k+1 +". " + v.firstName +" " +v.lastName+"<br>");	
	});
}).fail(function(jqXHR, textStatus, errorThrown) 
{

});

var postParams ={ip:"115.113.211.130"};
$.post("jsonpost.php",postParams,
function(data, textStatus, jqXHR)
{
	$("#post-json-msg").html("");
	 $.each(data, function(k, v) 
	 {
		$("#post-json-msg").append(k+":"+v+"<br>");	
	});	

},"json").fail(function(jqXHR, textStatus, errorThrown) 
	{
		console.log( jqXHR + " " + textStatus + " " + errorThrown);
	});

// Read text file and display
jQuery.get('txt/file.txt', function(data) {
   // alert(data);
   
   $('#post-json-msg').html(data.replace('n',''));
   // working: console.log(data); // not working: console.log(data.responseText);
   //process text file line by line
   $('#display-by-line').html(data.replace(/\n/g, "<br />"));
   $('pre').html(data); // or text = $('#wrapper pre').text();
   /*var lines = $("#wrapper pre").text().split("\n");
      var lines = data.split("\n");
      $.each(lines, function(n, elem) {
            $('#myContainer').append('<div>' + elem + '</div>');
          });*/ 
});