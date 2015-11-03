// Instantiate the Bloodhound suggestion engine
var local = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
        url: 'json/countries.json'
    }
}); // filter can be omitted, prefetch must use external url

// Initialize the Bloodhound suggestion engine
local.initialize();

// Instantiate the Typeahead UI
$('#async .typeahead').typeahead(null, {
    displayKey: 'name',
    source: local.ttAdapter()
});

// new test
// $.map(new_load, function(obj) { 
//             return { value : obj.format + ", example: " + obj.format_example };
//         })
// Instantiate the Bloodhound suggestion engine
var new_load = new Bloodhound({
    datumTokenizer: function (datum) {Bloodhound.tokenizers.obj.whitespace(datum.name)},
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: 'json/cont.json',
        filter: function (new_load) {
            console.log(new_load);
            return $.map(new_load, function(data) { 
                return { name : data.format,
                         example: data.format_example };
            });
        }
    }
}); // filter can be omitted, prefetch must use external url

// Initialize the Bloodhound suggestion engine
new_load.initialize();

// Instantiate the Typeahead UI
$('#cont .typeahead').typeahead(null, {
    displayKey: 'name',
    source: new_load.ttAdapter(),
    templates: {
        suggestion: Handlebars.compile("<div style='padding:6px'><b>{{name}}</b> - example : {{example}} </div>"),
        footer: Handlebars.compile("<b>Searched for "+ $(":input.typeahead.tt-input").typeahead('val') +"</b>")
    }
});

// Bloodhound
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

// constructs the suggestion engine
var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `states` is an array of state names defined in "The Basics"
  local: states
});

$('#bloodhound .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: states
});