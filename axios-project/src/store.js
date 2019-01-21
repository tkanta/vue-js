import Vue from 'vue'
import Vuex from 'vuex'
import {instance} from './axios-auth'
import globalAxios from 'axios';
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
      authUser (state, userData){
        state.idToken = userData.token;
        state.userId = userData.userId;
      },

      storeUserMutation(state, user){
        state.user = user;
      },
      clearAuth_Mutation(state){
          state.idToken = null;
          state.userId = null;
      }
  },
  actions: {

    //-------------- set timeout logout ------------
    setLogoutTime({commit}, expiration){
        setTimeout(() => {
           commit('clearAuth_Mutation');
           router.replace('/signin');
        },expiration * 1000);
    },
     //---------------sign up ------------------
      signup({commit, dispatch}, authData){
        instance.post('/signupNewUser?key=AIzaSyAMi8m6An_lV_s97VJourGA3a8oJBHvSZ4', 
        {email: authData.email, password: authData.password, returnSecureToken: true})
        .then(response => {
           console.log(response);
            //------ set Token -----
            dispatch('setToken', response);

           commit('authUser', {
              token: response.data.idToken,
              userId: response.data.localId
           })
           
           dispatch('storeUser', authData);
           dispatch('setLogoutTime', response.data.expiresIn);
        })
        .catch(error => console.log(error));

        
      },
     
      //---------------login ------------------
      login({commit, dispatch}, authData){
        instance.post('/verifyPassword?key=AIzaSyAMi8m6An_lV_s97VJourGA3a8oJBHvSZ4', 
        {email: authData.email, password: authData.password, returnSecureToken: true})
        .then(response => {
          console.log(response);

          //------ set Token -----
          dispatch('setToken', response);
          commit('authUser', {
             token: response.data.idToken,
             userId: response.data.localId
          })
         
          dispatch('setLogoutTime', response.data.expiresIn);
         })
        .catch(error => console.log(error));
      },
      
      //--------------- store User ------------------
      storeUser({commit, state}, userData){

        if(!state.idToken){
          return;
        }
        globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      },

      //---------------fetch user ------------------
      fetchUser({commit, state}){
        if(!state.idToken){
          return;
        }
        globalAxios.get('/users.json'+ '?auth=' + state.idToken)
        .then(res => {
           const data = res.data;
           const users = [];
           for(let key in data){
             const user = data[key];
             user.id = key;
             users.push(user);
             console.log(users);
             this.email = users[0].email;
             this.country = users[0].country;

             commit('storeUserMutation', users[0]);
           }
        })
        .catch(err => console.log(err)); 
      },

      //---------------- logout action -------------
      logout_Action({commit}){
          commit('clearAuth_Mutation');
          localStorage.clear();
          router.replace('/signin');
      },

      setToken({commit}, response){
         const now = new Date();
         const expirationDate = new Date (now.getTime() + (response.data.expiresIn * 1000));
         localStorage.setItem('token', response.data.idToken);
         localStorage.setItem('userId', response.data.localId );
         localStorage.setItem('expiresIn', expirationDate);
      },

      //------ Auto Login -------
      tryAutoLogin({commit}){
        const token = localStorage.getItem('token');
        if(!token){
          return
        }
        const expirationDate = localStorage.getItem('expiresIn');
        const now = new Date();
        if(now >= expirationDate){
          return
        }
        const userId = localStorage.getItem('userId');
        commit('authUser', {
            token: token,
            userId: userId
        });
      }
  },
  getters: {
      getUser(state){
        return state.user;
      },
      isAuthenticated(state){
        return state.idToken !== null ; 
      }
  }
})