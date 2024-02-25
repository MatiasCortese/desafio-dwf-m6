import { state } from "../../state";

customElements.define("score-item", class extends HTMLElement {
    historyData: any;
    shadow: ShadowRoot;
    myScore: number;
    opponentScore: number;
    result = "";
    playerOneId = "";
    playerTwoId = "";
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }
    async connectedCallback(){
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                height: 217px;
                border-radius: 10px;
                border: 10px solid #000000;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }

            .score-title {
                font-family: 'Odibee Sans', cursive;
                font-weight: 400;
                font-size: 55px;
                line-height: 60.94px;
                margin-top: 10px;
                margin-bottom: 0px;
            }

            .score-container {
                width: 100%;
                margin-right: 30px;
                display: flex;
                flex-direction: column;
                align-items: end;

            .score {
                font-family: 'Odibee Sans', cursive;
                font-size: 45px;
                margin: 0;
            }
        `;
        this.historyData = await state.getHistory();
        this.scoreCalculator();
        this.shadow.appendChild(style);
        this.render();
    }
    render(){
        const div = document.createElement("div");
        div.innerHTML = `
            <h3 class="score-title">Score</h3>
            <div class="score-container">
                <p class="score myScore">Vos: ${this.myScore}</p>
                <p class="score opponentScore">Oponente: ${this.opponentScore}</p>
            </div>
        `;
        div.classList.add("container")
        this.shadow.appendChild(div);
    }
    scoreCalculator(){
        this.myScore = 0;
        this.opponentScore = 0;
        
        // este metodo tiene que leer la data de cs.history
        // recorrer el array de objetos e ir viendo como organizar la data para que se guarde en myScore y opponentScore
        const history = state.getState().history;
        history.forEach(item => {
            item.forEach(otroItem => {
                // esto nos devuelve el objeto con los 4 propeidades de la jugada, ver comos seguir
                this.playerOneId = otroItem.data.playerOneId;
                this.playerTwoId = otroItem.data.playerTwoId;
                this.result = state.whoWin(otroItem.data.playerOneChoice, otroItem.data.playerTwoChoice);
                console.log("final del forEach de history")
            })
        });
        // SI EL RESULTADO ES GANE
        if (this.result === "Gané") {
            console.log("dentro del IF Gane");
            console.log(`Soy el user ID del state ${state.getState().userId}`)
            console.log(`Soy el user ID history ${this.playerOneId}`)
            if (state.getState().userId == this.playerOneId) {
                this.myScore++
            }
            if(state.getState().userId == this.playerTwoId) {
                this.opponentScore++
            }
        }
        if (this.result === "Perdí") {
            console.log("dentro del IF Perdi");
            console.log(`Soy el user ID del state ${state.getState().userId}`)
            console.log(`Soy el user ID history ${this.playerOneId}`)
            if(state.getState().userId === this.playerOneId) {
                this.opponentScore++
            }
            if(state.getState().userId === this.playerTwoId) {
                this.myScore++
            }
        }
    }
})
