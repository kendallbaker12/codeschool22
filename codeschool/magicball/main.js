const URL = "https://cs2022-eight-ball.herokuapp.com";

var app = new Vue({
    el: "#app",
    data: {
        prompt: "Ask A Question",
        message: "",
        messageColor: "",
        // messageBank: [
        //     "yes",
        //     "no",
        //     "Maybe",
        //     "Ask again tommorow",
        //     "probably",
        //     "Probabaly not"
        // ],

        question: "",
    },
    methods: {
        askQuestion: function () {
            if (!this.isValidQuestion()) {
                return;
            }
            // let nextIndex = Math.floor(Math.random() * this.messageBank.length);
            // let nextResponse = this.messageBank[nextIndex];
            this.messageColor = "rgba(255,255,255,0)";
            setTimeout(() => {
                fetch(URL + "/questions").then((response) => {
                    response.json().then((data) => {
                        console.log(data)
                        let answerObject = data;
                        this.message = answerObject.answer;
                        this.messageColor = answerObject.color;
                    });
                });
            }, 1000);

            // this.message = nextResponse;
            this.prompt = "Ask Another Question."
            this.question = "";
        },
        isValidQuestion: function () {
            return this.question[this.question.length - 1] == "?";
        },
    }
})


