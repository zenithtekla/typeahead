/* var substringMatcher = function(strs) {
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
}; */

  $.getJSON("preface.php", function(states) {
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
});

// new test
$.ajax({
  dataType: "json",
  url: "countries.json"})
  .done( function(countries) {   
    $.getJSON("countries.json", function(countries) {
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
        url: 'countries.json',
        filter: function (local) {
            return $.map(local, function (country) {
                return {
                    name: country
                };
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

// tie Typeahead suggestion to a cross-domain data http://jsfiddle.net/Fresh/UkB7u/

// http://code.runnable.com/UhY_jE3QH-IlAAAP/how-to-parse-a-json-file-using-jquery
// http://www.kodingmadesimple.com/2015/05/read-parse-json-string-jquery-html-table.html
// http://webhole.net/2009/11/28/how-to-read-json-with-javascript/
// http://hayageek.com/jquery-ajax-json-parsejson-post-getjson/
var obj = $.parseJSON('{"name":"hayageek","age":32,"marks":[80,70,60,50,60,80]}')
	console.log(obj.name);
	console.log(obj.age);
	console.log(obj.marks);
// Print out all JSON data http://hayageek.com/examples/jquery/ajax-json-examples/index.php?tab=2	
var getParams={  };
$.getJSON("countries.json",getParams,
function(data, textStatus, jqXHR)
{
	 $.each(data, function(k, v) 
	 {
		$("#get-json-msg").append(k+":"+v+"<br>");	
	});
}).fail(function(jqXHR, textStatus, errorThrown) 
{

});

var postParams ={ip:'115.113.211.130'};
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
		alert(textStatus);
	});

