<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Testing</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="typeahead/typeahead.bundle.js"></script>
    <link rel="stylesheet" href="../../html/bootstrap/typeahead.css">
</head>
<body>
    <div><a href="http://tatiyants.com/how-to-use-json-objects-with-twitter-bootstrap-typeahead/">Note-on-the-how-to</a></div>
    <div><a href="https://twitter.github.io/typeahead.js/examples/">TWITTER Typeahead</a></div>
    <div><a href="http://brianreavis.github.io/selectize.js/">alternative - selectize.js</a></div>
    <div><a href="http://twitter.github.io/typeahead.js/js/examples.js">Source</a></div>
    <div><a href="http://twitter.github.io/typeahead.js/data/films/post_1960.json">Data</a></div>
    <div><a href="http://blattchat.com/2013/06/04/twitter-bootstrap-typeahead-js-with-underscore-js-tutorial">CustomTemplate Reference 1</a></div>
    <div><a href="http://mycodde.blogspot.com/2014/12/typeaheadjs-autocomplete-suggestion.html">CustomTemplate Reference 1</a></div>
    <div><a href="http://jsfiddle.net/w03a28h9/40/">Scrollable & custom Template-Zenith</a></div>
    <div><a href="http://stackoverflow.com/questions/24909006/javascript-get-data-from-json-to-a-global-variable">getJSON to GlobalVar</a></div>
    <div><a href="https://forum.jquery.com/topic/how-do-i-access-json-data-outside-of-getjson">getJSON to GlobalVar</a></div>
    <div><a href="http://stackoverflow.com/questions/6255344/how-can-i-use-jquery-to-post-json-data">ajax pass JSON data as string</a></div>
    Template
    <div><a href="http://blog.chrislkeller.com/display-data-from-a-flat-json-file-on-a-handl/">display data from a flat JSON</a></div>
    <div><a href="http://code.tutsplus.com/tutorials/quick-tip-use-jquery-to-retrieve-data-from-an-xml-file--net-390">Jquery-retrieve data from XML file</a></div>
<?php
echo '
    <div class="container">
    <div id="simplest">
        <input id="my-input" class="typeahead" type="text" placeholder="input a country name">
    </div>
    <div id="simpleJSON">
        <input class="typeahead" type="text" placeholder="choose your car -simpleJSON">
    </div>
    <div id="scrollable-dropdown-menu">
        <input class="typeahead" type="text" data-provide="typeahead" placeholder="Countries - Scrollable">
    </div>
    <br/><br/>
    <div id="bloodhound">
        <input class="typeahead" type="text" placeholder="choose car - getJSON_Bloodhound">
    </div>
    <br/><br/>
    <div id="blood">
        <input class="typeahead" type="text" placeholder="choose country - Ajax_getJSON_Blood">
    </div>
    <br/><br/>AJAX the right way<br/>
    <div id="async">
        <input class="typeahead" type="text" placeholder="choose country - Ajax_Async">
    </div>
    <br/><br/>Prefetch<br/>
    <div id="pre-fetch">
        <input class="typeahead" type="text" placeholder="choose country - Pre-fetch">
    </div>
    <br/><br/>Prefetch on local JSON<br/>
    <div id="pre-fetch-local">
        <input class="typeahead" type="text" placeholder="choose country - Prefetch-local">
    </div>
    <br/><br/>
    <div id="obj-behavior">
        <input class="typeahead" type="text" placeholder="obj-behavior country">
    </div>

    <br/><br/>
    <div id="console">
    </div>
    <div id="get-json-msg">
    </div>
    <div id="display-by-line">
    </div>
    <div id="display-by-pre"><pre/>
    </div>
    <div id="myContainer">
        <div id="wrapper"><pre/>
        </div>
    </div>
    <div id="post-json-msg">
    </div>
</div>      ';
?>
<script src="test.js" type="text/javascript"></script>
</body>
</html>