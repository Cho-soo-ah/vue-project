<template>
  <div>
    <div class="menu">
      <a v-for="(link, index) in links" :key="index">{{ link }}</a>
    </div>
  </div>
  <transition name="fade">
    <Discount v-if="showDiscount" :percent="percent" />
  </transition>
  <button @click="priceSort">가격순정렬</button>
  <button @click="reverseSort">가격역순정렬</button>
  <button @click="nameSort">이름순정렬</button>
  <button @click="backSort">되돌리기</button>
  <transition name="fade">
    <Modal
      :modal="modal"
      :data="data"
      :clicked="clicked"
      @modalClose="modal = false"
    />
  </transition>
  <Card
    v-for="(item, i) in data"
    :key="i"
    :item="item"
    @modalOpen="
      modal = true;
      clicked = $event;
    "
  />
</template>

<script>
import data from "./assets/data";
import Card from "./components/Card.vue";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      data: data,
      originData: [...data],
      modal: false,
      clicked: 0,
      links: ["Home", "Products", "About"],
      showDiscount: true,
      percent: 20,
    };
  },
  methods: {
    priceSort() {
      this.data.sort((a, b) => {
        return a.price - b.price;
      });
    },
    reverseSort() {
      this.data.sort((a, b) => {
        return b.price - a.price;
      });
    },
    nameSort() {
      this.data.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    },
    // backSort() {
    //   this.data.sort((a, b) => {
    //     return a.id - b.id;
    //   });
    // },
    backSort() {
      this.data = [...this.originData];
    },
  },
  mounted() {
    const timer = setInterval(() => {
      this.percent--;
      if (this.percent == 0) {
        clearInterval(timer);
      }
    }, 1000);
  },
  components: { Card, Modal, Discount },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
  text-decoration: none;
}
/* animation */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
