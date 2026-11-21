
const loginForm = document.querySelector("#login-form");
const loginSection = document.querySelector("#login");
const content = document.querySelector(".content");
const loginMessage = document.querySelector("#login-message");

// Username dan password
const validPassword = "06102024";

// Fungsi untuk mengatur tampilan
function checkLogin() {
    const isLogin = sessionStorage.getItem("isLogin") === "true";
    
    if (isLogin) {
       const username = sessionStorage.getItem("username");

document.getElementById("greeting").textContent =
    `Hello ${username[0].toUpperCase() + username.slice(1)}!! Welcome To`;;
    }
    loginSection.hidden = isLogin;
    content.hidden = !isLogin;
}


checkLogin();

// Proses login
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;

    const password = document.querySelector("#password").value;

    if (username === "berland" || username === "yuri" && password === validPassword) {

        sessionStorage.setItem("isLogin", "true");
        sessionStorage.setItem("username",username);

        loginMessage.textContent = "";

        checkLogin();

    } else {
        loginMessage.textContent = "USERNAME ATAU PASSWORD SALAH!";
    }
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const navLink = document.querySelector(
            `.navbar-floating a[href="#${entry.target.id}"]`
        );

        if (entry.isIntersecting) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    });
}, {
    rootMargin: "-9% 0px -90% 0px"
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});
const typingElement = document.getElementById("typing");
function typeWriter(text, element) {
    let index = 0;

    const typing = () => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;

            setTimeout(typing, 150);
        } else {
            setTimeout(deleting, 1000);
        }
    };

    const deleting = () => {
        if (index > 0) {
            index--;
            element.textContent = text.substring(0, index);

            setTimeout(deleting, 200);
        } else {
            setTimeout(typing, 1000);
        }
    };

    typing();
}
const observ = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
             entry.target.classList.remove("active");
        }
    });
});

const elements = document.querySelectorAll(".reveal");

elements.forEach((element) => {
    observ.observe(element);
});

button = document.getElementById("scrollBtn");
window.addEventListener("scroll", ()=> {
    if (window.scrollY > 20) {
        button.classList.add("active");
    }
    else {
        button.classList.remove("active");
    }
});
button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const navbar = document.querySelector(".navbar-floating");

let lastScroll = 0;
const threshold = 10;

typeWriter("A STORY OF US",typingElement);
const typing1 = document.getElementById("typing1");
const typing2 = document.getElementById("typing2");
typeWriter("OUR MEMORIES",typing1);
typeWriter("OUR TIMELINE",typing2);


const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click",(e) => {
e.preventDefault();
const icon = themeBtn.querySelector("svg");
if (icon.getAttribute("data-lucide") === "moon") {
    icon.setAttribute("data-lucide","sun");
    themeBtn.setAttribute("data-label","Light Mode");
    document.body.classList.remove("dark");
} else {
    icon.setAttribute("data-lucide","moon");
    themeBtn.setAttribute("data-label","Dark Mode");
    document.body.classList.add("dark");
}
lucide.createIcons();
});
