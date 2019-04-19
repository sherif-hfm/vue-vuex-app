import Vue from 'vue'
import Vuex from 'vuex'
import {store1} from './store1.js'
import {store2} from './store2.js'


Vue.use(Vuex);

export const store= new Vuex.Store({
    modules: {
        store1: store1,
        store2: store2
      },
      state:{
        value:0,       
        showMsgShowStatus:false,
        MsgBoxCallback:null,
    },
    mutations: {
      ShowMessageBox (state,callback) {
      state.showMsgShowStatus=true;
      state.MsgBoxCallback=callback;
    },
    MessageBoxDone (state) {
      state.showMsgShowStatus=false;
      state.MsgBoxCallback();
      state.MsgBoxCallback=null;
    }
    }
});