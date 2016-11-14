
/**
 * Created by hamwa on 11/2/2016.
 */
var name = $('newName').value;
var Username = $('newUsername').value;
var Password = $('newPassword').value;



function SaveNewUser(){
localStorage.setItem('usernameLocal',Username);
localStorage.setItem('passwordLocal',Password);
alert(localStorage.getItem(Password));
    window.location.href = 'account conformation page.html';
}

function Login(){
    var UsernameInput = $('usernameTxt').value;
    var PasswordInput = $('passwordTxt').value;
alert(PasswordInput);
    alert(localStorage.getItem('passwordLocal'));

    if(localStorage.getItem('usernameLocal') == UsernameInput
    && localStorage.getItem('passwordLocal') == PasswordInput){
        alert('hi');
        window.location.href = 'game page.html';
    }
}