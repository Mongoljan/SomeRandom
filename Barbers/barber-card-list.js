import "./barber-cards.js";

class Barber_Card_List extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <style>
        display:flex;
        flex-wrap: wrap; 
        margin-top: 60px; 
        justify-content: center;
        </style>

        <div class="barbers-card-list">
        <barber-cards></barber-cards>
        <barber-cards></barber-cards>
        <barber-cards></barber-cards>
        <barber-cards></barber-cards>
        <barber-cards></barber-cards>
        <barber-cards></barber-cards>
        </div>
        `;
    }
    connectedCallback() {

    }
    disconnectedCallback() {
    
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
    
    }
}

window.customElements.define('barber-card-list', Barber_Card_List);