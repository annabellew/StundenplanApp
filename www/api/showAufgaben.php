<?php
include_once "getAufgaben.php";

$output = "<table><tr><th>Datum</th><th>Modul</th><th>Titel</th><th>Kategorie</th></tr>";

for ($i = 1; $i <= count($array); $i++){
    $output=$output."<tr><td>".$array[$i][datum]."</td><td>".$array[$i][Kurs_idKurs]."</td><td>".$array[$i][titel]."</td><td>".$array[$i][kategorie_idkategorie]."</td></tr>";
}
  echo $output;  
?>