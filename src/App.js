import React from 'react';
import './App.css';


class Clock extends React.Component{
  //créons un constructeur de la classe
  constructor(props){ //constructeur de base 
    super(props);
    this.state = {
      date: new Date(),
      jour: '',
      mois: '',
      periode: ''
    };
    
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
      this.setState({
        date: new Date()
      });
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
      <div className="cadrant">
          <div className="dernier">
              <h1> {this.state.jour}</h1>
              <h2> {this.state.periode} </h2>
              <h1> {this.state.date.getHours()}:{this.state.date.getMinutes()} </h1>
              <h2>{this.state.date.getDate()}  {this.state.mois} {this.state.date.getFullYear()} </h2>
          </div>
      </div>
    );
  }
}


function App(){
  return (
      <div className="App">
          <div className="zone1">
             <Clock />
         </div>
        <input type="button"/>
      </div>
  );   
}

export default App;


