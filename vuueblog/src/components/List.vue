<template>
  <div v-for="(obj, i) in Data" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{ obj.title }}</h5>
    <h5>{{ obj.content }}</h5>
    <p>{{ obj.date }}</p>
  </div>
</template>

<script>
export default { name: "blogList", props: { Data: Array } };
</script>

<style></style>
