
/**
 * Created by hamwa on 11/2/2016.
 */


var UsernameLogin;
var PasswordLogin;

var SavedName = "SavedName";
var SavedUsername = "SavedUsername";
var SavedPassword = "SavedPassword";

var SavedUsernameAndPassword;
var InputUsernameAndPassword;

function SaveUsernameAndPassword() {
    var Name = document.getElementById("newName").value;
    var Username = document.getElementById("newUsername").value;
    var Password = document.getElementById("newPassword").value;


    var



    alert(Password);

    localStorage.setItem('SavedName',Name);
    localStorage.setItem('SavedUsername',Username);
    localStorage.setItem('SavedPassword',Password);

window.location= "login page.html";
}
function Login(){
    alert(localStorage.getItem(SavedName));
    alert(localStorage.getItem(SavedUsername));
alert(localStorage.getItem(SavedPassword));

document.getElementById("passwordTxt").value = PasswordLogin;

  SavedUsernameAndPassword = localStorage.getItem('SavedUsername').value + localStorage.getItem('SavedPassword');
    InputUsernameAndPassword = document.getElementById("usernameTxt").value + document.getElementById("passwordTxt");

    if(SavedUsernameAndPassword = InputUsernameAndPassword) {

    alert('hi');
window.location = "game page.html";
}else{
        document.getElementById('divLoginError').innerHTML = 'wrong username or password'
    }
}