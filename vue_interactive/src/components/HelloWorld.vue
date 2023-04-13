<template>
  <div class="grid">
    <div
      class="con"
      v-for="(item, index) in 80"
      :key="index"
      :class="slide[index]"
    >
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    let timer = null;
    const bodyFix = () => {
      const con_0 = document
        .getElementsByClassName("con")[0]
        .getBoundingClientRect().top;

      if (con_0 < 0) {
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            slide.value.push(
              "right",
              "up",
              "up",
              "down",
              "right",
              "down",
              "left",
              "left",
              "up",
              "down",
              "right",
              "down",
              "up",
              "right",
              "down",
              "left",
              "left",
              "up",
              "left",
              "right",
              "up"
            );
          }, 400);
        }
      }
    };

    onMounted(() => {
      window.scrollTo(0, 0);
      document.addEventListener("scroll", bodyFix);
    });
    onUnmounted(() => {
      document.removeEventListener("scroll", bodyFix);
    });

    const slide = ref([
      "up",
      "right",
      "up",
      "down",
      "down",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right",
      "down",
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "up",
      "right",
      "up",
    ]);
    return { slide };
  },
};
</script>
