const URL = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=";
var app = new Vue({
    el: "#app",
    data: {
        artistInput: "",
        searchAlbumList: [],
        pickedAlbumList: [],
        pickedUp: -1,
    },
    methods: {
        searchArtist: function () {
            // console.log(this.artistInput);
            // this.artistInput = "";
            fetch(URL + encodeURIComponent(this.artistInput)).then((response) => {
                response.json().then(data => {
                    this.searchAlbumList = data.album;
                });
            });
            this.artistInput = "";
        },
        addAlbum: function (index) {
            let album = this.searchAlbumList[index];

            this.pickedAlbumList.push(album);
        },
        removeAlbum: function (index) {
            this.pickedAlbumList.splice(index, 1);
        },
        pickupAlbum: function (index) {
            this.pickedUp = index;
            console.log(this.pickedUp)
        },
        dropAlbum: function (index) {
            if (this.pickedUp < 0) {
                return;
            }
            if (index >= this.pickedAlbumList.length) {
                index = this.pickedAlbumList.length - 1;
            }
            console.log(index);
            let movedAlbum = this.pickedAlbumList[this.pickedUp];
            this.pickedAlbumList.splice(this.pickedUp, 1);
            this.pickedAlbumList.splice(index, 0, movedAlbum);
        },
    }

})
