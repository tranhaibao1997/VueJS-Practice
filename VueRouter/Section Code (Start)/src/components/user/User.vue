<template>
  <div>
    <h1>The User Page</h1>
    <button @click="navigateToHome">To Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  computed: {
      id:function()
      {
          return this.$route.params.id
      }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>
