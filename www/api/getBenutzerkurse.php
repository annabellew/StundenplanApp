<?php
try {
    require_once 'dbConnect.php';
    $sql = 'SELECT 
            p.Benutzer_idBenutzer,
            p.Kurs_idKurs,
            h.bezeichnung
          FROM
            benutzer_has_kurs p,
            kurs h
          WHERE
			p.Benutzer_idBenutzer=1 AND
            p.Kurs_idKurs = h.idKurs
          ORDER BY bezeichnung';
    $result = $datenbank->query($sql);
} catch (Exception $e) {
    $error = $e->getMessage();
}
if (isset($error)) {
    echo "<p>$error</p>";
}
//echo '<pre>';
$all = $result->fetch_all(MYSQLI_ASSOC);
$all = utf8encodeArray($all);
//print_r($all);
//echo '</pre>';
echo json_encode($all);
$datenbank->close();

function utf8encodeArray($array) {
    foreach($array as $key =>  $value) {
        if(is_array($value)) {
            $array[$key] = utf8encodeArray($value);
        }
        elseif(!mb_detect_encoding($value, 'UTF-8', true)) {
            $array[$key] = utf8_encode($value);
        }
    }
    return $array;
} 