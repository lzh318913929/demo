<template>
  <div class="common-layout">
    <el-container>
      <!-- :class="['aside',state.isCollapse ? 'hideCollapse' : 'showCollapse']" -->
      <el-aside :class="state.isCollapse ? 'aside' : ''">
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <el-icon :size="30" @click="onCollapse">
              <Expand />
            </el-icon>
          </div>
          <div style="width: 100%;">
            <heads :routes="defaultRoutes"></heads>
          </div>
        </el-header>
        <el-main>
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent,reactive } from 'vue'
import sidebar from './sidebar/index.vue'
import heads from './head/index.vue'
import { useStore } from 'vuex';
import '/@/style.css'

export default defineComponent({
  setup() {
    const store = useStore();
    const defaultRoutes = reactive(store.state.routers)
    // console.log('测定的',defaultRoutes);
    
    const onCollapse = () => { 
      store.commit("TOOGLESIDEBAR");
    }
    return {
      state: store.state,
      onCollapse,
      defaultRoutes
    }
  },
  components: {
    sidebar,
    heads
  }
})
</script>
<style lang="less" scoped>  
.aside {
  width: 100px !important;
}
.el-main{
  padding: 0 !important;
}
.el-header{
  padding: 0 !important;
}
// .hideCollapse{
//   width: 60px !important;
// }
// .showCollapse{
//   width: 250px !important;
// }

</style>
