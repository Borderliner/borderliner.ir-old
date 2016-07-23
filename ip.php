<?php
header('Content-Type:application/json');
echo '{"ip":"'.$_SERVER['REMOTE_ADDR'].'"}';
?>