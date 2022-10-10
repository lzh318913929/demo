<template>
  <div>
    <template v-for="(item,index) in routes" :key="index">
      
      <el-menu-item v-if="!item.children" :index="item.path" @click="addRouter(item)">
        <component class="icons" :is="item.meta.icon"></component>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <component class="icons" :is="item.meta.icon"></component>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <sidebar :routes="item.children"></sidebar>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
  name: "sidebar",
  props: ['routes'],
  setup(props) {
    const store = useStore()
    const routes = ref(props.routes)
    const addRouter = (item: any) => {
      store.commit("ADDROUTER",item);
      
    }
    return {
      routes,
      addRouter
    }
  },
})
</script>
<style lang="less" scoped>
.icons{
  width: 20px !important;
  height: 20px !important;
  margin-right: 5px !important;
}

</style>
