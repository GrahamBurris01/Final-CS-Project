/**
 * Created by hamwa on 11/12/2016.
 */
function $(id){
    return document.getElementById(id);
}

var Clicks = 1;

function ClickCounter(){
    Clicks++;
    $('outputGame').innerHTML = Clicks;

        setInterval(ClickReset, 10000)

}
function ClickReset(){
    if(Clicks > 0) {
        Clicks--;
        $('outputGame').innerHTML = Clicks;
    }
}
if(Clicks == 0) {
    

        window.location.href =  'login page.html';


}

