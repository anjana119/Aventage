<template>
  <div>
    <b-table hover :fields="fields" :items="items">
      <template #cell(avatar)="data">
        <b-img class="setBorder" v-bind="mainProps" :src="data.item.avatar" rounded alt="Rounded image"></b-img>
      </template>
      <template #cell(action)="data">
        <b-button variant="outline-warning" size="sm" :id="'update_' + data.item.title" @click="handleUpdateTableData(data.item)">
          <b-icon icon="plus-circle-fill" class="mt-1"></b-icon>
        </b-button>
        <b-button variant="outline-danger" size="sm" :id="'delete_' + data.item.title" @click="handleActionEvents(data.item)">
          <b-icon icon="trash" class="mt-1"></b-icon>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import data from '../data/Config.json'
export default {
  name: 'Table Component',
  props: {
    itemDetails: {
      type: Object,
      default: null
    },
    clearTable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mainProps: { width: 45, height: 45, class: 'm1' },
      condition: false,
      items: [],
      fields: data.table_Comp_Table_Fields
    }
  },
  watch: {
    itemDetails: {
      handler (val) {
        if (val instanceof Object) {
          this.handleTableData(val)
        }
      },
      immediate: true,
      deep: true
    },
    clearTable: {
      handler (val) {
        if (val === true) {
          this.items = []
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleUpdateTableData (object) {
      let obj = {
        avatar: object.avatar,
        title: object.title,
        qty: 1,
        price: object.total / object.qty
      }
      this.handleTableData(obj)
    },
    handleTableData: async function (object) {
      try {
        let obj = {
          avatar: object.avatar,
          title: object.title,
          qty: 1,
          total: object.price,
          dish: object.dishType
        }
        if (this.items.length === 0) {
          this.items.push(obj)
        } else {
          for (let x = 0; x < this.items.length; x++) {
            if (this.items[x].title === object.title) {
              this.items[x].qty = this.items[x].qty + 1
              this.items[x].total = this.items[x].total + object.price
              this.handleTotalValuesInTable()
              this.handleCheckConditions()
              return this.items
            }
          }
          for (let x1 = 0; x1 < this.items.length; x1++) {
            if (this.items[x1].title !== object.title) {
              this.items.push(obj)
            }
          }
        }
        this.removeDuplicates()
        this.handleTotalValuesInTable()
        this.handleCheckConditions()
      } catch (e) {
        console.log(e)
      }
    },
    removeDuplicates () {
      this.items = this.items.filter((item, index) => this.items.indexOf(item) === index)
      console.log(this.items)
    },
    handleTotalValuesInTable () {
      let qty = 0
      let price = 0
      for (let s = 0; s < this.items.length; s++) {
        qty = qty + this.items[s].qty
        price = price + this.items[s].total
      }
      this.$emit('handleTotalValues', qty, price, this.items.length)
    },
    handleActionEvents (item) {
      for (let x = 0; x < this.items.length; x++) {
        if (this.items[x].title === item.title) {
          let unitPrice = this.items[x].total / this.items[x].qty
          this.items[x].qty = this.items[x].qty - 1
          this.items[x].total = this.items[x].total - unitPrice
        }
        if (this.items[x].qty === 0) {
          this.items.splice(x, 1)
        }
      }
      this.handleCheckConditions()
      this.handleTotalValuesInTable()
    },
    handleCheckConditions () {
      if (this.items.length === 0) {
        this.condition = false
      } else {
        for (let c = 0; c < this.items.length; c++) {
          if (this.items[c].dish === 'Side') {
            this.condition = true
          } else {
            this.condition = false
          }
        }
      }
      this.$emit('handleEmitConditionForProcessNext', this.condition, this.items)
    }
  }
}
</script>

<style scoped>
.setBorder {
    border: 1px solid rgb(162 162 162);
    box-shadow: 0px 0px 2px 1px #848484;
}
</style>
