new Vue({
  el: '#exercise',
  data: {
    isHighLight: true,
    myClass: ""
  },
  methods: {
    startEffect: function () {
      let vm = this
      setInterval(() => {
        vm.isHighLight = !vm.isHighLight
        console.log(vm.isHighLight)
      }, 100);
    }
  },
  computed: {
    myEffectClass: function () {
      let vm = this
      return {
        "highlight": vm.isHighLight,
        "shrink": !vm.isHighLight
      }
    }
  }

});
