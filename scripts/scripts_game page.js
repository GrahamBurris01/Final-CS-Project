/**
 * Created by hamwa on 10/30/2016.
 */
var CARDS = ["../Images2/red_joker.jpg","../Images2/red_joker.jpg", "../Images2/2_of_clubs.jpg", "../Images2/2_of_clubs.jpg","../Images2/2_of_diamonds.jpg","../Images2/2_of_diamonds.jpg","../Images2/2_of_hearts.jpg","../Images2/2_of_spades.jpg","../Images2/2_of_spades.jpg"];

var COMP = [];
var MATCHES = [];

var CARD0 = "../Images2/red_joker.jpg";

    function CreateGame(){
        for (i = 0; i < 10; i++) {
            COMP.pop();
            MATCHES.pop();
        }
        var count = 0;

        while (count != 16){
            var cardName = RandomOneOf(CARDS);

            var index = COMP.indexOf(cardName);

            var index = COMP.indexOf(cardName);
            if (index = COMP.indexOf(cardName)){
                COMP.push((cardName));
                count ++;
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
    TimesFlipped = 0
}

function FlipImage1(){
    document.getElementById("image1").src = COMP[0];
    MATCHES.push(COMP[0]);
    TimesFlipped ++;
    FlipBack();
    alert(TimesFlipped);

    if(TimesFlipped > 2){
     FlipBack();
    }
}

function FlipImage2() {
    document.getElementById("image2").src = COMP[1];
    MATCHES.push(COMP[1]);
    TimesFlipped++;

    if (TimesFlipped == 2) {
        FlipBack();
    }
}

function FlipImage3(){
    document.getElementById("image3").src = COMP[2];
    TimesFlipped ++;

    if(TimesFlipped == 2){
       FlipBack();
    }
}
function FlipImage4(){
    document.getElementById("image4").src = COMP[3];
    TimesFlipped ++;


    if(TimesFlipped > 2){
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
