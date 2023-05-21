# Semaforo-Inteligente

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="site2.css">
  <style>
      body{
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
}

body *{
    box-sizing: border-box;
}

.main-login{
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at center, rgb(58, 1, 122), black);
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-login{
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
}

.left-login > h1{
    font-size: 3vw;
    color: rgb(8, 8, 219);
}

.left-img{
    width: 35vw;
}

.rigth-login{
    width: 80vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-login{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
}

.card-login > h1{
    color: rgb(8, 8, 219);
    font-weight: 800;
    margin: 0;
}

.textfield{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
}

.textfield > input{
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
}

.textfield > label{
    color: #f0ffffde;
    margin-bottom: 10px;

}

.textfield > input::placeholder{
    color: #f0ffff94
}

.btn-login{
    width: 100%;
    padding: 16px 0px;
    margin: 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #2b134b;
    background-color: rgb(8, 8, 219);
    cursor: pointer;
    box-shadow: 0px 10px 40px -12px rgb(8, 8, 219);
}

@media only screen and (max-width: 950px){
    .card-login{
        width: 85%;
    }
}

@media only screen and (max-width: 600px){
    .main-login{
        flex-direction: column;
    }
    .left-login > h1{
        display: none;
    }
    .left-login{
        width: 100%;
        height: auto;
    }
    .left-login > img{
        width: 50vw;
    }
    .card-login{
        width: 90;
    }
}
  </style>
</head>
<body>
    <div class="main-login">
        <div class="left-login">
            <h1>Faça Login <br>E acesse o Semaforo Inteligente</h1>
            <img src="walk-in-the-city-animate.svg" class="left-img" alt="Jovem">
        </div>
        <div class="right-login">
            <div class="card-login">
                <h1>LOGIN</h1>
                <div class="textfield">
                    <label for="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Usuário">
                </div>
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha">
                </div>
                <button class="btn-login">Login</button>
                <button class="btn-login">Cadastro</button>
            </div>
        </div>
    </div>
</body>
</html>
