new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            showAlert:function()
            {
                console.log("aaaaa")
                alert("Hello")
            },
            onKeyUp:function(event)
            {
                this.value=event.target.value
            },
            onEnter:function(event)
            {
                this.value=event.target.value
            }
        }
    });