import "../../components/button";
import "../../components/presentation-text";
import "../../components/jugada";
import "../../components/input";
import { state } from "../../state";

customElements.define("welcome-page", class extends HTMLElement {
    backgroundImgUrl;
    constructor(){
        super();
        this.backgroundImgUrl = require("url:../../images/fondo.jpg");
    }
    connectedCallback(){
        this.render();
        this.addStyle();
        this.manageOptions();
    }
    render(){
        this.innerHTML = `
        <pres-text>Piedra, Papel ó Tijera</pres-text>
        <my-button class="btn" id="new-game">Nuevo juego</my-button>
        <my-input class="btn hidden" id="enter-room-input">código</my-input>
        <div id="my-name" class="my-name btn hidden">
            <label for="my-name" class="my-name">Tu Nombre</label>
            <my-input class="btn"  name="my-name"></my-input>
        </div>
        <my-button class="btn" id="enter-room-btn">Ingresar a una sala</my-button>
        <my-button class="btn hidden" id="enter-new-room">Empezar</my-button>
        <div class="jugadas-container">
            <move-jugada jugada="tijera" class="jugada"></move-jugada>
            <move-jugada jugada="piedra" class="jugada"></move-jugada>
            <move-jugada jugada="papel" class="jugada"></move-jugada>
        </div>`;
    }
    addStyle(){
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                padding: 115px 26px 26px 27px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
                height: 85vh;
            }

            .btn {
                width: 100%;
                margin-bottom: 20px;
            }

            .jugadas-container {
                display: flex;
                gap: 46px;
                width: 100%;
                height: 20%;
                align-items: center;
                justify-content: space-evenly;
                position: fixed;
                bottom: -40px;
            }

            .my-name {
                color: #000;
                text-align: center;
                font-family: Odibee Sans;
                font-size: 45px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 2.25px;
            }

            .hidden {
                display: none;
            }
        `;
        this.appendChild(style);
        this.classList.add("container");
    }
    manageOptions(){
        const enterRoomBtnEl = this.querySelector("#enter-room-btn");
        const newGameBtnEl = this.querySelector("#new-game");
        enterRoomBtnEl.addEventListener("click", () => {
            const enterRoomCodeInputEl = document.querySelector("#enter-room-input");
            newGameBtnEl.classList.toggle("hidden");
            enterRoomCodeInputEl.classList.toggle("hidden");
            // si clickeamos este boton, el btn de nuevo juego debe desaparecer y, en su lugar, aparecer el input que permita colocar el ID de una room. Por otro lado, tambien debe desaparecer el btn de Ingresar a una sala y aparecer uno que permita ingresar a la sala cuyo ID se ingresó buscandolo en la db?
        });
        newGameBtnEl.addEventListener("click", () => {
            const inputNameEl = document.querySelector("#my-name");
            const beginNewGameBtnEl = document.querySelector("#enter-new-room");
            inputNameEl.classList.toggle("hidden");
            newGameBtnEl.classList.toggle("hidden");
            enterRoomBtnEl.classList.toggle("hidden");
            beginNewGameBtnEl.classList.toggle("hidden");
            // si clickeamos aqui, debe quitar los btns y colocar el input para el nombre y el boton para empezar, que debe registrar al user y crear la room en la db
        });
        const beginEl = this.querySelector("#enter-new-room");
        beginEl.addEventListener("click", ()=>{
            state.test("matute")
        })
    }
});