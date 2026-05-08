const popup = document.getElementById("popup");
const yes = document.getElementById("yes");
const mensagem = document.getElementById("mensagem");

let tentativas = 0;

function abrirPopup(){

    popup.style.display = "flex";
}

function fecharPopup(){

    popup.style.display = "none";

    mensagem.innerHTML = "";

    tentativas = 0;

    yes.style.transform = "translate(0px, 0px)";
}

yes.addEventListener("mouseover", () => {

    const maxX = 350;
    const maxY = 80;

    const randomX = Math.random() * maxX - 150;
    const randomY = Math.random() * maxY - 40;

    yes.style.transform = `translate(${randomX}px, ${randomY}px)`;

    tentativas++;

    if(tentativas === 5){

        mensagem.innerHTML = "BRO JUST CLICK NO !!";
    }

});

yes.addEventListener("click", () => {

    document.body.innerHTML = `
    <div style="
    width:100vw;
    height:100vh;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:'Press Start 2P',system-ui;
    color:white;
    font-size:30px;
    ">
    FINE...
    </div>
    `;
});