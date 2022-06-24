<template>
  <div class="black_bg" v-if="modal == true">
    <div class="white_bg">
      <Discount />
      <h4>{{ data[clicked].title }}</h4>
      <img :src="data[clicked].image" alt="" />
      <p>{{ data[clicked].content }}</p>
      <!-- <input @input="month = $event.target.value" /> 축약버전 -->
      <input v-model="month" />
      <p>{{ month }}개월 선택 시 {{ data[clicked].price * month }} 원</p>
      <button @click="modalClose">닫기</button>
    </div>
  </div>
</template>

<script>
import Discount from "./Discount.vue";

export default {
  name: "ModalVue",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(v) {
      if (isNaN(v)) {
        alert("숫자만 입력해주세요");
        this.month = 1;
      }
      if (v > 12) {
        alert("12개월까지 입력할 수 있습니다.");
      }
    },
  },
  props: {
    modal: Boolean,
    data: Object,
    clicked: Number,
  },
  methods: {
    modalClose() {
      this.$emit("modalClose", this.data[this.clicked].id);
    },
    inputValue() {},
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
