<?php
try {
    require_once 'dbConnect.php';
    $sql = 'SELECT * FROM Dozent ORDER BY nachname DESC';
    $result = $datenbank->query($sql);
    print_r ($result);
} catch (Exception $e) {
    $error = $e->getMessage();
}
if (isset($error)) {
    echo "<p>$error</p>";
}

$all = $result->fetch_all(MYSQLI_NUM);
$all = utf8encodeArray($all);
echo '<pre>';
print_r($all);
echo '</pre>';
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
?>
