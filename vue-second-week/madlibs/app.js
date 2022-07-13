// Default Mad Lib component
Vue.component("pessimistic-mad-lib", {
    template: `
    <div id='story'>
        <b>{{ name }}</b> was born <b>{{ birthday }}</b> and is absolutely frightened at the idea of eating <b>{{ favoriteFood }}</b>.
        All good things come in <b>{{favoriteNumber}}</b>'s, right? Not according to <b>{{ name }}</b>. That's how many times <b>{{ name }}</b> has been
        able to buy <b>{{ favoriteShoppingItem }}</b> - clearly not enough! What's more, <b>{{ name }}</b> found out that
        <b>{{ favoriteMovie }}</b> has <b>{{ favoriteNumber }}</b> sequels, and they're all terrible! No wonder
        <b>{{ name }}</b> is one of the few remaining fans of the series. Considering all this, there are definitely better days ahead for <b>{{ name }}</b>.
    </div>
    `,
    props: {
        'name': String,
        'birthday': String,
        'favoriteFood': String,
        'favoriteNumber': Number,
        'favoriteMovie': String,
        'favoriteShoppingItem': String,
    }
});

// Implement your own mad lib component here:
Vue.component("kendalls-madlib", {
    template: `
    <div id='story'>
        <b>{{ name }}</b> was born on <b>{{birthday}}</b> in the wonderful city of <b>{{birthCity}}</b>.
        He Grew up doing <b>{{favoriteActivity}}</b> with all his friends and family.
        When he turned <b>{{age}}</b> he learned how to <b>{{crazyActivity}}</b>, and everyone was so suprised.
        when <b>{{name}}</b> got a little bit older he decided to run for <b>{{politicalPosition}}</b>.
        To everyones suprise he won! However the world fell into chaos afterwards because <b>{{name}}</b>
        unleashed <b>{{horribleThing}}</b> and the whole world fell into disarray!

    </div>
    `,
    props: {
        'name': String,
        'birthday': String,
        'birthCity': String,
        'favoriteActivity': String,
        'age': Number,
        'crazyActivity': String,
        'politicalPosition': String,
        'horribleThing': String,
    },
    data: function () {
        return {
            nameInput: "",
            birthdayInput: "",
            birthCityInput: "",
            favoriteActivityInput: "",
            ageInput: 0,
            crazyActivityInput: "",
            politicalPositionInput: "",
            horribleThingInput: "",
        }
    }
})

Vue.component("mad-lib-input", {
    template: `
    <div id='story'>
        <b><input v-model="nameInput""></b> was born on <b>{{birthday}}</b> in the wonderful city of <b>{{birthCity}}</b>.
        He Grew up doing <b>{{favoriteActivity}}</b> with all his friends and family.
        When he turned <b>{{age}}</b> he learned how to <b>{{crazyActivity}}</b>, and everyone was so suprised.
        when <b>{{name}}</b> got a little bit older he decided to run for <b>{{politicalPosition}}</b>.
        To everyones suprise he won! However the world fell into chaos afterwards because <b>{{name}}</b>
        unleashed <b>{{horribleThing}}</b> and the whole world fell into disarray!

    </div>
    `,
    props: {
        'name': String,
        'birthday': String,
        'birthCity': String,
        'favoriteActivity': String,
        'age': Number,
        'crazyActivity': String,
        'politicalPosition': String,
        'horribleThing': String,
    },
    data: function () {
        return {
            nameInput: "",
            birthdayInput: "",
            birthCityInput: "",
            favoriteActivityInput: "",
            ageInput: 0,
            crazyActivityInput: "",
            politicalPositionInput: "",
            horribleThingInput: "",
        }
    }
})

Vue.component("test-comp", {
    template: `
    <div>
        <input type="text">
    </div>
    `,
    props: {

    }
})

// Minimum Vue Instance
var app = new Vue({
    el: "#app",
    data: {
        nameInput: "",
        birthdayInput: "",
        birthCityInput: "",
        favoriteActivityInput: "",
        ageInput: 0,
        crazyActivityInput: "",
        politicalPositionInput: "",
        horribleThingInput: "",
    }
});