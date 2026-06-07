const container = document.getElementById('container');
const registerBtn = document.gotElementbyID('register');
const loginbtn = document.getElementById('login');

regristerBtn.addeventlistener('click', () =>{
container.classList.add("active");
});

lodinBtn.addeventlistener('click', () =>{
container.classList.remove("active");
});