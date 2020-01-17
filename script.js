const text = document.querySelector(".love");
const stringText = text.textContent;
const splitText = stringText.split("");

text.textContent = "";

for(let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "<span>";
};

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
};

function complete() {
    clearInterval(timer);
    timer = null;
};
