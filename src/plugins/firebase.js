import Vue from 'vue'
import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: 'aaaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase
