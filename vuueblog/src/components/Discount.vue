<template>
  <div class="discount">
    <h4>지금 결제하면 {{ percent }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "PriceDiscount",
  props: {
    percent: Number,
  },
};
</script>

<style>
.discount {
  background: #eee;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
}
</style>
