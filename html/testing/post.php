<?php
if($_POST["name"])
{
$name = $_POST["name"];
$city = $_POST["city"];
// Here, you can also perform some database query operations with above values.
echo "Welcome ". $name ."! from " . $city; // Success Message
}
?>