<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li @click="selectServer(server)" class="list-group-item" :key="server.id" v-for="server in servers">
        Server #{{ server.id }}:{{server.status}}
      </li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../../main'
export default {
  data: function () {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" },
      ],
    };
  },
  methods:{
      selectServer:function(server)
      {
          console.log(server.id)
          eventBus.$emit("getChoosenServer",server)
      }
  }
};
</script>

<style></style>
