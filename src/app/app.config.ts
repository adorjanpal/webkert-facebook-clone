import { ApplicationConfig, importProvidersFrom, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { routes } from './app.routes';

// Import the functions you need from the SDKs you need



const firebaseConfig = {

  apiKey: "AIzaSyA9HczVCnn9v5pfbxIGyBQu1_-9EPb2wBE",

  authDomain: "facebookclone-5f8df.firebaseapp.com",

  projectId: "facebookclone-5f8df",

  storageBucket: "facebookclone-5f8df.firebasestorage.app",

  messagingSenderId: "664346177057",

  appId: "1:664346177057:web:ff0cbf665bb96d25c5bd60"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()) 
  ]
};

