importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCJ1IXVb_jaQ14rUSymvD57ksUhOakURG0",
  authDomain: "mimodulonotificaciones.firebaseapp.com",
  projectId: "mimodulonotificaciones",
  storageBucket: "mimodulonotificaciones.firebasestorage.app",
  messagingSenderId: "863251158546",
  appId: "1:863251158546:web:542340852d4657e4c72acb"
});

const messaging = firebase.messaging();
