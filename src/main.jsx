import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAxMnUvJJNaJQ2j-ZBUScVbFb-z6oHOh0E",
  authDomain: "comision-49905-react.firebaseapp.com",
  projectId: "comision-49905-react",
  storageBucket: "comision-49905-react.appspot.com",
  messagingSenderId: "870408681105",
  appId: "1:870408681105:web:0bb50436a2008288e67130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
