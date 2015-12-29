<?php
$ansichtsdatum=$_GET['ansichtsdatum'];
//$ansichtsdatum="2016-01-04";

try {
    require_once 'dbConnect.php';
    $sql= "SELECT 
            a.Kurs_idKurs,
            a.datum,
            a.zeit,
            a.raum,
            b.bezeichnung,
            c.nachname
            
          FROM
            termin a
            
          INNER JOIN benutzer_has_kurs p
                ON a.Kurs_idKurs=p.Kurs_idKurs
          INNER JOIN kurs b
                ON b.idKurs=a.Kurs_idKurs
          INNER JOIN dozent c
                ON a.Kurs_Dozent_idDozent=c.idDozent
          
                
          WHERE 
               p.Benutzer_idBenutzer=1 AND a.datum='$ansichtsdatum'";
    
    $result=$datenbank->query($sql);
} catch (Exception $e) {
    $error = $e->getMessage();
} if (isset($error)) {
    echo "<p>$error</p>";
}
//echo'<pre>';
$all=$result->fetch_all(MYSQLI_ASSOC);
$all=utf8encodeArray($all);
//print_r($all);
//echo'</pre>';
echo json_encode($all);

$datenbank->close();
function utf8encodeArray($array) {
    foreach($array as $key => $value) {
        if (is_array($value)){
            $array[$key] =utf8encodeArray($value);
        }
        elseif (!mb_detect_encoding($value, 'UTF-8', true)){
            $array[$key]=utf8_encode($value);
        }
    }
    return $array;
}


?>
