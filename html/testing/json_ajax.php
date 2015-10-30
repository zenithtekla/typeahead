<?php
	$required_inputs = array("first_name", "last_name", "birth_date");
	$json_array = array();
	
	function add_json_data($key, $data, $append=true) {
		global $json_array;
		
		if (array_key_exists($key,$json_array) && $append) {
			$json_array[$key] .= "$data<br/>";
		} else {
			$json_array[$key] = "$data<br/>";
		}
	}
	
	/* loop the required fields */
	foreach ($required_inputs as $req_in) {
		if (!isset($_POST[$req_in]) || $_POST[$req_in] == "" || empty($_POST[$req_in])) {	
			add_json_data("error", ucwords(str_replace("_", " ", $req_in)) . " : Missing required information.");
		}
	}
	
	/* now if a error was added we return with errors */
	if (array_key_exists("error", $json_array)) {
		echo json_encode($json_array);
		exit;
	}
	
	/* if we dont have errors return a results set */
	add_json_data("results", $_POST['first_name'] . " " . $_POST['last_name'] . " was born on " . $_POST['birth_date']);
	
	/* and than dump the data back */
	echo json_encode($json_array);
	exit;

?>
