const boxArray = new Array(9);

let turn = 0, won = -1;
function init() {
    for (let i = 0; i < boxArray.length; i++) {
        boxArray[i] = -1;
    }
    won = 0;
    $('.player-box').text('-');
}

function isWon() {
    switch (true) {
        //Check rows
        case boxArray[0] == boxArray[1] && boxArray[1] == boxArray[2] && boxArray[0] != -1:
        case boxArray[3] == boxArray[4] && boxArray[4] == boxArray[5] && boxArray[3] != -1:
        case boxArray[6] == boxArray[7] && boxArray[7] == boxArray[8] && boxArray[6] != -1:
        //Check coloumns
        case boxArray[0] == boxArray[3] && boxArray[3] == boxArray[6] && boxArray[0] != -1:
        case boxArray[1] == boxArray[4] && boxArray[4] == boxArray[7] && boxArray[1] != -1:
        case boxArray[2] == boxArray[5] && boxArray[5] == boxArray[8] && boxArray[2] != -1:
        //Check digonals
        case boxArray[0] == boxArray[4] && boxArray[4] == boxArray[8] && boxArray[0] != -1:
        case boxArray[2] == boxArray[4] && boxArray[4] == boxArray[6] && boxArray[2] != -1:
            setTimeout(() => alert(`Player ${turn == 1 ? "'X'" : "'O'"} won`), 500);
            init();
    }

    let i = 0;
    const length = boxArray.length;
    for (i; i < length; i++) {
        if (boxArray[i] == -1) {
            break;
        }
    }
    if (i == 9 && won == 0) {
        alert("It's a cat's game")
    }
}

$(document).ready(function () {
    init();
    $('.player-box').click(function (e) {
        let clicked = $(this).attr('data-box');
        if (turn == 0) {
            if (boxArray[clicked - 1] == -1) {
                $(this).text('X');
                boxArray[clicked - 1] = 0;
                turn = 1;
            }
        } else {
            if (boxArray[clicked - 1] == -1) {
                $(this).text('O');
                boxArray[clicked - 1] = 1;
                turn = 0;
            }
        }
        isWon();
    })
    $('#reset').click(function (e) {
        init();
    })
})