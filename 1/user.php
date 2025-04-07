<?php
    $bdd = new PDO("mysql:host=localhost;dbname=secu-efficom", "root", "");
    $req = $bdd->prepare("SELECT * FROM user WHERE id=?");
    $req->execute(array($_GET['id']));
    $user = $req->fetch();
    if($user === false){ 
        echo "{\"error\": \"utilisateur non trouvé\"}";
    }else{
        echo json_encode($user);
    }