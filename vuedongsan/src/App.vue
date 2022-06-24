<template>
  <div>
    <div class="menu">
      <a v-for="(link, index) in links" :key="index">{{ link }}</a>
    </div>
  </div>
  <Modal
    :modal="modal"
    :data="data"
    :clicked="clicked"
    @modalClose="modal = false"
  />
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
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      data: data,
      modal: false,
      clicked: 0,
      links: ["Home", "Products", "About"],
    };
  },
  // methods: {
  //   modalOpen() {
  //     this.modal == true;
  //   },
  // },
  components: { Card, Modal },
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
</style>
