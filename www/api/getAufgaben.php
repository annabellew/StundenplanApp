<?php
try {
    require_once 'dbConnect.php';
    
    $sql= 'SELECT 
            p.Kurs_idKurs,
            b.code,
            a.titel,
            a.datum,
            a.zeit,
            c.bezeichnung,
            d.kategorieName
          FROM
            aufgabe a
            
          INNER JOIN benutzer_has_kurs p
                ON a.Kurs_idKurs=p.Kurs_idKurs
          INNER JOIN farbe b
                ON b.idFarbe=p.Farbe_idFarbe
          INNER JOIN kurs c
                ON c.idKurs=p.Kurs_idKurs
          INNER JOIN kategorie d
                ON d.idKategorie=a.Kategorie_idKategorie
          WHERE
                a.Benutzer_idBenutzer=1
          ORDER BY datum';
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
