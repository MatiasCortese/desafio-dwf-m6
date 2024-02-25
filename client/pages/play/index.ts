import { state } from "../../state";
import "../../components/countdown";
import { Router } from "@vaadin/router";
import { map } from "lodash";

customElements.define("play-screen", class extends HTMLElement {
    backgroundImgUrl;
    userName;
    choice;
    opponentChoice;
    rtdbData;
    constructor(){
        super();
        this.backgroundImgUrl = require("url:../../images/fondo.jpg");
        this.rtdbData = this.rtdbData;
        this.userName = this.userName;
    }
    connectedCallback(){
        this.render();
        this.addStyle();
        this.myPlay();
        this.manageCountdown();
        this.userName = state.getState().userName;
    }
    render(){
        this.innerHTML = `
            <my-countdown></my-countdown>
            <div class="plays-container">
                <move-jugada class="jugada" jugada="tijera"></move-jugada>
                <move-jugada class="jugada" jugada="piedra"></move-jugada>
                <move-jugada class="jugada" jugada="papel"></move-jugada>
            </div>
            <div class="play-screen hidden">
            </div>
        `;
    };
    addStyle(){
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            height: 90vh;
        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 15%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -20px;

        }

        .play-screen {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100vh;
        }

        .jugada {
            opacity: 0.5;
        }

        .hand {
            width: 120px;
            height: 270px;
        }

        .jugada:hover {
            position: relative;
            bottom: 30px;
            opacity: 1;
        }

        .chosen-play {
            width: 159px;
            height: 356px
        }

        .hidden {
            display: none;
        }
    `;
        this.appendChild(style);
        this.classList.add("container");
    }
    // pensar bien la logica de esta page
    myPlay(){
        var choice;
        const playsContainerEl = this.querySelector(".plays-container");
        playsContainerEl.querySelectorAll(".jugada").forEach(play => {
            // escuchamos el clickeo de un choice
            play.addEventListener("click", (e) => {
                // escuchamos la rtdb
                state.listenDatabase();
                const target = e.target as any;
                choice = target.closest("move-jugada").jugada;
                this.choice = choice;
                state.setChoice(this.choice);
            })
        });
    }
    manageCountdown(){
        const countdownEl = this.querySelector("my-countdown");
        countdownEl?.addEventListener("countdownEnd", async () => {
        const rtdbData = map(state.getState().rtdbData);
        await rtdbData.forEach(item => {
            if (this.userName == item.userName) {
                this.choice = item.choice;
            } 
            if (this.userName != item.userName){
                this.opponentChoice = item.choice;
            }
        });
        if (["piedra", "papel", "tijera"].includes(this.choice) && ["piedra", "papel", "tijera"].includes(this.opponentChoice)) {
            // Esto se esta guardando 2 veces en firestore ya que lo ejecutan 2 clientes
            this.showMoves(this.opponentChoice, this.choice);
        }
        else {
            console.error("Error: Las variables deben ser 'piedra', 'papel' o 'tijera'");
            await state.setStart(false);
            await state.setChoice("");
            Router.go("/instructions");
        }
    });
    }
    showMoves(opponentMove, myMove){
        const resultado = state.whoWin(myMove, opponentMove);
        const opponentPlayEl = document.createElement("move-jugada");
        const myPlay = document.createElement("move-jugada");
        const countdownEl = this.querySelector("my-countdown");
        const playsContainerEl = this.querySelector(".plays-container");
        const playScreenEl = this.querySelector(".play-screen");
        var containerEl = document.querySelector(".container");
        (containerEl as HTMLElement).style.padding = "0px";
        countdownEl?.classList.toggle("hidden");
        playsContainerEl?.classList.toggle("hidden");
        playScreenEl?.classList.toggle("hidden");
        opponentPlayEl.setAttribute("jugada", opponentMove);
        opponentPlayEl.style.transform = "rotate(180deg)";
        myPlay.setAttribute("jugada", myMove);
        playScreenEl?.append(opponentPlayEl, myPlay);
        let counter = 3;
        const intervalId = setInterval(async () => {
            counter--
            if (counter == 0) {
                if (resultado === "Gané") {
                    await state.savePlayInHistory();
                    console.log("entre al ganè");
                    Router.go("/ganaste");
                    // aca lo que podemos hacer es que siempre el que gana es el que pushea el Play en el history. El que pierde no guarda nada y, como si empatamos no guardamos nada, no hace falta
                }
                if (resultado === "Perdí") {
                    Router.go("/perdiste");
                }
                if (resultado === "Empaté") {
                    state.setChoice("");
                    state.setStart(false);
                    Router.go("/instructions");
                    // aca hay que cambiar los start y el otro a
                }
                clearInterval(intervalId);
            }
        }, 1000);
    }
    
});
    
