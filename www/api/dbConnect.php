<?php

//Stellt Datenbankverbinung her
$datenbank = new mysqli ("localhost", "mydb", "mydb", "mydb");
if ($datenbank->connect_error) {
    echo $error=$datenbank->connect_error;
    
}

?>
