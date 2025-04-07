<?php
    $bdd = new PDO("mysql:host=localhost;dbname=secu-efficom", "root", "");
    if(!empty($_POST) && !empty($_POST['message'])){
        $req = $bdd->prepare("INSERT INTO post VALUES('',NOW(),?)");
        $req->execute(array($_POST['message']));
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="post.css">
</head>
<body>
    <div class="list-post">
        <?php
             $req = $bdd->prepare("SELECT * FROM post ORDER BY date DESC");
             $req->execute(array());
             $postList = $req->fetchAll();
             foreach($postList as $post){
                ?>
                    <div class="post">
                        <div class="date">Le <?= (new DateTime($post['date']))->format('d/m/Y')?></div>
                        <div class="message"><?= htmlentities($post['message']) ?></div>
                    </div>
                <?php
             }
        ?>

        <form method="post" class="post-form">
            <textarea name="message"></textarea>
            <input type="submit" value="Envoyer">
        </form>
    </div>
</body>
</html>