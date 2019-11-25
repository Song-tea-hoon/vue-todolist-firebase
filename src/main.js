import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";
import firebaseConfig from "./api/firebaseConfig";

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
