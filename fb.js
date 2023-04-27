/**
 * Configuração do Firebse para o site do Rafael.
 */

const firebaseConfig = {
    apiKey: "AIzaSyDazdPJL7bKcqwaPe7mOsvObakPV-FumtI",
    authDomain: "frontendeirosrf.firebaseapp.com",
    projectId: "frontendeirosrf",
    storageBucket: "frontendeirosrf.appspot.com",
    messagingSenderId: "556068870453",
    appId: "1:556068870453:web:75bc90b3f891a97464147c"
  };

  export { firebaseConfig }
  // Importa o "core" do Firebase.
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  
  //Importa o Authentication.
  import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";


  // Initializa o Firebase.
  const fbapp = initializeApp(firebaseConfig);

  //Especifica o provedor de atutenticação.
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

signInWithPopup (auth, provider)

  var user;

onAuthStateChanged(auth, (user) => {
    if (user) {
        sessionStorage.userData = JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid
        })
    } else {
        delete sessionStorage.userData
    }
});



  