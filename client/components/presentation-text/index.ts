customElements.define("pres-text", class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        const style = document.createElement("style");
        style.innerHTML = `
            .title {
                width: 288px;
                color: #009048;
                font-family: American Typewriter;
                font-size: 80px;
                font-style: normal;
                font-weight: 700;
                line-height: 88.1%;
                padding-right: 24px;
            }

            .span {
                color: #91CCAF;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render(){
        const div = document.createElement("div");
        div.innerHTML = `
            <h1 class="title">Piedra Papel <span class="span">ó</span>
            Tijera
            </h1>
        `;
        this.shadow.appendChild(div);
    }
})