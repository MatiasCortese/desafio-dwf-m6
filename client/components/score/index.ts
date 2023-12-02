customElements.define("score-item", class extends HTMLElement {
    shadow: ShadowRoot;
    myScore: number;
    computerScore: number;
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});   
    }
    connectedCallback(){
        // const scores = state.scoreCalculator();
        // (this.myScore as any)  = scores?.myScore;
        // (this.computerScore as any) = scores?.computerScore;
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
        this.shadow.appendChild(style);
        this.render();
    }
    
    render(){
        const div = document.createElement("div");
        div.innerHTML = `
            <h3 class="score-title">Score</h3>
            <div class="score-container">
                <p class="score myScore">Vos: ${this.myScore}</p>
                <p class="score computerScore">Máquina: ${this.computerScore}</p>
            </div>
        `;
        div.classList.add("container")
        this.shadow.appendChild(div);
    }
});