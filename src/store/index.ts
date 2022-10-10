import { createStore } from 'vuex';
export default createStore({
  state () {
    return {
      isCollapse: false,
      routers: [],
    }
  },
  mutations: {
    TOOGLESIDEBAR (state: any) {
      state.isCollapse = !state.isCollapse
    },
    ADDROUTER(state: any,item: string, ) {
      console.log(item, '测大爹的的');
      state.routers.push(item)
    }
  }
});