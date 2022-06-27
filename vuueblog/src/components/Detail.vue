<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Detail</h1>
      <p class="lead">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </div>
  </div>
  <div>디테일페이지</div>
  <h5>{{ Data[$route.params.id].title }}</h5>
  <router-view></router-view>
</template>

<script>
export default { name: "blogDetail", props: { Data: Array } };
</script>

<style></style>
