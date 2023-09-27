<template>
  <div>
    <b-row class="mt-2">
      <b-col sm="6" md="8" lg="8">
        <h3>
          Main Dishes
        </h3>
        <b-row class="mb-5">
          <b-col
            sm="12"
            md="4"
            lg="4"
            v-for="mainItem in mainDishesArr"
            :key="mainItem.id"
          >
            <DishesCardComp
              @selectedItem="selectedItem"
              :mainItem="mainItem"
            />
          </b-col>
        </b-row>
        <h3>
          Side Dishes
        </h3>
        <b-row class="mb-5">
          <b-col
            sm="12"
            md="4"
            lg="4"
            v-for="sideItem in sideDishesArr"
            :key="sideItem.id"
          >
            <DishesCardComp
              @selectedItem="selectedItem"
              :sideItem="sideItem"
              :array="array"
            />
          </b-col>
        </b-row>
        <h3>
          Desserts
        </h3>
        <b-row>
          <b-col
            sm="12"
            md="4"
            lg="4"
            v-for="dessert in dessertsArr"
            :key="dessert.id"
          >
            <DishesCardComp
              @selectedItem="selectedItem"
              :dessert="dessert"
            />
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="6" md="4" lg="4">
        <OrderInfoCardComp
          :selectedDish="selectedDish"
          @handleComponentIsValid="handleComponentIsValid"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DishesCardComp from './DishesCardComp.vue'
import OrderInfoCardComp from './OrderInfoCardComp.vue'
import APIGetDishes from '../mixins/APIGetDishes'
import data from '../data/Config_Dishes_Details.json'
export default {
  name: 'Item List',
  mixins: [APIGetDishes],
  components: {
    DishesCardComp,
    OrderInfoCardComp
  },
  data () {
    return {
      selectedDish: {},
      mainDishesArr: [],
      sideDishesArr: [],
      dessertsArr: [],
      array: []
    }
  },
  created () {
    this.getAllDesserts()
    this.getAllSideDishes()
    this.getAllMainDishes()
  },
  methods: {
    getAllMainDishes: async function () {
      try {
        this.mainDishesArr = await this.fetchMainDishes()
      } catch (e) {
        this.mainDishesArr = data.main
      }
    },
    getAllSideDishes: async function () {
      try {
        this.sideDishesArr = await this.fetchSideDishes()
      } catch (e) {
        this.sideDishesArr = data.side
      }
    },
    getAllDesserts: async function () {
      try {
        this.dessertsArr = await this.fetchDesserts()
      } catch (e) {
        this.dessertsArr = data.dessert
      }
    },
    selectedItem: async function (object) {
      this.selectedDish = object
    },
    handleComponentIsValid (arr) {
      this.array = arr
    }
  }
}
</script>
