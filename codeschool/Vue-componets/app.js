
Vue.component("button-counter", {
    data: function () {
        return {
            count: 0
        }
    },
    props: [
        "name"
    ],
    template: `
    <div>
        <p> congrats on getting this to work!</p>
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    </div>
    `
});

var app = new Vue({
    el: "#app",
    data: {
        test: 0,
    },
})