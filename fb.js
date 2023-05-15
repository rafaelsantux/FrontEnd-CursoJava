/**
 * Configurações so Firebase
 * 
 * IMPORTANTE!
 * Troque os valores de 'firebaseConfig' pelos dados do SEU FIREBASE!
 **/
const firebaseConfig = {
    apiKey: "AIzaSyDazdPJL7bKcqwaPe7mOsvObakPV-FumtI",
    authDomain: "frontendeirosrf.firebaseapp.com",
    projectId: "frontendeirosrf",
    storageBucket: "frontendeirosrf.appspot.com",
    messagingSenderId: "556068870453",
    appId: "1:556068870453:web:75bc90b3f891a97464147c"
  };


// Incializa o Firebase
firebase.initializeApp(firebaseConfig);

// Incializa o Firebase Authentication
const auth = firebase.auth();

// Define o provedor de autenticação
var provider = new firebase.auth.GoogleAuthProvider();
  