import React from 'react';
import GoogleLogin from 'react-google-login';
import "./index.css";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

function App() {
  const respuestaGoogle=(respuesta)=>{
    console.log(respuesta);
    console.log(respuesta.profileObj);
  }

  return (
    <div className="min-h-screen">
      <GoogleLogin
        clientId='159932420890-pdthvht0u1v7sqius893bmb8itijobto.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;