<template>
  <div>
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col sm="4">
          <div class="clearfix">
            <b-img
              left
              src="https://www.creativefabrica.com/wp-content/uploads/2021/09/14/MR-Logo-design-vector-Graphics-17267195-1-580x386.jpg"
              alt="Left image"
              class="maxHeight"
            ></b-img>
          </div>
        </b-col>
        <b-col sm="8">
          <div>
            <b-nav tabs fill>
              <b-nav-item
                @click="handleNavBarEvents('Menu')"
                :active="activeMenu === 0 ? true : false"
              >
                Food Menu
              </b-nav-item>
              <b-nav-item
                @click="handleNavBarEvents('Reports')"
                :active="activeMenu === 1 ? true : false"
              >
                Reports
              </b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Top Header',
  data () {
    return {
      activeMenu: 0
    }
  },
  methods: {
    handleNavBarEvents (param) {
      param === 'Menu' ? this.activeMenu = 0 : this.activeMenu = 1
      this.$emit('handleNavigation', this.activeMenu)
    }
  }
}
</script>

<style scoped>
.maxHeight {
  max-height: 60px;
}
</style>
