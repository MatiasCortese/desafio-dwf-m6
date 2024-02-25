import "../../components/button";
import "../../components/presentation-text";
import "../../components/jugada";
import "../../components/input";
import { state } from "../../state";
import { Router } from "@vaadin/router";

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
                <my-input id="username" class="btn"  name="my-name"></my-input>
            </div>
            <my-button class="btn" id="enter-to-room-btn">Ingresar a una sala</my-button>
            <my-button class="btn hidden" id="enter-the-room-btn">Ingresar a la sala</my-button>
            <my-button class="btn hidden" id="enter-new-room">Empezar</my-button>
            <my-button class="btn hidden" id="enter-the-room">Empezar</my-button>
            <div class="jugadas-container">
                <move-jugada jugada="tijera" class="jugada"></move-jugada>
                <move-jugada jugada="piedra" class="jugada"></move-jugada>
                <move-jugada jugada="papel" class="jugada"></move-jugada>
            </div>
        `;
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
        const enterToRoomBtnEl = this.querySelector("#enter-to-room-btn");
        const enterTheRoomBtnEl = this.querySelector("#enter-the-room-btn");
        const newGameBtnEl = this.querySelector("#new-game");
        const inputNameEl = document.querySelector("#my-name");
        const beginEl = this.querySelector("#enter-new-room");
        enterToRoomBtnEl.addEventListener("click", () => {
            const enterRoomCodeInputEl = document.querySelector("#enter-room-input");
            newGameBtnEl.classList.toggle("hidden");
            enterRoomCodeInputEl.classList.toggle("hidden");
            enterToRoomBtnEl.classList.toggle("hidden");
            enterTheRoomBtnEl.classList.toggle("hidden");
        });
        // Enter existing room
        enterTheRoomBtnEl.addEventListener("click", async () => {
            const enterRoomCodeInputEl = document.querySelector("#enter-room-input");
            const friendlyRoomId = (enterRoomCodeInputEl.children[0] as any).value;
            await state.checkRoomExistence(friendlyRoomId);
            if (state.getState().rtdbRoomId) {
                const enterExistingRoom = document.querySelector("#enter-the-room");
                enterExistingRoom.classList.toggle("hidden");
                enterRoomCodeInputEl.classList.toggle("hidden");
                inputNameEl.classList.toggle("hidden");
                enterTheRoomBtnEl.classList.toggle("hidden");
                enterExistingRoom.addEventListener("click", async () => {
                    const usernameEl = document.querySelector("#username");
                    const usernameVal = (usernameEl.children[0] as any).value;
                    await state.signIn(usernameVal);
                    // aca deberia ejecutarse el checkRoomisFull
                    await state.setUserTwo();
                    await state.setOnline();
                    await state.listenDatabase();
                    Router.go("/instructions");
                });
            }
        });
        // new room
        newGameBtnEl.addEventListener("click", () => {
            const beginNewGameBtnEl = document.querySelector("#enter-new-room");
            inputNameEl.classList.toggle("hidden");
            newGameBtnEl.classList.toggle("hidden");
            enterToRoomBtnEl.classList.toggle("hidden");
            beginNewGameBtnEl.classList.toggle("hidden");
        });
        beginEl.addEventListener("click", async ()=>{
            const usernameEl = document.querySelector("#username");
            const usernameVal = (usernameEl.children[0] as any).value;
            if (usernameVal) {
                await state.signIn(usernameVal);
                await state.askNewRoom();
                Router.go("/share-code");
            } else {
                console.log("no hay un username");
            }
        })
    }
});