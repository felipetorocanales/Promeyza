import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {getFirestore,collection,addDoc,onSnapshot} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpU89NWsSufRxSJfu-gB_MjYwfHKxng04",
    authDomain: "promeiza-b6fda.firebaseapp.com",
    databaseURL: "https://promeiza-b6fda-default-rtdb.firebaseio.com",
    projectId: "promeiza-b6fda",
    storageBucket: "promeiza-b6fda.firebasestorage.app",
    messagingSenderId: "88796512485",
    appId: "1:88796512485:web:ad8a222f7e4bdafa40940c",
    measurementId: "G-0TCEHMYMP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

onSnapshot(collection(db, "firmas"), (snapshot) => {
    let sum = 0
    snapshot.forEach((doc) => {
        if (doc.data()){
            sum++;
        }   
    });
    document.getElementById("sum-firmas").innerHTML = sum;
});

document.getElementById("formulario").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form submission
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre && email) {
        try {
            await addDoc(collection(db, "firmas"), {
                nombre: nombre,
                email: email,
                fecha: new Date().toISOString()
            });
            console.log("Firma añadida correctamente");
        } catch (e) {
            console.error("Error al añadir la firma: ", e);
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

