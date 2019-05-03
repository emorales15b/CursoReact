<?php 
$out = shell_exec("/usr/local/cpanel/3rdparty/lib/path-bin/git pull 2>&1");
var_dump($out);
?>