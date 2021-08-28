import './App.css';
import React from 'react';

function cacher_afficher(){
  document.getElementById("gérer").style.display = "block";
  document.getElementById("enregistrer").style.display = "none";
}


class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nommodifié: "",
      idmodifié: "",
      duréemodifiée: "",
      prédécesseurmodifié: "",
      successeurmodifié: ""
    };

    this.SupprimerElement = this.SupprimerElement.bind(this);
    this.EnregistrerlesModifications = this.EnregistrerlesModifications.bind(this);
    this.handlemodifierNom = this.handlemodifierNom.bind(this);
    this.handlemodifierId = this.handlemodifierId.bind(this);
    this.handlemodifierDurée = this.handlemodifierDurée.bind(this);
    this.handlemodifierPrédécesseur = this.handlemodifierPrédécesseur.bind(this);
    this.handlemodifierSuccesseur = this.handlemodifierSuccesseur.bind(this);
  }
  handlemodifierNom(e){
    this.setState({nommodifié: e.target.value});
  }
  handlemodifierId(e){
    this.setState({idmodifié: e.target.value});
  }
  handlemodifierDurée(e){
    this.setState({duréemodifiée: e.target.value});
  }
  handlemodifierPrédécesseur(e){
    this.setState({prédécesseurmodifié: e.target.value});
  }
  handlemodifierSuccesseur(e){
    this.setState({successeurmodifié: e.target.value});
  }

  SupprimerElement(){
    const t = this.props.tail;
    if(t > 1){
      this.props.SupprimerElement(this.state.idmodifié);
    }else{
      alert("Vous ne pouvez pas supprimer cet élément");
    }
  }

  EnregistrerlesModifications(){
    this.props.EnregistrerlesModifications(
      this.state.nommodifié,
      this.state.idmodifié,
      this.state.duréemodifiée,
      this.state.prédécesseurmodifié,
      this.state.successeurmodifié
    );
  }
 
  render(){
    const product = this.props.contener;
    const name = product.NOM;
    const id = product.ID;
    const durée = product.DUREE;
    const pred = product.PREDECESSEUR;
    const succ = product.SUCCESSEUR;

    return(
      <tr> 
        <td><input type="checkbox" />{name}<br/><input type="text" onChange={this.handlemodifierNom} /> </td> 
        <td>{id}<br/><input type="text" onChange={this.handlemodifierId} /> </td>
        <td>{durée}<br/><input type="number" onChange={this.handlemodifierDurée} /> </td>
        <td>{pred}<br/><input type="text"  onChange={this.handlemodifierPrédécesseur} /> </td>
        <td>{succ}<br/><input type="text" onChange={this.handlemodifierSuccesseur} /> </td>
        <td><br/><button type="button" onClick={this.EnregistrerlesModifications} >Sauvergarder les modifications</button></td> 
        <td><br/><button type="button" onClick={this.SupprimerElement} >Supprimer</button></td>
      </tr>
    );

  }
}

//cette classe nous permet d'afficher nos données du tableau
class Affichage extends React.Component{
  constructor(props){
    super(props);

    this.handleSuppression = this.handleSuppression.bind(this);
    this.EnregistrementNouveau = this.EnregistrementNouveau.bind(this);
  }

  handleSuppression(identifiant){
    this.props.supprimer(identifiant);
  }
  EnregistrementNouveau(nom, id, durée, pred, succ){
    this.props.enregistrer(nom, id, durée, pred, succ);
  }

  render(){
    const element1 = this.props.elementderecherche;
    const taille1 = this.props.taille;
    const rows = [];
    const donnée = this.props.data;

    

    this.props.liste.forEach(element => {
      if(element.ID.indexOf(element1) === -1){
        return;
      }
      rows.push(<List key={element.ID} contener={element} SupprimerElement={this.handleSuppression} EnregistrerlesModifications={this.EnregistrementNouveau} tail={taille1}/>);
    });

    return(
      <form>
       <div id="tousleséléments">
         <table>
           <thead>
             <tr>
               <th>NOM</th>
               <th>ID</th>
               <th>DUREE</th>
               <th>PREDECESSEUR</th>
               <th>SUCCESSEUR</th>
               <th>ENREGISTREMENT</th>
               <th>SUPPRESSION</th>
             </tr>
           </thead>
           <tbody>{rows}</tbody>
         </table>
       </div>

      </form>
    );
  }
}

//cette classe va nous rendre un composant permettant d'ajouter nos données
class Enregistrement extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nom: "",
      id: "",
      durée: 0,
      prédécesseur: "",
      successeur: "",
      passeur: 0
    };

    this.handleGerer = this.handleGerer.bind(this);
    this.handleChangeEnregistrer = this.handleChangeEnregistrer.bind(this);
    this.handleChangenom = this.handleChangenom.bind(this);
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangedurée = this.handleChangedurée.bind(this);
    this.handleChangeprédécesseur = this.handleChangeprédécesseur.bind(this);
    this.handleChangesucesseur = this.handleChangesucesseur.bind(this);

    this.pass = 0;
  }

  handleGerer(){
    this.props.Gestion(1);
  }
  handleChangeEnregistrer(e){
    if(this.state.id != "" && this.props.taille == 0){
      this.props.Enregistrer(
        this.state.nom, 
        this.state.id, 
        this.state.durée, 
        this.state.prédécesseur, 
        this.state.successeur);
  
  
      e.preventDefault();
    }

    if(this.state.id != "" && this.props.taille  > 0){
      this.props.clé.forEach(element => {
        if(this.state.id == element.ID){
          this.pass = 1;
        }
      });
      if(this.pass == 0){
        console.log(this.pass);
        this.props.Enregistrer(
          this.state.nom, 
          this.state.id, 
          this.state.durée, 
          this.state.prédécesseur, 
          this.state.successeur);
    
    
      
        e.preventDefault();
      }else{
        alert("l'identifiant que vous avez entré existe déjà, modifié le et enregistré de nouveau");
        e.preventDefault();
      }
    }

    if(this.state.id == 0){
      alert("Entrer un identifiant");
    }
  }
  handleChangenom(e){
    this.setState({nom: e.target.value});
    
  }
  handleChangeid(e){
    this.setState({id: e.target.value});
  }
  handleChangedurée(e){
    this.setState({durée: e.target.value});
  }
  handleChangeprédécesseur(e){
    this.setState({prédécesseur: e.target.value});
  }
  handleChangesucesseur(e){
    this.setState({sucesseur: e.target.value});
  }
  render(){
    return(
      <form >
        <label >Nom:</label>
        <input type="text" onChange={this.handleChangenom} id="nom" />
        <br/>
        <label >ID:</label>
        <input type="text" onChange={this.handleChangeid} id="id"/>
        <br/>
        <label >Durée:</label>
        <input type="number" onChange={this.handleChangedurée} id="durée" />
        <br/>
        <label >Prédécesseur:</label>
        <input type="text" onChange={this.handleChangeprédécesseur} id="prédécesseur" />
        <br/>
        <label >Successeur:</label>
        <input type="text" onChange={this.handleChangesucesseur} id="successeur" />
        <br/>
        <button type="button"  onClick={this.handleGerer} id="Gérer">Gérer</button>
        <button type="submit"  id="Sauvegarder" onClick={this.handleChangeEnregistrer} >Sauvegarder</button>
      </form>
    );
  }
}

//notre barre de recherche et notre bouton de recherche
class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {paramètre: ""};

    this.handleChangeArguments = this.handleChangeArguments.bind(this);
  }

  handleChangeArguments(e){
    this.props.Rechercher(e.target.value);
  }
  
  render(){
    return(
      <form>
        <input type="text" 
        placeholder="Search"
        value={this.props.arguments} 
        onChange={this.handleChangeArguments} 
        />
      </form>
    );
  }
}

//composant de base celui qui sera rendu au chargement
class Gestionnnaire extends React.Component{
  constructor(props){ 
    const d = []; //[{NOM: "did", ID: "dfdf", DUREE: 12, PREDECESSEUR: "dgfg", SUCCESSEUR: "qsqs"}, {NOM: "will", ID: "345", DUREE: 1, PREDECESSEUR: "dfg", SUCCESSEUR: "dfg"}];
    super(props);
    this.state = {
      arguments: "",
      test: 0,
      taille: d.length,
      store: d
    };

    this.handleFilterArguments = this.handleFilterArguments.bind(this);
    this.handleFilterSauvegarder = this.handleFilterSauvegarder.bind(this);
    this.handleSupprimer = this.handleSupprimer.bind(this);
    this.handleNewEnregistrement = this.handleNewEnregistrement.bind(this);
    this.handleGestion = this.handleGestion.bind(this);

    this.stockage = [];
    
  }

  handleGestion(chiffre){
    if(this.stockage.length != 0){
      const tableau = this.stockage;
      this.setState({
        store: [tableau[0]],
        test: chiffre
      });
      cacher_afficher();
    }else{
      alert("Vous devez enregistrer au moins un élément");
    }
  }

  handleFilterArguments(argument){
    this.setState({
      arguments: argument
    });
  }
  handleFilterSauvegarder(nom, id, dur, préd, succ){
    const tache = {
      NOM: nom,
      ID: id,
      DUREE: dur,
      PREDECESSEUR: préd,
      SUCCESSEUR: succ
    };

    
    this.stockage.push(tache);
    this.setState({
      taille: this.stockage.length,
      store: [this.stockage[0]],
      test: 4
    });

  }

  handleSupprimer(identifiant){
    var i = 0;
    for(i; i < this.stockage.length; i++){
      if(this.stockage[i].ID == identifiant){
        this.stockage.splice(i, 1);
        this.setState({
          store: [this.stockage[0]],
          test: 3
        });
      }
    }
  }

  //cette méthode sert a enregistrer de nouveau ou à modifier les éléments qui s'y trouvaient
  handleNewEnregistrement(nom, id, dur, préd, succ){
    var i = 0, j = 0;
    for(i; i < this.stockage.length; i++){
      if(this.stockage[i].ID == id){ 
        if(nom != undefined && nom != 0){
          this.stockage[i].NOM = nom;
          
        }
        if(id != undefined ){
          this.stockage[i].ID = id;
        }
        if(dur != undefined && dur != 0){
          this.stockage[i].DUREE = dur;
        }
        if(préd != undefined && préd != 0){
          this.stockage[i].PREDECESSEUR = préd;
        }
        if(succ != undefined && succ != 0){
          this.stockage[i].SUCCESSEUR = succ;
        }
        j = 1;
        this.setState({
          store: [this.stockage[0]],
          test: 2
        });
      }
    }
      if(j == 0){
        if(id != undefined && id != 0){
          const tache = {
            NOM: nom,
            ID: id,
            DUREE: dur,
            PREDECESSEUR: préd,
            SUCCESSEUR: succ
          };
          this.stockage.push(tache);
          
          this.setState({
            store: [this.stockage[0]],
            test: 2
          });
        }else{
          alert("impossible d'ajouter un nouvel élément");
        }
      }
    
  }

  //mise à jour 
  Jour(){
    var i = 1;
      var tableau = this.stockage;
      for(i; i < tableau.length; i ++){
        this.state.store.push(tableau[i]);
      }
      this.setState({test: 0});
  }

  //ccette méthodea pour but d'actualiser notre store lorsque les données ont finis d'être chargés, modifiés, supprimés ou ajoutés de nouveau
  tick(){
    if(this.state.test == 1){
      this.Jour();
      this.setState({taille: this.state.store.length});
    }
    if(this.state.test == 2){
      this.Jour();
      this.setState({taille: this.state.store.length});
    }
    if(this.state.test == 3){
      this.Jour();
      this.setState({taille: this.state.store.length});
    }
    if(this.state.test == 4){
      this.Jour();
      this.setState({taille: this.state.store.length});
    }
  }

  componentDidMount(){
    this.Timertick = setInterval(() => {
      this.tick()
    }, 1);
  }
  componentWillUnmount(){
    clearInterval(this.Timertick);
  }

  render(){
    return(
      <div id="Gestionnaire">
        <div id="gérer">
         <Search arguments={this.state.arguments} Rechercher={this.handleFilterArguments} />
         <Affichage elementderecherche={this.state.arguments} liste={this.state.store} supprimer={this.handleSupprimer} enregistrer={this.handleNewEnregistrement} taille={this.state.taille} />
        </div>
        <div id="enregistrer">
          <Enregistrement Enregistrer={this.handleFilterSauvegarder} Gestion={this.handleGestion} clé={this.state.store} taille={this.state.taille} />
        </div>
      </div>
    );
   
  }
}

function App() {
  return (
    <div>
        <Gestionnnaire />
    </div>
  );
}

export default App;
