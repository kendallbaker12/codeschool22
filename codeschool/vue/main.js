var app = new Vue({
    el: "#app",
    data: {
        message: "Hello, vue",
        showText: true,
        items: [
            { text: "item a", show: true, color: "#1f2" },
            { text: "item b", show: true, color: "#500" },
            { text: "item c", show: true, color: "#5fc" },
            { text: "item d", show: true, color: "#0f0" }
        ],
        newItems: [
            { text: "new item a", show: true, color: "#900" },
            { text: "new item b", show: true, color: "#876" },
            { text: "new item c", show: true, color: "#4f6" },
            { text: "new item d", show: true, color: "#1d9" }
        ],
        strings: [
            "a",
            "b",
            "c"
        ]
    },
    methods: {
        toggleTextandAddA: function () {
            this.showText = !this.showText;
            this.message = this.message + "a";
        },
        changeColor: function (item) {
            if (item.color != "black") {
                item.previousColor = item.color;
                item.color = "black"
            } else {
                item.color = item.previousColor;
            }
            this.item.color = "blue";

        }
    }
})