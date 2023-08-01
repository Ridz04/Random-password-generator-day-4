const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';
const all = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = '';
    for(let i = 0; i < length; i++){
        const character = Math.floor(Math.random() * all.length);
        password += all[character];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}