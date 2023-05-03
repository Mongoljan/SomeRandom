import "./barber-cards.js";

class Barber_Card_List extends HTMLElement{
    constructor(){
        super();
        this.#Render();
    }

    #Render(){
        this.innerHTML =`
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
        <div style="color: #D39B59; 
        margin-top: 15px;
        margin-bottom: 15px;"><h3>Нийт сэтгэгдэл: </h3></div>
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