<template>
  <Modal :modal="modal" :data="data" :clicked="clicked" />
  <div v-for="(item, i) in data" :key="i">
    <img class="room" :src="data[i].image" alt="" />
    <h4 @click="modalOpen(i)">모달띄우기</h4>
    <h3>{{ data[i].title }}</h3>
    <p>{{ data[i].content }}</p>
    <p>{{ data[i].price }} 원</p>
    <button @click="increase(i)">추천하기</button>
    <br /><br />
    <span>추천 수 : {{ value[i] }}</span>
  </div>
</template>

<script>
import data from "../assets/data";
import Modal from "./Modal.vue";

export default {
  name: "CardBox",
  props: {
    data: Object,
  },
  data() {
    return {
      data: data,
      value: [0, 0, 0, 0, 0],
      modal: false,
      clicked: 0,
    };
  },
  methods: {
    increase(i) {
      this.value[i]++;
    },
    modalOpen(i) {
      this.modal = true;
      this.clicked = i;
    },
  },
  components: { Modal },
};
</script>

<style>
.room {
  width: 70%;
  margin-top: 40px;
}
</style>
