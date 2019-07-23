<?php

session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
  echo '{
    "message" : "This is only for admins",
    "success" : true
    }';
} else {
  echo '{
  "message": "Not an admin",
  "success": false
  }';
}
?>
