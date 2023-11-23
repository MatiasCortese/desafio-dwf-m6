customElements.define("my-button", class extends HTMLElement {
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
            .button {
                color: #D8FCFC;
                text-align: center;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 2.25px;
                width: 322px;
                height: 87px;
                border-radius: 10px;
                background: #006CFC;
                border: 10px solid #001997;
            }

            .button:hover {
                cursor: pointer;
            }
        `;
        this.appendChild(style);
    };  
    render(){
        this.innerHTML = `<button class="button">${this.innerText}</button>`;
    };
});