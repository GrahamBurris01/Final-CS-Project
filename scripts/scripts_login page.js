
/**
 * Created by hamwa on 11/2/2016.
 */


var UsernameLogin;
var PasswordLogin;

var SavedName = "SavedName";
var SavedUsername = "SavedUsername";
var SavedPassword = "SavedPassword";

function SaveUsernameAndPassword() {
    var Name = document.getElementById("newName").value;
    var Username = document.getElementById("newUsername").value;
    var Password = document.getElementById("newPassword").value;
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

if(localStorage.getItem('SavedUsername').value = document.getElementById("usernameTxt").value) {

    alert('hi');
window.location = "game page.html";
}
}