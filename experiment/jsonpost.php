<?php
if($_POST["ip"])
{
$name = $_POST["ip"];

// Here, you can also perform some database query operations with above values.
echo "Welcome ". $name; // Success Message
}
?>