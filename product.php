<?php
     $bdd = new PDO("mysql:host=localhost;dbname=secu-efficom", "root", "");
     $req = $bdd->prepare("SELECT * FROM product WHERE id=? AND published = 1");
     $req->execute(array($_GET['id']));
     $product = $req->fetch();
        ?>
            <div class="product">
                <div class="name"><?= $product['name']?></div>
                <a href="product.php?id=<?= $product['id']?>" class="link">Voir le produit</a>
            </div>