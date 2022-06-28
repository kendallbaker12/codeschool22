Vue.component('custom-address', {
    template: `
    <div>
        Name: {{address.name}}<br>
        Address: {{address.address}}<br>
        <button v-on:click="deleteAddress()">Delete Address</button>
    </div>
    `,
    props: {
        "address": Object,
        "list": Array,
        "index": Number,

    },   // or {}
    methods: {
        deleteAddress: function () {
            this.list.splice(this.index, 1);
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        // variables to model each input
        nameInput: "",
        addressInput: "",
        addressList: []
        // list to hold addresses
    },
    methods: {
        recordAddress: function () {
            let newAdress = {
                name: this.nameInput,
                address: this.addressInput
            }
            this.addressList.push(newAdress);
            this.nameInput = "";
            this.addressInput = "";
        }
        // function to push address into list, clear input fields
    }
});