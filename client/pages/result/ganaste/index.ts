import "../../../components/star";
import "../../../components/score";
import { state } from "../../../state";
import { Router } from "@vaadin/router";
customElements.define("win-el", class extends HTMLElement {
    resultado;
    constructor(){
        super();
        this.resultado = "ganaste";
    }
    connectedCallback(){
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #888949;
            opacity: 0.9;
            width: 100%;
            height: 100vh;
            gap: 25px;
        }
    `;
        this.appendChild(style);
        this.classList.add("container");
        this.playAgain();
    }
    render(){
        this.innerHTML = `
            <star-result resultado="${this.resultado}"></star-result>
            <score-item></score-item>
            <my-button class="volver-welcome">Volver a jugar</my-button>
        `;
    }
    playAgain(){ 
        const playAgainBtn = document.querySelector(".volver-welcome");
        playAgainBtn.addEventListener("click", async () => {
            await state.setStart(false);
            await state.setChoice("");
            Router.go("/instructions");
        })
    };
});


