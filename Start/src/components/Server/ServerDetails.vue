<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="gotServerDetails">
      <p>Server Id: {{ serverDetails.id }}</p>
      <p>Server Status:{{ serverDetails.status }}</p>
    </div>
    <p v-else>Server Details are currently not updated</p>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data: function () {
    return {
      serverDetails: null,
      gotServerDetails: false,
    };
  },
  created() {
    eventBus.$on("getChoosenServer", (server) => {
      this.serverDetails = server;
      this.gotServerDetails = true;
    });
  },
};
</script>

<style></style>
