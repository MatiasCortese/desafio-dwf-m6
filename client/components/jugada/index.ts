customElements.define("move-jugada", class extends HTMLElement {
    shadow: ShadowRoot;
    jugada: string;
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});   
    }
    connectedCallback(){
        (this.jugada as any) = this.getAttribute("jugada");
        const style = document.createElement("style");
        style.innerHTML = `
            .hand {
                width: 140px;
            }

            .hand:hover {
                cursor: pointer;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    imgSelector(jugada: string){
        if(jugada == "papel") {
            return require("url:../../images/papel.svg");
        }
        if(jugada == "piedra"){
            return require("url:../../images/piedra.svg");
        }
        if(jugada == "tijera"){
            return require("url:../../images/tijera.svg");
        }   
    }
    render(){
        const div = document.createElement("div");
        const jugadaImg = this.imgSelector(this.jugada);
        div.innerHTML = `
            <img class="hand" src="${jugadaImg}">
        `;
        this.shadow.appendChild(div);
    }
});