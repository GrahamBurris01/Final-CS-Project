/**
 * Created by hamwa on 10/30/2016.
 */
var CARDS = ["../Images2/2_of_clubs.jpg","../Images2/2_of_diamonds.jpg","../Images2/2_of_hearts.jpg","../Images2/2_of_spades.jpg"];

var COMP = ["../Images2/2_of_clubs.jpg","../Images2/2_of_diamonds.jpg","../Images2/2_of_hearts.jpg","../Images2/2_of_spades.jpg","../Images2/2_of_clubs.jpg","../Images2/2_of_diamonds.jpg","../Images2/2_of_hearts.jpg","../Images2/2_of_spades.jpg","../Images2/3_of_clubs.jpg","../Images2/3_of_diamonds.jpg","../Images2/3_of_hearts.jpg","../Images2/3_of_spades.jpg" ,"../Images2/3_of_clubs.jpg","../Images2/3_of_diamonds.jpg","../Images2/3_of_hearts.jpg","../Images2/3_of_spades.jpg" ];
var MATCHES = [];


var CARD0 = "../Images2/red_joker.jpg";

    function CreateGame(){
        for (i = 0; i < 8; i++) {
            COMP.pop();
            MATCHES.pop();
        }
        var count = 0;

        while (count != 4){

            var cardName = RandomOneOf(CARDS);


            var index = COMP.indexOf(cardName);
            if (index == COMP.indexOf(cardName)){
                COMP.push(cardName);
                COMP.push(cardName);
                count ++;

            }
        }

    }

var TimesFlipped = 0;
function CheckMatch(){

  if(MATCHES.indexOf(0) === MATCHES.indexOf(1)){

  }
  if(MATCHES.indexOf(0) != MATCHES.indexOf(1)){
      alert('boo')
  }else{alert('not')}
}

function FlipBack(){
alert(MATCHES);

    if(TimesFlipped == 3) {

MATCHES.length = 0;
        alert('yo');
        $("image1").src = CARD0;
        $("image2").src = CARD0;
        $("image3").src = CARD0;
        $("image4").src = CARD0;
        $("image5").src = CARD0;
        $("image6").src = CARD0;
        $("image7").src = CARD0;
        $("image8").src = CARD0;
        $("image9").src = CARD0;
        $("image10").src = CARD0;
        $("image11").src = CARD0;
        $("image12").src = CARD0;
        $("image13").src = CARD0;
        $("image14").src = CARD0;
        $("image15").src = CARD0;
        $("image16").src = CARD0;
        TimesFlipped = 0;
        alert(MATCHES);

    }
}

function FlipImage1(){
    document.getElementById("image1").src = COMP[0];
    MATCHES.push(COMP[0]);
    TimesFlipped ++;




     FlipBack();

}

function FlipImage2() {
    document.getElementById("image2").src = COMP[1];
    MATCHES.push(COMP[1]);
    TimesFlipped++;



        FlipBack();

}

function FlipImage3(){
    document.getElementById("image3").src = COMP[2];
    TimesFlipped ++;
    MATCHES.push(COMP[2]);


       FlipBack();

}
function FlipImage4(){
    document.getElementById("image4").src = COMP[3];
    TimesFlipped ++;
    MATCHES.push(COMP[3]);


     FlipBack();

}


function FlipImage5(){
    document.getElementById("image5").src = COMP[4];
    MATCHES.push(COMP[4]);
    TimesFlipped ++;



        FlipBack();

}

function FlipImage6() {
    document.getElementById("image6").src = COMP[5];
    MATCHES.push(COMP[5]);
    TimesFlipped++;


        FlipBack();

}

function FlipImage7(){
    document.getElementById("image7").src = COMP[6];
    MATCHES.push(COMP[6]);
    TimesFlipped ++;


        FlipBack();

}
function FlipImage8(){
    document.getElementById("image8").src = COMP[7];
    MATCHES.push(COMP[7]);
    TimesFlipped ++;



        FlipBack();

}
function FlipImage9(){
    $("image9").src = COMP[8];
    MATCHES.push(COMP[8]);
    TimesFlipped++;

    FlipBack();
}
function FlipImage10(){
    $("image10").src = COMP[9];
    MATCHES.push(COMP[9]);
    TimesFlipped++;

    FlipBack();
}
function FlipImage11(){
    $("image11").src = COMP[10];
    MATCHES.push(COMP[10]);
    TimesFlipped++;

    FlipBack();
}
function FlipImage12(){
    $("image12").src = COMP[11];
    MATCHES.push(COMP[11]);
    TimesFlipped++;

    FlipBack();
}
function FlipImage13(){
    $("image13").src = COMP[12];
    MATCHES.push(COMP[12]);
    TimesFlipped++;

    FlipBack();
}
function FlipImage14(){
    $("image14").src = COMP[13];
    MATCHES.push(COMP[13]);
    TimesFlipped++;

    FlipBack();
}
function FlipImage15(){
    $("image15").src = COMP[14];
    MATCHES.push(COMP[14]);
    TimesFlipped++;

    FlipBack();
}
function FlipImage16(){
    $("image16").src = COMP[15];
    MATCHES.push(COMP[15]);
    TimesFlipped++;

    FlipBack();
}



function ShowHelp(){
    document.getElementById("helpOutput").innerHTML="The objective of the game is to match a card number and color with the corresponding number and color." +
        "For example, if you are to choose the two of clubs, you would match it with the two of spades.";

}
function ClearHelp(){
    document.getElementById("helpOutput").innerHTML='';
    $('gameAdvice').innerHTML="";

}

function GameAdvice(){
    $('gameAdvice').innerHTML='try to remember where cards are after they are turned over';
}
function Achievement(){
    $('achievement').innerHTML = 'you have got a match, good job!'
}