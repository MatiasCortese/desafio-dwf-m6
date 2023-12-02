customElements.define("instructions-page", class extends HTMLElement {
    backgroundImgUrl;
    playerOneName;
    playerTwoName;
    playerOneScore;
    playerTwoScore;
    roomId;
    constructor(){
        super();
        this.backgroundImgUrl = require("url:../../images/fondo.jpg");
        this.backgroundImgUrl =  this.backgroundImgUrl;
        this.playerOneName = this.playerOneName;
        this.playerTwoName = this.playerTwoName;
        this.playerOneScore = this.playerOneScore;
        this.playerTwoScore = this.playerTwoScore;
        this.roomId =  this.roomId;
    }
    connectedCallback(){
        this.render();
        this.addStyle();
        this.playAndCheck();
    }
    render(){
        this.innerHTML = `
            <div class="room-data">
                <div class="players-names">
                    <div class="player-one">
                        ${this.playerOneName}:${this.playerOneScore}
                    </div>
                    <div class="player-two">
                        ${this.playerTwoName}:${this.playerTwoScore}
                    </div>
                </div>
                <div class="room-id">
                    Sala: ${this.roomId}
                </div>
            </div>
            <p class="instructions">Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
            <my-button class="jugar">¡Jugar!</my-button>
            <p-text class="p-waiting hidden">Esperando a que ${this.playerTwoName} presione ¡Jugar!...</p-text>
            <div class="plays-container">
                <move-jugada jugada="tijera"></move-jugada>
                <move-jugada jugada="piedra"></move-jugada>
                <move-jugada jugada="papel"></move-jugada>
            </div>
        `;
    }
    addStyle(){
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            padding: 20px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            justify-contnet: center;
            align-items: center;
            background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            width: 85%;
            height: 97vh;
        }

        .instructions {
            width: 317px;
            color: #000;
            text-align: center;
            font-family: American Typewriter;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 40px */
        }
        
        .jugar {
            width: 100%;
        }

        .p-waiting {
            margin-top: 197px;

        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -40px;
        }

        .room-data {
            display: flex;
            justify-content: space-between;
            color: #000;
            gap: 25px;
            font-family: American Typewriter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%;
            margin-bottom: 130px;
        }

        .player-two {
            color: red;
        }
        
        .hidden {
            display: none;
        }
        `;
        this.appendChild(style);
        this.classList.add("container");
    }
    playAndCheck(){
        const playBtnEl = document.querySelector(".jugar");
        playBtnEl.addEventListener("click", () => {
            const instructionsEl = document.querySelector(".instructions");
            const waitingEl = document.querySelector(".p-waiting");
            const elements = [instructionsEl, playBtnEl, waitingEl];
            elements.forEach(el => {
                el.classList.toggle("hidden");
                // esto deberia estar suscripto al state y chequear de alguna manera cuando el otro player tambien haya apretado jugar, puede ser una propiedad tipo playPressed = t o f, cuando ambos son true se tiene que ir a la pantalla del countdown
            })
        });
    }
});