var app = new Vue({
    el: "#app",
    data: {
        // row count and column count
        rowcount: 5,
        columncount: 5,
        // mole position (row and column)
        moleRow: -1,
        moleColumn: -1,
        // score and total
        score: 0,
        total: 0,
    },
    methods: {
        updateMoleRecursive: function () {
            setTimeout(() => {
                this.moleRow = Math.ceil(Math.random() * this.rowcount);
                this.moleColumn = Math.ceil(Math.random() * this.columncount);

                this.total++;
                this.updateMoleRecursive();
            }, 1000);
            // use SetTimeout to 
            // 1. change the mole's position
            // 2. update the total

        },
        hitMole: function () {
            // 1. add 1 to the score
            this.score++;
            this.moleRow = -1;
            this.moleColumn = -1;
            // 2. clear the mole off the board

        }
    },
    created: function () {
        this.updateMoleRecursive();
        // Call Recursive function to start
    }
});