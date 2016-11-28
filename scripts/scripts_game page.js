/**
 * Created by hamwa on 10/30/2016.
 */
var CARDS = ["../Images2/2_of_clubs.jpg","../Images2/2_of_diamonds.jpg","../Images2/2_of_hearts.jpg","../Images2/2_of_spades.jpg"];

var COMP = [];
var MATCHES = [];


var CARD0 = "../Images2/red_joker.jpg";

    function CreateGame(){
        for (i = 0; i < 8; i++) {
            COMP.pop();
            MATCHES.pop();
        }
        var count = 0;

        while (count != 8){

            var cardName = RandomOneOf(CARDS);


            var index = COMP.indexOf(cardName);
            if (index == COMP.indexOf(cardName)){
                COMP.push(cardName);
                count ++;
                alert(COMP);
            }
        }
        alert(COMP);
    }

var TimesFlipped = 0;



function FlipBack(){



    alert('yo');
    $("image1").src = CARD0;
    $("image2").src = CARD0;
    $("image3").src = CARD0;
    $("image4").src = CARD0;
    $("image5").src = CARD0;
    $("image6").src = CARD0;
    $("image7").src = CARD0;
    $("image8").src = CARD0;
    TimesFlipped = 0;
    alert(TimesFlipped);

}

function FlipImage1(){ alert(TimesFlipped);
    document.getElementById("image1").src = COMP[0];
    MATCHES.push(COMP[0]);
    TimesFlipped ++;



    if(TimesFlipped == 3){
     FlipBack();
    }
}

function FlipImage2() {
    document.getElementById("image2").src = COMP[1];
    MATCHES.push(COMP[1]);
    TimesFlipped++;

    if (TimesFlipped == 3) {
        FlipBack();
    }
}

function FlipImage3(){
    document.getElementById("image3").src = COMP[2];
    TimesFlipped ++;

    if(TimesFlipped == 3){
       FlipBack();
    }
}
function FlipImage4(){
    document.getElementById("image4").src = COMP[3];
    TimesFlipped ++;


    if(TimesFlipped ==3){
     FlipBack();
    }
}


function FlipImage5(){
    document.getElementById("image5").src = COMP[4];
    MATCHES.push(COMP[0]);
    TimesFlipped ++;



    if(TimesFlipped == 3){
        FlipBack();
    }
}

function FlipImage6() {
    document.getElementById("image6").src = COMP[5];
    MATCHES.push(COMP[1]);
    TimesFlipped++;

    if (TimesFlipped == 3) {
        FlipBack();
    }
}

function FlipImage7(){
    document.getElementById("image7").src = COMP[6];
    TimesFlipped ++;

    if(TimesFlipped == 3){
        FlipBack();
    }
}
function FlipImage8(){
    document.getElementById("image8").src = COMP[7];
    TimesFlipped ++;


    if(TimesFlipped ==3){
        FlipBack();
    }
}






function ShowHelp(){
    document.getElementById("helpOutput").innerHTML="The objective of the game is to match a card number and color with the corresponding number and color." +
        "For example, if you are to choose the two of clubs, you would match it with the two of spades.";

}
function ClearHelp(){
    document.getElementById("helpOutput").innerHTML='';


}
