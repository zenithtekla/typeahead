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
<?php
echo '
    <div id="bloodhound">
        <input class="typeahead" type="text" placeholder="choose car">
    </div>
    <br/><br/>
    <div id="blood">
        <input class="typeahead" type="text" placeholder="choose country">
    </div>
    <br/><br/>Prefetch<br/>
    <div id="pre-fetch">
        <input class="typeahead" type="text" placeholder="choose country">
    </div>
    <br/><br/>Prefetch on local JSON<br/>
    <div id="pre-fetch-local">
        <input class="typeahead" type="text" placeholder="choose country">
    </div>

    <br/><br/>
    <div id="get-json-msg">
    </div>
    <div id="post-json-msg">
    </div>
      ';
?>
<script src="test.js" type="text/javascript"></script>
</body>
</html>