var app = new Vue({
    el: "#app",
    data: {
        // 1. 3 number variables, one for each input
        redInput: "",
        blueInput: "",
        greenInput: "",
        // 3. 1 list variable, holds strings (ex. ['rgb(0,255,128)', 'rgb(0,0,0)', ...])
        rgbList: [],
    },
    methods: {
        // 3. push the current rgbString into the color list
        addColor: function () {
            this.rgbList.push(this.rgbString);
        }
    },
    computed: {
        // 1. insert your variable names into their respective places
        rgbString: function () {
            let finalString = "rgb(";
            finalString += this.redInput + ",";
            finalString += this.greenInput + ",";
            finalString += this.blueInput + ")";
            return finalString;
        },
    }
});