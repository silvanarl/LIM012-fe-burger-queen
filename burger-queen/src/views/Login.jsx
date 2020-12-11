import React from "react";

const Login = () => {
  console.log("hello");
  return (
    <div>
      <header></header>
      <main className="login-main-container">
        <form action="" className="main-container-form">
          <label htmlFor="">Ingrese un e-mail:</label>
          <input className="input-login" type="text" placeholder="ejemplo@ejemplo.com" />
          <label htmlFor="">Ingrese una contraseña:</label>
          <input className="input-login" type="password" placeholder="Password" />
          <button type="button">Ingresar</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
