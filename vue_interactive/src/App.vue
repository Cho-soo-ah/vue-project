<template>
  <p>118 eXperience</p>
  <HelloWorld />
  <div class="title">
    <h2 class="active">ALL</h2>
    <h2>BX</h2>
    <h2>UX</h2>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap");

body {
  margin: 0;
}
#app {
  font-family: "Noto Sans KR", sans-serif;
  font-family: "Roboto";
}
.title {
  position: fixed;
  left: 50px;
  top: 20vh;
}
p {
  margin: 60px 0;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
}
h2.active {
  color: #000;
}
h2 {
  font-size: 200px;
  line-height: 200px;
  color: white;
  margin: 0;
  text-align: left;
  -webkit-text-stroke: 2px #000;
  transition-duration: 0.25s;
  cursor: pointer;
}
h2:hover {
  color: #000;
  transform: scale(0.9);
}
/* ---- */
.grid {
  display: flex;
  flex-wrap: wrap;
  padding: 0 100px 0 320px;
}
.con {
  cursor: pointer;
  margin: 5px;
  width: 200px;
  height: 323px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  transition-duration: 0.2s;
}
.con:hover {
  transform: scale(0.9);
  background-size: auto 120%;
}
.inner {
  width: 100%;
  height: 100%;
}
.con:nth-of-type(2n-1) .inner {
  background: tan;
}
.con:nth-of-type(2n) .inner {
  background: teal;
}
.con:nth-of-type(3n-1) .inner {
  background: purple;
}
.con:nth-of-type(4n-1) .inner {
  background: tomato;
}
.con.up {
  background-image: url("/public/images/sample_1.png");
}
.con.left {
  background-image: url("/public/images/sample_2.png");
}
.con.right {
  background-image: url("/public/images/sample_3.png");
}
.con.down {
  background-image: url("/public/images/sample_4.jpg");
}
.con.up .inner {
  animation: 500ms ease 200ms 1 normal both running slideOutUp;
}
.con.down .inner {
  animation: 500ms ease 200ms 1 normal both running slideOutDown;
}
.con.left .inner {
  animation: 500ms ease 200ms 1 normal both running slideOutLeft;
}
.con.right .inner {
  animation: 500ms ease 200ms 1 normal both running slideOutRight;
}

@keyframes slideOutUp {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    -webkit-transform: translate3d(0, -101%, 0);
    transform: translate3d(0, -101%, 0);
  }
}

@keyframes slideOutDown {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    -webkit-transform: translate3d(0, 101%, 0);
    transform: translate3d(0, 101%, 0);
  }
}

@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slideOutRight {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
</style>
