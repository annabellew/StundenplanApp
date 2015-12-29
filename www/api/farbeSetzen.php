<?php
    

$Kurs_idKurs=$_GET['Kurs_idKurs'];
$Farbe_idFarbe=$_GET['Farbe_idFarbe'];



try {
    require_once 'dbConnect.php';
        $sql = "UPDATE `mydb`.`benutzer_has_kurs` SET `Farbe_idFarbe` = $Farbe_idFarbe WHERE `benutzer_has_kurs`.`Benutzer_idBenutzer` = 1 AND `benutzer_has_kurs`.`Kurs_idKurs`= $Kurs_idKurs";
    $result = $datenbank->query($sql);
    echo 'Rows affected: ' . $datenbank->affected_rows . '<br>';
    //echo $result . '<br>';
    if($result){
        // $result ist 1 wenn das insert statement ausgeführt wurde, sonst ist es leer
        $response=array("fehlercode"=>"1","botschaft"=>"Änderung gespeichert!");
    } else {
        $response=array("fehlercode"=>"0","botschaft"=>"Änderung nicht gespeichert");
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