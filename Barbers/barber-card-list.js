import "./barber-cards.js";

class Barber_Card_List extends HTMLElement{
    constructor(){
        super();
        this.#Render();
    }


    //barbers cardnii todorhoi element ruu handaad (jishee ni uschnii ner oruulah span element uusgeed) 
    //ug elementdee id ogood id-r ni damjuulj ogogdloo oruulahuu??????????????????

    #Render(){
        this.innerHTML =`
        <style>
        display:flex;
        flex-wrap: wrap; 
        margin-top: ${this.getAttribute('top')}; 
        justify-content: center;
        </style>

        <div class="barbers-card-list">
        <barber-cards delgets = "flex" BarberTextColor = "var(--secondary-color)"></barber-cards>
        <barber-cards delgets = "flex" BarberTextColor = "var(--secondary-color)"></barber-cards>
        <barber-cards delgets = "flex" BarberTextColor = "var(--secondary-color)"></barber-cards>
        <barber-cards delgets = "flex" BarberTextColor = "var(--secondary-color)"></barber-cards>
        <barber-cards delgets = "flex" BarberTextColor = "var(--secondary-color)"></barber-cards>
        <barber-cards delgets = "flex" BarberTextColor = "var(--secondary-color)"></barber-cards>
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