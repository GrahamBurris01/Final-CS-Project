
/**
 * Created by hamwa on 11/2/2016.
 */
var Name;
var Username;
var Password;

var UsernameLogin;
var PasswordLogin;
function SaveUsernameAndPassword() {
    document.getElementById("newName").innerHTML = Name;
    document.getElementById("newUsername").innerHTML = Username;
    document.getElementById("newPassword").innerHTML = Password;

    localStorage.setItem(Password, Username);

window.location= "login page.html";
}
function Login(){
document.getElementById("usernameTxt").innerHTML = UsernameLogin;
document.getElementById("passwordTxt").innerHTML = PasswordLogin;

if(localStorage.getItem(PasswordLogin,Username)) {
    alert(Username)

}
}