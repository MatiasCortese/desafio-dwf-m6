customElements.define("my-input", class extends HTMLElement {
    text:string;
    constructor(){
        super();
        this.text = this.innerText;
    }
    connectedCallback(){
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
            .input {
                color: #D9D9D9;
                text-align: center;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 2.25px;
                width: 353px;
                min-height: 65px;
                border-radius: 10px;
                background: #FFF;
                border: 10px solid #001997;
            }

            .button:hover {
                cursor: pointer;
            }
            
        `;
        this.appendChild(style);
    };  
    render(){
        this.innerHTML = `<input type="text" class="input" placeholder="${this.innerText}"></input>`;
    };
});