<template>
  <div>
    <b-row class="mt-2">
      <b-col sm="6" md="8" lg="8">
        <h3>
          Main Dishes
        </h3>
        <b-row class="mb-5">
          <b-col sm="12" md="4" lg="4" v-for="mainItem in mainDishesArr" :key="mainItem.id">
            <DishesCardComp @selectedItem="selectedItem" :mainItem="mainItem" />
          </b-col>
        </b-row>
        <h3>
          Side Dishes
        </h3>
        <b-row class="mb-5">
          <b-col sm="12" md="4" lg="4" v-for="sideItem in sideDishesArr" :key="sideItem.id">
            <DishesCardComp @selectedItem="selectedItem" :sideItem="sideItem" />
          </b-col>
        </b-row>
        <h3>
          Desserts
        </h3>
        <b-row>
          <b-col sm="12" md="4" lg="4" v-for="dessert in dessertsArr" :key="dessert.id">
            <DishesCardComp @selectedItem="selectedItem" :dessert="dessert" />
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="6" md="4" lg="4">
        <OrderInfoCardComp :selectedDish="selectedDish" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DishesCardComp from './DishesCardComp.vue'
import OrderInfoCardComp from './OrderInfoCardComp.vue'
export default {
  name: 'Item List',
  components: {
    DishesCardComp,
    OrderInfoCardComp
  },
  data () {
    return {
      selectedDish: {},
      mainDishesArr: [
        {
          id: '1',
          dishType: 'Main',
          title: 'Rice',
          avatar: 'https://thumbs.dreamstime.com/b/delicious-spicy-chicken-fried-rice-homemade-cast-iron-wok-94297571.jpg',
          price: 100
        },
        {
          id: '2',
          dishType: 'Main',
          title: 'Rotty',
          avatar: 'https://img.freepik.com/premium-photo/indian-food-khakra_57665-10570.jpg',
          price: 20
        },
        {
          id: '3',
          dishType: 'Main',
          title: 'Noodles',
          avatar: 'https://img.freepik.com/premium-photo/perfect-delicious-look-yakisoba-fried-noodles_890183-6480.jpg?w=1060',
          price: 150
        }
      ],
      sideDishesArr: [
        {
          id: '1',
          dishType: 'Side',
          title: 'Wadai',
          avatar: 'https://thumbs.dreamstime.com/z/sambar-vada-south-indian-food-wadai-sambhar-chutney-wooden-background-273542925.jpg?w=992',
          price: 45
        },
        {
          id: '2',
          dishType: 'Side',
          title: 'Dhal curry',
          avatar: 'https://www.wearesovegan.com/wp-content/uploads/2021/11/vegansimpledhalrecipes1.jpg',
          price: 75
        },
        {
          id: '3',
          dishType: 'Side',
          title: 'FIsh curry',
          avatar: 'https://static.toiimg.com/thumb/58985156.cms?width=1200&height=900',
          price: 120
        }
      ],
      dessertsArr: [
        {
          id: '1',
          dishType: 'Desserts',
          title: 'Watalappam',
          avatar: 'https://recipe30.com/wp-content/uploads/2018/10/Watalappam.jpg',
          price: 40
        },
        {
          id: '2',
          dishType: 'Desserts',
          title: 'Jelly',
          avatar: 'https://t3.ftcdn.net/jpg/02/65/44/64/360_F_265446412_EuefgWWRqi3QOrJMEy8fuZMFMtza5AgA.jpg',
          price: 20
        },
        {
          id: '3',
          dishType: 'Desserts',
          title: 'Pudding',
          avatar: 'https://img.freepik.com/premium-photo/caramel-flan-with-caramel-sauce-top-isolated-white-background-illustration-images_796580-1365.jpg',
          price: 25
        }
      ]
    }
  },
  methods: {
    selectedItem: async function (object) {
      this.selectedDish = object
    }
  }
}
</script>
