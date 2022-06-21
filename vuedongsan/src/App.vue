<template>
  <div class="modal black_bg" v-if="modal">
    <div class="white_bg">
      <h4>상세페이지</h4>
      <p>내용내용내용</p>
      <p>내용내용내용</p>
      <p>내용내용내용</p>
      <button @click="modalClose">닫기</button>
    </div>
  </div>

  <div>
    <div class="menu">
      <a v-for="(link, index) in links" :key="index">{{ link }}</a>
    </div>
  </div>
  <div v-for="(item, i) in data" :key="i">
    <img class="room" :src="data[i].image" alt="" />
    <h4 @click="modalOpen">모달띄우기</h4>
    <h3>{{ data[i].title }}</h3>
    <p>{{ data[i].content }}</p>
    <p>{{ data[i].price }} 원</p>
    <button @click="increase(i)">추천하기</button>
    <br /><br />
    <span>추천 수 : {{ value[i] }}</span>
  </div>
</template>

<script>
import data from "./assets/data.js";

export default {
  name: "App",
  data() {
    return {
      links: ["Home", "Products", "About"],
      prices: [40, 210, 240],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      value: [0, 0, 0],
      images: [
        require("./assets/room0.jpg"),
        require("./assets/room1.jpg"),
        require("./assets/room2.jpg"),
      ],
      modal: false,
      data: data,
    };
  },
  methods: {
    increase(i) {
      this.value[i]++;
    },
    modalOpen() {
      this.modal = true;
    },
    modalClose() {
      this.modal = false;
    },
  },
  components: {},
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
.room {
  width: 70%;
  margin-top: 40px;
}
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
</style>
