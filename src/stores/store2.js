export const store2=  {
    namespaced: true,
    state:{
        Counter:0
    },
    mutations: {
        updateCounter (state,value) {
            console.log('store2 updateCounter');
          // mutate state
          state.Counter+=value;
        }
      }   
  }