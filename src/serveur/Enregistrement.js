import  firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

//cette procédure permet d'inscrire un utilisateur un utilisant un email et un mot de pa
function smsverificationemail(){
    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {

    });
}
function creeruserwithemailpassword(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        var success = "vraie";
        return success;
    })
    .catch((error) => {
        var errorCode = error.errorCode;
        var errorMessage = error.message;
        var echec = "faux";
        return echec;
    });
}

function connecteruserwithemailpassword(email, password){
    firebase.auth().signInWithEEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            var success = "vraie";
            return success;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var echec = "faux";
            return echec;
        })
}

function miseajouruser(pseudo, phone){
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: pseudo,
        phoneNumber: phone
    }).then(() => {
        console.log("mise à jour du pseudo et du telephone réussit");
    }).catch((error) => {
        console.log("voici l'erreur");
        console.log(error.code+ "" +error.message);
    })
}
//cette  fonction nous permet de creer un utilisateur grace aux données de notre interface utilisateur
function creer_user(nom ,pseudo, email, phone,  password){
    //En utilisant l'email et le mot de passe nous allons créer un utilisateur
    var result = "";
    result = creeruserwithemailpassword(email, password);
    if(result == "vraie"){
        var result1;
        result1 = connecteruserwithemailpassword(email, password);
        if(result1 == "vraie"){
            smsverificationemail();
            miseajouruser(pseudo, phone);
        }else{
            console.log("problème de connection patientez svp");
        }

    }else{
        console.log("Identifiez-vous de nouveau");
    }
}


export default creer_user;