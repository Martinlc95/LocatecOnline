<?php
	
	function connect()
	{
		$servername = "localhost";
		$username = "root";
		$password= "root";
		$dbname = "locatecdb"; 

		$connection = new mysqli($servername, $username, $password, $dbname);

		if ($connection->connect_error)
		{
			return null;
		}
		else
		{
			return $connection;
		}
	}


	function attemptLogin($username, $uPassword)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT *
					FROM alumnos
					WHERE matricula = '$username' AND contra = '$uPassword'";

			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
				return array("status" => "SUCCESS", "response" => "OK"); 
			}
			else
			{
				header("HTTP/1.1 406 User not found");
				die("Wrong credentials provided");
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}

	function attemptLookIt($item)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT objetoPer, perdedor, email, categoria, descripcion, fecha
					FROM perdidos
					WHERE objetoPer = '$item'";

			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{   
				$my_array = array(); 
				while ($row = mysqli_fetch_assoc($result)){
					$my_array[] = array("obj" => $row["objetoPer"], "per" => $row["perdedor"], "ema" => $row['email'], "cat" => $row['categoria'], "des" => $row["descripcion"], "fec" => $row["fecha"]);
			}
			return array("status" => "SUCCESS", "response" => $my_array);
			}
			else
			{
				header("HTTP/1.1 406 User not found");
				die("Wrong credentials provided");
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}

	function attemptRepItem($Ob, $Per, $Cat, $Des, $Em)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "INSERT INTO encontrados(objetoEnc, encontrador, email, categoria, descripcion)
				VALUES ('$Ob', '$Per', '$Em', '$Cat', '$Des')";

			if (mysqli_query($conn, $sql))
			{
	            return array("status" => "SUCCESS", "response" => "OK");
	        }
	        else
	        {
	            header('HTTP/1.1 500 Bad connection, something went wrong.');
	            die("Error: " . $sql . "\n" . mysqli_error($connection));
	        }
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}

	function attemptSearchIt($ite)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "SELECT objetoEnc, encontrador, email, categoria, descripcion, fecha
					FROM encontrados
					WHERE objetoEnc = '$ite' OR encontrador = '$ite' OR categoria = '$ite'";

			$result = $conn->query($sql);

			if ($result->num_rows > 0){
				$my_array = array(); 
				while ($row = mysqli_fetch_assoc($result)){
					$my_array[] = array("obj" => $row["objetoEnc"], "enc" => $row["encontrador"], "ema" => $row['email'], "cat" => $row['categoria'], "des" => $row["descripcion"], "fec" => $row["fecha"]);
				}
				return array("status" => "SUCCESS", "response" => $my_array);
			}
			else
			{
				header("HTTP/1.1 406 User not found");
				die("Wrong credentials provided");
			}
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}

	function attemptLostItem($Ob, $Per, $Cat, $Des, $Em)
	{
		$conn = connect();

		if ($conn != null)
		{
			$sql = "INSERT INTO perdidos(objetoPer, perdedor, email, categoria, descripcion)
				VALUES ('$Ob', '$Per', '$Em', '$Cat', '$Des')";

			if (mysqli_query($conn, $sql))
			{
	            return array("status" => "SUCCESS", "response" => "OK");
	        }
	        else
	        {
	            header('HTTP/1.1 500 Bad connection, something went wrong.');
	            die("Error: " . $sql . "\n" . mysqli_error($connection));
	        }
		}
		else
		{
			return array("status" => "INTERNAL_SERVER_ERROR", "code"=>500);

		}
	}

?>