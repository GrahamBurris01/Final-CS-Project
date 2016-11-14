/**
 * Created by hamwa on 10/30/2016.
 */
const CARD0 = "../Images2/red_joker.jpg";
const CARD1 = "../Images2/2_of_clubs.jpg";
const CARD2 = "../Images2/2_of_diamonds.jpg";
const CARD3 = "../Images2/2_of_hearts.jpg";
const CARD4 = "../Images2/2_of_spades.jpg";


var TimesFlipped = 0;

function $ (string){
    document.getElementById("")
}

function ShowHelp(){
    document.getElementById("helpOutput").innerHTML="The objective of the game is to match a card number and color with the corresponding number and color." +
        "For example, if you are to choose the two of clubs, you would match it with the two of spades.";

}
function ClearHelp(){
    document.getElementById("helpOutput").innerHTML='';


}


function FlipImage1(){
    document.getElementById("image1").src = CARD1;
    TimesFlipped ++;
    alert(TimesFlipped);

    if(TimesFlipped > 2){
        $("image1").src = CARD0;
        $("image2").src = CARD0;
        $("image3").src = CARD0;
        $("image4").src = CARD0;
    }
}

function FlipImage2(){
    document.getElementById("image2").src = CARD2;
    TimesFlipped ++;

    if(TimesFlipped > 2){
        $("image1").src = CARD0;
        $("image2").src = CARD0;
        $("image3").src = CARD0;
        $("image4").src = CARD0;
    }

    if(TimesFlipped = 2) setTimeout()
}
function FlipImage3(){
    document.getElementById("image3").src = CARD3;
    TimesFlipped ++;

    if(TimesFlipped > 2){
        $("image1").src = CARD0;
        $("image2").src = CARD0;
        $("image3").src = CARD0;
        $("image4").src = CARD0;
    }
}
function FlipImage4(){
    document.getElementById("image4").src = CARD4;
    TimesFlipped ++;
    alert(TimesFlipped);

    if(TimesFlipped > 2){
        document.getElementById("image1").src = CARD0;
        document.getElementById("image2").src = CARD0;
        document.getElementById("image3").src = CARD0;
        document.getElementById("image4").src = CARD0;
    }
}
