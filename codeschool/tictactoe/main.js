var playerTurn = 0;
var allTiles = document.querySelectorAll(".tile");
var winningmessage = document.querySelector("#winning-message");

function checkWinner(player){
    var sets = ["row1","row2","row3","col1","col2","col3","diag1","diag2"];
    var winner = false;

    sets.forEach(function (set){
        var selector = "." + set + "." + player;
        var tiles = document.querySelectorAll(selector);
        //console.log("selector:",selector,"count:",tiles.length);
        if(tiles.length == 3){
            winner = true;
        }
    
    });
    return winner;
};

allTiles.forEach(function (tile){
    tile.onclick = function() {


        if (playerTurn == 0){
            tile.innerHTML = "x";
            playerTurn = 1;
            tile.classList.add("x");
            tile.onclick = "";
            if(checkWinner("x") == true){
                console.log("x wins")
                winningmessage.innerHTML = "X Wins!";
                winningmessage.classList.add("x");
            };
        }else{
            tile.innerHTML = "o";
            tile.classList.add("o");
            playerTurn = 0;
            tile.onclick = "";
            if(checkWinner("o") == true){
                console.log("o wins")
                winningmessage.innerHTML = "O Wins!";
                winningmessage.classList.add("o");
            };
        }
    };
});