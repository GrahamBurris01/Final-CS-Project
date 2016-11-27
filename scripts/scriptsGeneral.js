/**
 * Created by hamwa on 11/12/2016.
 */
function $(id){
    return document.getElementById(id);
}

var Time = 60*10;
setInterval(TimeMinus, 1000);
function ClickCounter(){
   Time = 60*10;
}
function TimeMinus(){
    if(Time > 0) {
        Time--;

        SetLogout()
    }
    if(Time < 60){
        $('outputGame').innerHTML = Time;
    }
}
function SetLogout(){
    if(1 > Time) {


        window.location.href = 'login page.html';
    }
}

function RandomInt(low,high){
    return Math.floor(Math.random()*(high-low+1))+low;
}

function RandomOneOf(list)
{
    var randomIndex;

    randomIndex = RandomInt(0, list.length-1);

    return list[randomIndex];
}

