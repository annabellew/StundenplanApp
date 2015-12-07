<?php
try {
    require_once 'dbConnect.php';
    $sql= 'SELECT * FROM benutzer_has_kurs WHERE Benutzer_idBenutzer=1';
    $result=$datenbank->query($sql);
} catch (Exception $e) {
    $error = $e->getMessage();
} if (isset($error)) {
    echo "<p>$error</p>";
}
//echo'<pre>';
$all=$result->fetch_all(MYSQLI_ASSOC);
$all=utf8encodeArray1($all);
//print_r($all);
//echo'</pre>';
echo json_encode($all);

$datenbank->close();
function utf8encodeArray1($array1) {
    foreach($array1 as $key => $value) {
        if (is_array($value)){
            $array1[$key] =utf8encodeArray1($value);
        }
        elseif (!mb_detect_encoding($value, 'UTF-8', true)){
            $array1[$key]=utf8_encode($value);
        }
    }
    return $array1;
    

}

try {
    require_once 'dbConnect.php';
    $sql= 'SELECT * FROM kurs';
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
    return $array;
    }
$ausgabe=array();
for ($i=0;$i<count($array1);$i++){
    for ($a=0;$a<count($array);$a++){
        if ($array1[i][Kurs_idKurs]==$array[a][idKurs]){
        $ausgabe+=$array[a];
        }
    }
}
    
    print_r($result);
}


?>
