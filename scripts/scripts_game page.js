/**
 * Created by hamwa on 10/30/2016.
 */


function ShowHelp(){
    document.getElementById("helpOutput").innerHTML="The objective of the game is to match a card number and color with the corresponding number and color." +
        "For example, if you are to choose the two of clubs, you would match it with the two of spades.";

}
function ClearHelp(){
    document.getElementById("helpOutput").innerHTML='';

    document.getElementById('faceDownCard1').src = '2_of_clubs.png';
}



