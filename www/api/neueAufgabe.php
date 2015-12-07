<?php
include_once "getKurse.php";
    
$titel=$_GET['titel'];
$datum=$_GET['datum'];
//$bemerkung=$_GET['bemerkung'];

echo $_SESSION["Daten"];

try {
    require_once 'dbConnect.php';
    $sql = "INSERT INTO `mydb`.`aufgabe` (`idAufgabe`, `titel`, `datum`, `bemerkung`, `Kurs_idKurs`, `Kurs_Dozent_idDozent`, `erinnerung`, `zeit`, `Benutzer_idBenutzer`, `kalenderwoche`, `kategorie_idkategorie`) VALUES (default, '{$titel}', '{$datum}', NULL, '{$Kurs_idKurs}', '6', NULL, NULL, '1', '47', '1')";
    $result = $datenbank->query($sql);
    echo 'Rows affected: ' . $datenbank->affected_rows . '<br>';
    //echo $result . '<br>';
    if($result){
        // $result ist 1 wenn das insert statement ausgeführt wurde, sonst ist es leer
        $response=array("fehlercode"=>"1","botschaft"=>"Benutzer gespeichert!");
    } else {
        $response=array("fehlercode"=>"0","botschaft"=>"Benutzer nicht gespeichert, existiert schon.");
    }
    //var_dump($response);
    // echo '<pre>';
    // print_r($response);
    // echo '</pre>';
    echo json_encode($response);
} catch (Exception $e) {
    $error = $e->getMessage();
}
if (isset($error)) {
    echo "<p>$error</p>";
}
$datenbank->close();


?>