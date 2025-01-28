<?php 

$servername="localhost";
$port_id=" 3306"
$username="root";
$password=" ";
$dbname="media_can";

$con = mysqli_connect($servername,$port_id,$username,$password,$dbname);
echo"connection was sucessful";
?>