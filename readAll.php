<?php

require_once 'connection.php';

$sql = "SELECT * FROM accounts";
$query= mysqli_query($db, $sql);

$result = mysqli_fetch_all($query,MYSQLI_ASSOC);
echo json_encode($result)

 ?>
