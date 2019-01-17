import Vue from 'vue'
import Vuex from 'vuex'
import {instance} from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
      authUser (state, userData){
        state.idToken = userData.token;
        state.userId = userData.userId;
      }
  },
  actions: {
      signup({commit}, authData){
        instance.post('/signupNewUser?key=AIzaSyAMi8m6An_lV_s97VJourGA3a8oJBHvSZ4', 
        {email: authData.email, password: authData.password, returnSecureToken: true})
        .then(response => {
           console.log(response);
           commit('authUser', {
              token: response.data.idToken,
              userId: response.data.localId
           })
        })
        .catch(error => console.log(error));
      },

      login({commit}, authData){
        instance.post('/verifyPassword?key=AIzaSyAMi8m6An_lV_s97VJourGA3a8oJBHvSZ4', 
        {email: authData.email, password: authData.password, returnSecureToken: true})
        .then(response => {
          console.log(response);
          commit('authUser', {
             token: response.data.idToken,
             userId: response.data.localId
          })
         })
        .catch(error => console.log(error));
      }
  },
  getters: {

  }
})