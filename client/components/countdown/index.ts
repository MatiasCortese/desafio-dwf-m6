customElements.define("my-countdown", class extends HTMLElement {
    shadow: ShadowRoot;
    countdownNumber: number = 3;
    fondoImg = require("url:../../images/fondo.jpg");
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.setAttribute("ready", "false");
    }
    connectedCallback(){
        const style = document.createElement("style");
        style.innerHTML = `
            .countdownCircle {
                width: 243px;
                height: 243px;  
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 135px;
                position: relative;
            }

            .countdownCircle:before {
                content: "";
                border: 20px solid black;
                position: absolute;
                height: 84%;
                width: 84%;
                border-radius: 50%;
            }

            .countdownNumber {
                width: 189px;
                color: #000;
                text-align: center;
                font-family: American Typewriter;
                font-size: 100px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%;
                position: absolute;
            }

            .button:hover {
                cursor: pointer;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    intervalId = setInterval(() => {
            this.countdownNumber--;
            (this.shadow.querySelector(".countdownNumber") as any).innerHTML = `${this.countdownNumber}`;
            if (this.countdownNumber < 1){
                const myEvent = new CustomEvent("countdownEnd", {});
                this.dispatchEvent(myEvent);
                clearInterval(this.intervalId);
            }
        }, 1000);
    render(){
        const div = document.createElement("div");
        div.innerHTML = `
            <p class="countdownNumber">${this.countdownNumber}</p>
        `;
        div.classList.add("countdownCircle");
        this.shadow.appendChild(div);
    }
});
