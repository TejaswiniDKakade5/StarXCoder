<?

//Change the 25 to  however many minutes you want to countdown
$targetDate = strtotime('+3 days');
$actualDate = time();
echo $targetDate;
echo $actualDate;
$sql2 = "UPDATE biding SET start='$actualDate', end='$targetDate' WHERE      
id='$id'";
$result2 = mysqli_query($con, $sql2) or die(mysqli_error());

?>