<?php


    $bdd = new PDO("mysql:host=localhost;dbname=secu-efficom", "root", "");
    $req = $bdd->prepare("SELECT * FROM user WHERE email=? AND password=?");
    $req->execute(array($_POST['email'],$_POST['password']));
    $user = $req->fetch();
    if($user === false){
        echo "{\"error\": \"login or password invalid\"}";
    }else{
        if($user['password'] == $_POST["password"]){
            echo json_encode($user);
        }else{
            echo "{\"error\": \"login or password invalid\"}";
        }
    }