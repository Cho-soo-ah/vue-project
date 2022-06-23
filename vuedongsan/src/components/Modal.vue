<template>
  <div class="black_bg" v-if="modal">
    <div class="white_bg">
      <Discount />
      <h4>{{ data[clicked].title }}</h4>
      <img :src="data[clicked].image" alt="" />
      <p>{{ data[clicked].content }}</p>
      <p>{{ data[clicked].price }} 원</p>
      <!-- <button @click="modalClose">닫기</button> -->
    </div>
  </div>
</template>

<script>
import Discount from "./Discount.vue";

export default {
  name: "ModalVue",
  props: {
    modal: Boolean,
    data: Object,
    clicked: Number,
  },
  components: { Discount },
};
</script>

<style>
.black_bg {
  width: 100%;
  height: 100%;
  background: #0000007c;
  position: fixed;
  padding: 20px;
}
.white_bg {
  width: 90%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}
.white_bg img {
  width: 100%;
}
</style>
