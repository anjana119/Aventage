<template>
  <div>
    <TopHeader @handleNavigation="handleNavigation" />
    <ItemList class="m-4 p-2" v-if="showComp === 0"/>
    <Dashboard class="m-4 p-2" v-if="showComp === 1"/>
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import ItemList from './ItemList.vue'
import Dashboard from './Dashboard.vue'
export default {
  name: 'Main',
  components: {
    TopHeader,
    ItemList,
    Dashboard
  },
  data () {
    return {
      showComp: 0
    }
  },
  methods: {
    handleNavigation (con) {
      this.showComp = con
    }
  }
}
</script>
