const getUserInfo = async () => {
    let id = localStorage.getItem("userId");
    if(id){
        let result = await fetch("http://securitédev/user.php?id=" + id);
        let data = await result.json();
        document.querySelector("#email .value").innerHTML = data.email;
        document.querySelector("#password .value").innerHTML = data.password;
    }else{
        alert("Vous devez être connecté pour afficher votre profil");
    }
}

getUserInfo();