<?php

	header('Content-type: application/json');
	header('Accept: application/json');

	require_once __DIR__ . '/dataLayer.php';

	$requestMethod = $_SERVER['REQUEST_METHOD'];

	switch ($requestMethod)
	{
		case "GET" : $action = $_GET["action"];
					 getRequests($action);
					 break;
		case "POST": $action = $_POST["action"];
					 postRequests($action);
					 break;

	}

	function getRequests($action)
	{
		switch($action)
		{
			case "LOGIN": requestLogin();
						  break;
			case "LOOKITEM": lookForItem();
							break;
			case "SEARITEM": searchItem();
							break;
		}
	}

	function postRequests($action)
	{
		switch($action)
		{
			case "REPITEM":	reportItem();
								break;
			case "LOSITEM":	lostItem();
								break;
		}
	}

	function requestLogin()
	{
		$uName = $_GET["StudentId"];
		$uPassword = $_GET["StudentPass"];

		$response = attemptLogin($uName, $uPassword);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}

	function lookForItem()
	{
		$item = $_GET["objEncontrado2"];

		$response = attemptLookIt($item);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}

	function reportItem()
	{
		$ObEnc = $_POST["obEncontrado"];
		$Person = $_POST["encontrador"];
		$Cate = $_POST["categoria"];
		$Desc = $_POST["descEncontrado"];
		$Email = $_POST["emailEnc"];

		$response = attemptRepItem($ObEnc, $Person, $Cate, $Desc, $Email);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}

	function searchItem()
	{
		$ite = $_GET["SeaItem"];

		$response = attemptSearchIt($ite);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}

	function lostItem()
	{
		$ObPer = $_POST["obPerdido"];
		$Person = $_POST["perdedor"];
		$Cate = $_POST["categoria"];
		$Desc = $_POST["descPerdido"];
		$Email = $_POST["emailPer"];

		$response = attemptLostItem($ObPer, $Person, $Cate, $Desc, $Email);

		if ($response["status"] == "SUCCESS")
		{
			echo json_encode($response["response"]);
		}
		else
		{
			errorHandler($response["status"], $response["code"]);
		}
	}
?>