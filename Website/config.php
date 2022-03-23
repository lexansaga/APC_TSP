<?php
$con = mysqli_connect("localhost","root", "", "apc_stp");
if ($con){
    echo "Database Connected Sucessfully";
}
else{
    die(mysqli_error($con));
}
?>