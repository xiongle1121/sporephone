<?php
  header("content-type:application/json");
  $uname=$_REQUEST['userName'];
  $arr=['13511111111','13522222222','13533333333'];
  $result=in_array($uname,$arr);
  $str='';
  if($result){
      $str='exists';
  }else{
      $str='noexists';
  }
  echo json_encode($str);
?>