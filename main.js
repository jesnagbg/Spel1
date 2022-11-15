let itemList = ["Broom", "Potatoes"];
const choseWeapon = ["Sword", "Broom", "Needle"];
const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
const startPageContent = document.getElementById("start-page");
const gameContent = document.getElementById("game-container");
//const spareQuestion = document.getElementById("extra-question");
let playerName = "Farmer";
let timeoutRef;
let text;
let button1;
let button2;

window.addEventListener("DOMContentLoaded", displayItems);

nameButton.addEventListener("click", savePlayerName);

function displayItems() {
    const div = document.getElementById("item-container");
    const ul = document.createElement("ul");
    ul.id = "item-list";

    for (const item of itemList) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
    }

    div.innerHTML = "";
    div.append(ul);
}

function savePlayerName() {
    playerName = document.getElementById("name-input").value;
    console.log(playerName);
    
    oneMoreQ();
}

function oneMoreQ() {
    const extraQuestion = document.getElementById("extra-question");
    extraQuestion.textContent = 'Oh, right. Sorry, ' + playerName + '. Just one more thing! Chose your weapon';

    timeoutRef = setTimeout(choseYourWeapon, 1000);
    //choseYourWeapon();
}

function choseYourWeapon() {
    clear();
    const div = document.getElementById("button-container");
    
    for (const weapon of choseWeapon) {
        const button = document.createElement("button");
        button.className = "button-style";
        button.textContent = weapon;
        button.addEventListener('click', function() {
            itemList.push(weapon);
            displayItems();
            loadFirstPage();
        })
        div.append(button);
    }    
}

function clear() {
    document.getElementById("button-container").innerHTML = "";
}

//display pocket, first text and new buttons (delayed)
function loadFirstPage() {
    hideStartPage();
    gameContent.classList.remove("invis");
    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    button2 = document.getElementById('opt-2');

    text.textContent = "Hej och välkommen till min värld";
  
    button1.textContent = "Gå till bastun";
    button1.addEventListener('click', loadSaunaScene);
  
    button2.textContent = "Stanna kvar och lyssna på fåglarna";
    button2.addEventListener('click', loadBirdsScene);
    
}

function hideStartPage() {
    startPageContent.classList.add("invis");
}






