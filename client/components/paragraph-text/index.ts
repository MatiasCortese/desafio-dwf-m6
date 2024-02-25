customElements.define("p-text", class extends HTMLElement {
    text:string;
    constructor(){
        super();
        
    }
    connectedCallback(){
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=American+Typewriter&display=swap');
            .paragraph {
                color: #000;
                text-align: center;
                font-family: American Typewriter;
                font-size: 35px;
                font-style: normal;
                font-weight: 600;
                line-height: 100%; /* 35px */
            }
        `;
        this.appendChild(style);
    };  
    render(){
        this.innerHTML = `<p class="paragraph">${this.innerText}</p>`;
    };
});