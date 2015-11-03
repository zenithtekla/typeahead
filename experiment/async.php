<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Testing</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="typeahead/typeahead.bundle.js"></script>
    <script src="typeahead/handlebars-v4.0.4.js"></script>
    <link rel="stylesheet" href="../../html/bootstrap/typeahead.css">
</head>
<body>
<?php
echo '
<div id="async">Format <span class="required">*</span>: 	<input class="typeahead" type="text" name="format"></div>
</div>

<div id="cont">Format <span class="required">*</span>: 	<input class="typeahead" type="text" name="format"></div>
</div>
<br/>
<div id="bloodhound">
  <input class="typeahead" type="text" placeholder="States of USA">
</div>';
?>
<script src="async.js" type="text/javascript"></script>
</body>
</html>