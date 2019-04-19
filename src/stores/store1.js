import * as state from './store1.state.js'
export const store1=  {
    namespaced: true,
    state:state.state,
    getters: {
        DoubleCounter:state =>{
            return state.Counter * 2;
        }
    },
    mutations: {
        updateCounter (state,value) {
            console.log('store1 updateCounter');
          // mutate state
          state.Counter+=value;
        }
      },
      actions: {
        updateCounter (context,value) {
            setTimeout(() => {
                context.commit('updateCounter',value)      
            }, 2000);
        },
        updateCounter2 (context,value) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateCounter',value)
                  resolve('ok')
                }, 2000)
              })
        }
      }
  }