<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded Id: {{ id }}</p>
    <router-link
      tag="button"
      :to="{ name: 'userEdit', params: { id: id } }"
      >Edit</router-link
    >
  </div>
</template>
<script>
export default {
  computed: {
    id: function () {
      return this.$route.params.id;
    },
  },
};
</script>
<style></style>
