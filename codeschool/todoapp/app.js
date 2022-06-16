var url = "http://todo2022.codeschool.cloud";

var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        usableTags: [],
        nameInput: "",
        descInput: "",
        doneInput: false,
        dateInput: "",
        tagsInput: {},
    },
    methods: {
        addTodo: function () {
            let tagsList = [];
            this.usableTags.forEach(tag => {
                if (this.tagsInput[tag]) {
                    tagsList.push(tag);
                }
            });

            let newTodo = {
                name: this.nameInput,
                description: this.descInput,
                done: this.doneInput,
                deadline: this.dateInput,
                tags: tagsList,
            }
            this.todos.push(newTodo);

        },
        postTodo: function (new_todo) {
            let newTodo = [];

            fetch(url + "/todo", {
                method: "POST",
                body: JSON.stringify(new_todo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                response.json().then((created_todo) =>
                    console.log(created_todo));
            });
        }
    },
    created: function () {
        fetch(url + "/todos").then((response) => {
            response.json().then((data) => {
                this.todos = data;
            });
        });
        fetch(url + "/tags").then((response) => {
            response.json().then((data) => {
                this.usableTags = data;
                this.usableTags.forEach(tag => {
                    this.tagsInput[tag] = false;
                });
            });
        });
    }
});