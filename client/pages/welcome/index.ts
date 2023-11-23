import "../../components/button";
import "../../components/presentation-text";
import "../../components/jugada";
import "../../components/input";
import "../../components/paragraph-text";
import "../../components/countdown";
import "../../components/score";
import "../../components/star";
import { state } from "../../state";

customElements.define("welcome-page", class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.render();
        this.action();
    }
    render(){
        this.innerHTML = `
        <my-button>Nuevo juego</my-button>`;
    }
    action(){
        const buttonEl = this.querySelector("my-button");
        buttonEl.addEventListener("click", () => {
            state.test();
        })
    }
});