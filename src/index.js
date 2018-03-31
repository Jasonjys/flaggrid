import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyC47lRbubYO40J7JnfJcofcx6uy3nUyRCM',
  authDomain: 'passwordgrid.firebaseapp.com',
  databaseURL: 'https://passwordgrid.firebaseio.com',
  projectId: 'passwordgrid',
  storageBucket: '',
  messagingSenderId: '778539195766'
})

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)

registerServiceWorker()
export default firebase.firestore()
