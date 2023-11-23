customElements.define("star-result", class extends HTMLElement {
    shadow: ShadowRoot;
    resultado: string;
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});   
    }
    connectedCallback(){
        (this.resultado as any) = this.getAttribute("resultado");
        const style = document.createElement("style");
        style.innerHTML = `
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    imgSelector(resultado: string){
        if (resultado == "ganaste"){
            return require("url:../../images/ganaste.png");
        }
        if (resultado == "perdiste"){
            return require("url:../../images/perdiste.png");
        }
    }
    render(){
        const div = document.createElement("div");
        const resultImgUrl = this.imgSelector(this.resultado);
        div.innerHTML = `
            <img src="${resultImgUrl}">
        `;
        this.shadow.appendChild(div);
    }
});