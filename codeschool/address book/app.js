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
        // function to add(push) address into list, clear input fields
        recordAddress: function () {
            let newAdress = {
                name: this.nameInput,
                address: this.addressInput
            }
            this.addressList.push(newAdress);
            this.nameInput = "";
            this.addressInput = "";
        }
    }
})