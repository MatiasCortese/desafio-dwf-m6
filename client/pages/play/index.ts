import { state } from "../../state";
import "../../components/countdown";

customElements.define("play-screen", class extends HTMLElement {
    backgroundImgUrl;
    myMove;
    params;
    constructor(params){
        super();
        this.backgroundImgUrl = require("url:../../images/fondo.jpg");
        this.myMove;
        this.params = params;
    }
    connectedCallback(){
        this.render();
        this.addStyle();
        this.myPlay();
        this.manageCountdown();
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
            </div>;
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
    myPlay(){
        var myMove;
        const playsContainerEl = this.querySelector(".plays-container");
        playsContainerEl.querySelectorAll(".jugada").forEach(play => {
            play.addEventListener("click", (e) => {
                const target = e.target as any;
                myMove = target.closest("move-jugada").jugada;
                this.myMove = myMove;
            })
        });
    }
    
    // Esto en la version ppt online se omite ya que la jugada la hace el oponente
    // function computerPlay(){
    //     const moves = div.querySelectorAll("[jugada]");
    //     const jugadas: any[] = [];
    //     moves.forEach(move => {
    //         const jugada = move.getAttribute("jugada");
    //         jugadas.push(jugada);
    //     });
    //     const jugadaRandom = jugadas[Math.floor(Math.random() * jugadas.length)];
    //     return jugadaRandom;
    // };

    // VER ESTO
    showMoves(opponentMove, myMove){
        const resultado = state.whoWin(myMove, opponentMove);
        const opponentPlayEl = document.createElement("move-jugada");
        const myPlay = document.createElement("move-jugada");
        const countdownEl = this.querySelector("my-countdown");
        const playsContainerEl = this.querySelector(".plays-container");
        const playScreenEl = this.querySelector(".play-screen");
        //  aca
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
        const intervalId = setInterval(() => {
            counter--
            if (counter == 0) {
                // ver bien las routes
                if (resultado === "Gané") {
                    this.params.goTo("/result/ganaste");
                }
                if (resultado === "Perdí") {
                    this.params.goTo("/result/perdiste");
                }
                if (resultado === "Empaté") {
                    this.params.goTo("/instructions");
                }
                clearInterval(intervalId);
            }
        }, 1000);
    }
    manageCountdown(){
        const countdownEl = this.querySelector("my-countdown");
        countdownEl?.addEventListener("countdownEnd", () => {
        // Ojo aca porque la function computerPlay() ya no se usaria en ppt online. Esto deberia ser una function que checkee si el oponente jugo o no y que, si jugo, que movimiento hizo
        // const opponentMove = computerPlay();
        if (this.myMove == undefined) {
            this.params.goTo("/instructions");
        } else {
            // this.showMoves(opponentMove, this.myMove);
            // state.setMoves(myMove, opponentMove);
        }   
    });
    }
});
    
