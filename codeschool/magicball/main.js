var app = new Vue({
    el: "#app",
    data: {
        prompt: "Ask A Question",
        message: "",
        messageBank: [
            "yes",
            "no",
            "Maybe",
            "Ask again tommorow",
            "probably",
            "Probabaly not"
        ],

        question: "",
    },
    methods: {
        askQuestion: function () {
            if (!this.isValidQuestion()) {
                return;
            }
            let nextIndex = Math.floor(Math.random() * this.messageBank.length);
            let nextResponse = this.messageBank[nextIndex];
            this.message = nextResponse;
            this.prompt = "Ask Another Question."
            this.question = "";
        },
        isValidQuestion: function () {
            return this.question[this.question.length - 1] == "?";
        }
    }
})