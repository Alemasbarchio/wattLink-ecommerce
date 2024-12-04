
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './routers';
import { CartProductProvider } from './context/cartContext';
import { initializeApp } from "firebase/app";




const firebaseConfig = {

  apiKey: "AIzaSyAcgMRByMs-LanZUadlhRQCKVic-Ti2XGA",

  authDomain: "coderhouse-ecommerce-c81f8.firebaseapp.com",

  projectId: "coderhouse-ecommerce-c81f8",

  storageBucket: "coderhouse-ecommerce-c81f8.appspot.com",

  messagingSenderId: "246921495771",

  appId: "1:246921495771:web:4522ef449228710f0bb8fe"

};


// Initialize Firebase

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CartProductProvider>
       
    <Routers />
       
  </CartProductProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

