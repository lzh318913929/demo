<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    :collapse-transition="false"
    :router="true"
    :collapse="state.isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  <sidebar :routes="routes"></sidebar>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex';
import sidebar from './sidebar.vue'
import defaultRoutes from '/@/router/defaultRoutes/index'

export default defineComponent({
  
  setup() {
    const route = ['/login']
    let newRoutes: Array<any>  = []
    defaultRoutes.forEach((element: any, i: any) => {
      let index = route.findIndex(item => item == element.path)
      if(index == -1) newRoutes.push(defaultRoutes[i])
    });
    
    const routes: Array<any> = newRoutes
    
    const store = useStore();
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log('欢迎来到北京')
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
        state: store.state,
        handleOpen,
        handleClose,
        routes,
    };
    
  },
  components: {
    sidebar
  }
})
</script>
<style scoped lang="less">
.el-menu-vertical-demo{
  height: 100vh;
}

// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 60px !important;
// }

// .el-menu{
//   border-right: 0 !important;
// }
// .el-menu-item{
//   display: flex;
//   align-items: center;
// }
.el-menu--collapse {
  width: 100px !important;
}
</style>