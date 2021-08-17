import React from 'react';
import './App.css';



    
//onDoubleClick="document.getElementById("modification").style.display="none"
function Cacher(){
  document.getElementById("contenu").style.display="none";
}

function Afficher(){
  document.getElementById("contenu").style.display="block";
}




//notre horloge
class Clock extends React.Component{
  //créons un constructeur de la classe
  constructor(props){ //constructeur de base 
    super(props);
    const d = new Date();
    this.state = {
      date: d,
      jour: '',
      mois: '',
      periode: ''
    };

    this.date1 = new Date();
    this.jj = 'jour';
    this.mm = 'mois';
    this.aa = 'année';
    this.hh = 'heure';
    this.min = 'min';
    this.compteur = 0;
    
    this.formulaire = this.formulaire.bind(this);
    this.jour_form = this.jour_form.bind(this);
    this.mois_form = this.mois_form.bind(this);
    this.annee_form = this.annee_form.bind(this);
    this.heure_form =this.heure_form.bind(this);
    this.minutes_form = this.minutes_form.bind(this);

    
  }

  //on déclare la fonction permettant de modifier la date grace aux paramètre que l'utilisateur aura entre
  jour_form(event){
    this.jj = event.target.value;
    this.jj = parseInt(this.jj);
    
  }
  mois_form(event){
    this.mm = event.target.value;
    this.mm = parseInt(this.mm);
  }
  annee_form(event){
    this.aa = event.target.value;
    this.aa = parseInt(this.aa);
  }
  heure_form(event){
    this.hh = event.target.value;
    this.hh = parseInt(this.hh);
  }
  minutes_form(event){
    this.min = event.target.value;
    this.min = parseInt(this.min);
  }
  formulaire(event){
      if(this.jj >= 0 && this.mm >= 0 && this.aa >= 0 && this.hh >= 0 && this.min >= 0){
        this.setState({
          date: new Date(this.aa, this.mm, this.jj, this.hh, this.min, this.state.date.getSeconds())
        });
        this.compteur = this.compteur + 1;
      }else{
          if(this.jj >= 0 && this.mm >= 0 && this.aa >= 0){
            this.setState({
              date: new Date(this.aa, this.mm, this.jj, this.state.date.getHours(), this.state.date.getMinutes(), this.state.date.getSeconds())
            });
            this.compteur = this.compteur + 1;
          }
           if(this.hh >= 0 && this.min >= 0){
              this.setState({
                date: new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate(), this.hh, this.min, this.state.date.getSeconds())
              });
              this.compteur = this.compteur + 1;
            }
      }  
    event.preventDefault();
  }
   
  //maintenant nous allons ajouter des methodes de cycles de vie
  componentDidMount(){//il nous permet de creer une minuterie car il s'excute apres que la sortie d'un 
    //composant a été rendue dans le dom
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.dayID = setInterval(
      () => this.jour(),
      1
    );
    this.moisID = setInterval(
      () => this.mois(), 
      1
    );
    this.periodeID = setInterval(
      () => this.periode(), 
      1
    );

  }
  componentWillUnmount(){//ici on spprime la minuterie
      clearInterval(this.timerID);
      clearInterval(this.dayID);
      clearInterval(this.moisID);
      clearInterval(this.periodeID);
  }
//la methode tick est utilisée pour modifier l'état global d'un composant
  tick(){
    if(this.compteur == 1){
        this.state.date.setSeconds(this.state.date.getSeconds() + 1);
    } else{
      
      this.setState({
        date: new Date()
      });
    } 
  }
  //cette methode affiche le moment de la journée
  periode(){
    if(this.state.date.getHours() > 4 && this.state.date.getHours() < 12){
      this.setState({
        periode: 'MATIN'
      });
    }else{
      if(this.state.date.getHours() >= 12 && this.state.date.getHours() < 18){
        this.setState({
          periode: 'APRES MIDI'
        });
      }else{
        this.setState({
          periode: 'SOIR'
        });
      }
    }
  }


 //cette methode affiche quel jour sommes nous
  jour(){
    switch(this.state.date.getDay()){
    case 1:
      this.setState({
        jour: 'LUNDI'
      });
      break;
    case 2: 
      this.setState({
        jour: 'MARDI'
      });
      break;
    case 3: 
      this.setState({
        jour: 'MERCREDI'
      });
      break;
    case 4: 
      this.setState({
       jour: 'JEUDI'
      });
      break;
    case 5:
      this.setState({
        jour: 'VENDREDI'
      });
      break;
    case 6: 
      this.setState({
        jour: 'SAMEDI'
      });
      break;
    default : 
      this.setState({
        jour: 'DIMANCHE'
      });
      break;

    }
  }


 //cette methode affiche quel mois sommes nous
  mois(){
    switch(this.state.date.getMonth()){
      
      case 1: 
        this.setState({
           mois: 'FEVRIER'
        });
        break;
      case 2: 
        this.setState({
          mois: 'MARS'
        });
        break;
      case 3: 
        this.setState({
          mois: 'AVRIL'
        });
        break;
      case 4: 
        this.setState({
          mois: 'MAI'
        });
        break;
      case 5:
        this.setState({
          mois: 'JUIN'
        });
        break;
      case 6: 
        this.setState({
          mois: 'JUILLET'
        });
        break;
      case 7: 
        this.setState({
          mois: 'AOUT'
        });
        break;
      case 8:
        this.setState({
          mois: 'SEPTEMBRE'
        }); 
        break;
      case 9: 
      this.setState({
        mois: 'OCTOBRE'
      });
        break;
      case 10: 
        this.setState({
          mois: 'NOVEMBRE'
        });
        break;
      case 11:
        this.setState({
          mois: 'DECEMBRE'
        }); 
        break;
      default: 
        this.setState({
          mois: 'JANVIER'
        });
        break;

    }
  }


  
  
 
  
  
  
  render(){
    return(
      <div className="App">
        <div className="zone1">
          <div className="cadrant">
              <div className="dernier">
                  <h1> {this.state.jour}</h1>
                  <h2> {this.state.periode} </h2>
                  <h1> {this.state.date.getHours()}:{this.state.date.getMinutes()} </h1>
                  <h2>{this.state.date.getDate()}  {this.state.mois} {this.state.date.getFullYear()} </h2>
              </div>
              <div id="contenu"> 
                <form id="formlaire" name="test" onSubmit={this.formulaire} >
                    <label id="Date">Date:
                        <input type="text" name="jour"   onChange={this.jour_form} title="les jours vont du[0 à 31]"/>
                        <input type="text" name="mois"   onChange={this.mois_form} title="les mois de [0(pour janvier) à 11(pour décembre) ]"/>
                        <input type="text" name="année"  onChange={this.annee_form}/>
                    </label>
                    <br />
                    <label id="Horloge">Horloge:
                        <input type="text" name="heure"    onChange={this.heure_form} title="les heures vont de 0 à 23h"/>
                        <input type="text" name="minutes"  onChange={this.minutes_form} title="les minutes vont de 0 à 59"/>
                    </label>
                    <br />
                    <button type="button" id="Annuler" onClick={Cacher} >Annuler</button>
                    <button type="submit" id="Changer" >Changer</button>
                </form>
              </div>
          </div>
        </div>
        <button id="deco" onClick={Afficher} onDoubleClick={Cacher}></button> 
      </div>
    );
  }

}

function App(){
  return (
     <Clock />
  );   
}

export default App;


