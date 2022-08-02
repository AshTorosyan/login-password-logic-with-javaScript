let signUpBtn = document.getElementById("btn");

signUpBtn.addEventListener("click", () => {
   let login = document.getElementById("login").value;
   let password = document.getElementById("password").value;
   let confirmPassword = document.getElementById("confirmPassword").value;
   let email = document.getElementById("email").value;
let user = {
   login,
   password,
   confirmPassword,
   email
}



if(login.length >= 5 && login.length <= 10 && password == confirmPassword && email.length >= 5) {
  let json =  JSON.stringify(user);
  localStorage.setItem(login, json);
  console.log("add user");
}else if(password !==confirmPassword) {
   alert("<WRONG>password must be equal confirmPassword");
}else{
   alert("fill in all fields");
}
});


let logInBtn = document.getElementById("logInBtn");

logInBtn.addEventListener("click", () => {
 let login =  document.getElementById("login").value;
 let password =  document.getElementById("password").value;

let user = localStorage.getItem(login);
let parse = JSON.parse(user);
console.log(parse);
if(user == null) {
   alert("wrong login");
} else if (login == parse.login && password == parse.password) {
   alert(`you loged in ${login}`);
} else {
   alert("wrong password");
}
});