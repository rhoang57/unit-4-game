
$(document).ready(function() {
//sets up a random number between 19-120 that will go into the span element of HTML representing "Calories Allowed"
// set up Math.floor(Math.random() * (max - min + 1)) + myMin; to generate an a random number between 19 and 120 (both inclusive)
    var random = Math.floor(Math.random() * (102)) + 19;
    $("#calories-allowed").text(random);
    

    //	setting up four random numbers array, total variable and printing the wins & losses variables	
    var GeneratedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);

    //create a function to choose a random number for each piece of the 4 sushi types indexed 0-3
    function sushiRanNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * (12)) + 1;
            GeneratedNumbers.push(num);
        }
    }
    sushiRanNumbers();

    //defining a function to reset the game when a user wins or loses
    function reset() {
        random = Math.floor(Math.random()* (102)) + 19;
        $("#calories-allowed").text(random);
        GeneratedNumbers = [];
        sushiRanNumbers();
        total = 0;
        $("#calories-eaten").text(total);
    }
    reset();

    //creating a reload function once a user accumulates 10 losses
    function reload() {
        random = Math.floor(Math.random()* (102)) + 19;
        $("#calories-allowed").text(random);
        GeneratedNumbers = [];
        sushiRanNumbers();
        total = 0;
        $("#calories-eaten").text(total);
        wins = 0;
        $("#wins").text("0");
        losses = 0;
        $("#losses").text("0");
        $("#wider-wong").attr("src", "assets/images/sad_ww.jpg");
    }
    reload();

    //determining what happens when a user wins
    function winner() {
        $("#wider-wong").attr("src", "assets/images/satisfied_ww.jpg");
        alert("You won!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    //determining what happens when a user loses
    function loser() {
        $("#wider-wong").attr("src", "assets/images/sick_ww.jpg");
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    //setting up the click for each sushi piece
    $("#nigiri-1").on("click", function () {
        total = total + GeneratedNumbers[0];
        $("#calories-eaten").text(total);

        //if / else-if / else statements on various conditions.
        if (total === random) {
            winner();
        }
        else if (total > random) {
            loser();
        }
        if (losses === 5) {
            reload();
        }
    })

    $("#nigiri-2").on("click", function () {
        total = total + GeneratedNumbers[1];
        $("#calories-eaten").text(total);
        
        //sets win/lose conditions
        if (total === random) {
            winner();
        }
        else if (total > random) {
            loser();
        }
        if (losses === 5) {
            reload();
        }
    })

    $("#nigiri-3").on("click", function () {
        total = total + GeneratedNumbers[2];
        $("#calories-eaten").text(total);

        //sets win/lose conditions
        if (total === random) {
            winner();
        }
        else if (total > random) {
            loser();
        }
        if (losses === 5) {
            reload();
        }
    })

    $("#nigiri-4").on("click", function () {
        total = total + GeneratedNumbers[3];
        $("#calories-eaten").text(total);

        //sets win/lose conditions"
        if (total === random) {
            winner();
        }
        else if (total > random) {
            loser();
        }
        if (losses === 5) {
            reload();
        }
    })

});