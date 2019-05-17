<?php
$req_dump = print_r($_REQUEST, TRUE);
$req_body = $req_dump . $_POST;
// var_dump($_POST);
$json_string = json_encode($req_body);
$file_handle = fopen('request.json', 'a');
$saved = fwrite($file_handle, $req_dump);

if ($saved > 0) {
	fclose($file_handle);

	$attachment_location = $_SERVER["DOCUMENT_ROOT"] . "/.server/WioloPart.pdf";
	if (file_exists($attachment_location)) {

		header($_SERVER["SERVER_PROTOCOL"] . " 200 OK");
		header("Cache-Control: public"); // needed for internet explorer
		header("Content-type:application/pdf");
		// header("Content-Transfer-Encoding: Binary");
		header("Content-Length:" . filesize($attachment_location));
		header("Content-Disposition:attachment;filename='WioloPart.pdf'");
		// header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');
		readfile($attachment_location);
		die();
	} else {
		die($attachment_location);
	}
}
