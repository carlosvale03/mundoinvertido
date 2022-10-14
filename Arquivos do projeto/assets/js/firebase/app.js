// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxCxi3eF-qQyTe88Gm2KtpdDgkRhqJMns",
    authDomain: "projeto-teste-2558e.firebaseapp.com",
    projectId: "projeto-teste-2558e",
    storageBucket: "projeto-teste-2558e.appspot.com",
    messagingSenderId: "351609161963",
    appId: "1:351609161963:web:a77e51378ca48088f796ae"
}

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app