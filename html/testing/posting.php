<?php
if($_POST["s"])
{
$name = $_POST["s"];
// Here, you can also perform some database query operations with above values.
echo "Welcome ". $name; // Success Message
}
?>