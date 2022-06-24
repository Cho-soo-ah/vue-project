<template>
  <div>
    <img class="room" :src="item.image" alt="" />
    <h4 @click="modalOpen">모달띄우기</h4>
    <h3>{{ item.title }}</h3>
    <p>{{ item.content }}</p>
    <p>{{ item.price }} 원</p>
    <button @click="increase">추천하기</button>
    <br /><br />
    <span>추천 수 : {{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  props: {
    item: Object,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    modalOpen() {
      this.$emit("modalOpen", this.item.id);
    },
    increase() {
      this.value++;
    },
  },
};
</script>

<style>
.room {
  width: 70%;
  margin-top: 40px;
}
</style>
