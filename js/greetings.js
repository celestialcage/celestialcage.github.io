/* const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
 */

//위에 저걸 더 줄이면 이렇게 된다.
/* const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); */

//input의 입력값을 가져오고 싶을 때, 아직 모르면
//console.dir(loginInput);으로 콘솔창에 봐보면 된다!
//value는 HTML에 미리 적어두면 선입력되어있을 수 있음! -> 이걸로 이전페이지 입력값 유지하는건가?

//아래처럼 user가 입력하는 값의 유효성을 확인하는 좋은 연습도 될 수 있지만,
//브라우저가 제공하는 기능을 사용하는 것도 좋다.
/* function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === "") {
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long.");
    } else {
        alert("hello, " + username);
    }
}

loginButton.addEventListener("click", onLoginBtnClick) */

//브라우저가 제공하는 기능... html의 form을 쓰는 것. required라는 속성?을 넣을 수도 있고,
//maxlength = "15"라고 속성을 넣을 수도 있음. input에. 대신 form에 속해있는 input이어야함.
//이러고나면 버튼을 눌렀을 때 페이지가 새로고침되는데 form이 submit되었기 때문.


//강의 4.2
//이제 loginButton~은 없애면 되고, 지금 필요한 건 login-form 그 자체임.(현재 form으로 바꿈)
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

//같은 동작을 반복하고 있음. -> 함수로 만들어보자.
//이 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 될 것.
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form & EventListener까지
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings & h1에 username 추가(텍스트 추가를 먼저)
    paintGreetings(savedUsername);
}

