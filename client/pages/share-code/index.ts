import "../../components/paragraph-text";

customElements.define("share-code", class extends HTMLElement {
    backgroundImgUrl;
    playerOneName;
    playerTwoName;
    playerOneScore;
    playerTwoScore;
    roomId;
    constructor(){
        super();
        this.backgroundImgUrl = require("url:../../images/fondo.jpg");
        this.playerOneName = this.playerOneName;
        this.playerTwoName = this.playerTwoName;
        this.playerOneScore = this.playerOneScore;
        this.playerTwoScore = this.playerTwoScore;
        this.roomId = this.roomId;
    }
    connectedCallback(){
        this.render();
        this.addStyle();
        // ESTA PANTALLA TERMINA CUANDO EL STATE DETECTA QUE EN LA ROOM HAY DOS PERSONAS CONECTADAS, AHI YA PASA A LA PANTALLA DE PLAY
    }
    render(){
        this.innerHTML = `
            <div class="container">
                <div class="flex-container">
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
                    <div class="share-message">
                        <p-text>Compartí el código</p-text>
                        <p-text>${this.roomId}</p-text>
                        <p-text>Con tu contrincante</p-text>
                    </div>
                    <div class="jugadas-container">
                        <move-jugada jugada="tijera" class="jugada"></move-jugada>
                        <move-jugada jugada="piedra" class="jugada"></move-jugada>
                        <move-jugada jugada="papel" class="jugada"></move-jugada>
                    </div>
                </div>
            </div>
        `;
    }
    addStyle(){
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
                width: 100%;
                height: 100vh;
            }

            .flex-container {
                padding: 20px 21px 0px 20px;
            }

            .room-data {
                display: flex;
                justify-content: space-between;
                color: #000;
                gap: 25px;
                font-family: American Typewriter;
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: 100%;
                margin-bottom: 130px;
            }

            .jugadas-container {
                display: flex;
                gap: 46px;
                width: 100%;
                height: 20%;
                align-items: center;
                justify-content: center;
                position: fixed;
                bottom: -50px;
            }

            .player-two {
                color: red;
            }
        `;
        this.appendChild(style);
    }
});