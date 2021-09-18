import React from 'react';
import './App.css';
//import creer_user from './serveur/Enregistrement'
//import './serveur/Enregistrement'
//import App from './App';

class Form_inscription extends React.Component{
  constructor(props){
    super(props);

    this.Nom = "";
    this.Pseudo = "";
    this.Email = "";
    this.Phone = "";
    this.Password = "";
    this.ConfirmPassword = "";

    this.inshandlechangeNom = this.inshandlechangeNom.bind(this);
    this.inshandlechangePseudo = this.inshandlechangePseudo.bind(this);
    this.inshandlechangeEmail = this.inshandlechangeEmail.bind(this);
    this.inshandlechangePhone = this.inshandlechangePhone.bind(this);
    this.inshandlechangePassword = this.inshandlechangePassword.bind(this);
    this.inshandlechangeConfirmPassword = this.inshandlechangeConfirmPassword.bind(this);
    //this.inshandleInscription = this.inshandleInscription.bind(this);
  }
  //ces fonctions vont nous permettre de récuperer nos données du formulaire et de l'envoyer dans notre backend pour créer un utilisateur
  inshandlechangeNom(e){
    this.Nom = e.target.value;
  }
  inshandlechangePseudo(e){
    this.Pseudo = e.target.value;
  }
  inshandlechangeEmail(e){
    this.Email = e.target.value;
  }
  inshandlechangePhone(e){
    this.Phone = e.target.value;
  }
  inshandlechangePassword(e){
    this.Password = e.target.value;
  }
  inshandlechangeConfirmPassword(e){
    this.ConfirmPassword = e.target.value;
  }
  /*:inshandleInscription (e){
    if(this.Nom != null && this.Pseudo != null && this.Password != null && this.Phone != null && this.Email != null && this.ConfirmPassword != null){
      if(this.Password === this.ConfirmPassword){
        console.log("Enregistrement en cours");
        creer_user(this.Nom, this.pseudo, this.Email, this.Phone, this.Password);
      }
    }
  }*/
 
  render(){
    return(
      <div >
        <div>
            <h1 id="IDENTIFICATION">IDENTIFICATION</h1>
        </div>
        <div id="Form_inscription1">
            <form>
              <input type="text" placeholder="Nom" id="Nomins" onChange={this.inshandlechangeNom} />
              <input type="text" placeholder="Pseudo" id="Pseudoins" onChange={this.inshandlechangePseudo} />
              <br/>
              <input type="email" placeholder="Email" id="Emailins" onChange={this.inshandlechangeEmail} />
              <input type="phone" placeholder="Phone" id="Phoneins"onChange={this.inshandlechangePhone} />
              <br/>
              <input type="password" placeholder="Password" id="Passwordins" onChange={this.inshandlechangePassword} />
              <input type="password" placeholder="ConfirmPassword" id="ConfirmPasswordins" onChange={this.inshandlechangeConfirmPassword} />
              <br/>
              <input type="button" value="Annuler" id="Annulerins"/> 
              <input type="button" value="Valider" id="Validerins" />
            </form>
         </div>
      </div>
    );
  }
}

class Form_connexion extends React.Component{
  constructor(props){
    super(props);

    this.EmailPhone = "";
    this.Password = "";

    this.conhandleChangeEmailPhone = this.conhandleChangeEmailPhone.bind(this);
    this.conhandleChangePassword = this.conhandleChangePassword.bind(this);
    //this.SignIn = this.SignIn.bind(this);
  }

  conhandleChangeEmailPhone(e){
    this.EmailPhone = e.target.value;
  }
  conhandleChangePassword(e){
    this.Password = e.target.value;
  }

  render(){
    return(
      <div >
        <h1 id="Connexion">Connexion</h1>
        <div id="Form_connexion1">
          <form>
            <label >Email / Phone</label>
            <input type="text" id="EmailPhoneCon" onChange={this.conhandleChangeEmailPhone} />
            <br/>
            <label >Password</label>
            <input type="password" id="PasswordCon" onChange={this.conhandleChangePassword} />
            <br/>
            <p id="oublié"><i>Mot de passe oublié?</i></p>
            <input type="button" value="Sign in" id="Signin" />
          </form>
        </div>
        <div id="Form_connexion2">
          <p>Vous n'avez pas de compte ? <i>S'inscrire maintenant</i></p>
        </div>
        <div id="Form_connexion3">
          <div><img src="" alt="Google"/>Google</div>
          <div><img src="" alt="Facebook"/>Facebook</div>
          <div><img src="" alt="Twitter"/>Twitter</div>
          <div><img src="" alt="Yahoo"/>Yahoo</div>
        </div>
      </div>
    );
  }
}

class Bibliothèque extends React.Component{
  render(){
    return(
     <div>
       <div id="Form_connexion">
          <Form_connexion />
       </div>
       <div id="Form_inscription">
          <Form_inscription />
       </div>
     </div>

    );
  }
}

function App() {
  return (
    <Bibliothèque />
  );
}

export default App;
