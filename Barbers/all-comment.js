import html from "./utility.js";

class AllComment extends HTMLElement{
    constructor(){
        super();
        this.counter = [];
        this.innerHTML = html `
        <div style="color: #D39B59; 
        margin-top: 15px;
        margin-bottom: 15px;"><h3>Нийт сэтгэгдэл: ${this.counter.length}</h3></div>
        </div>
        `
    }

    #Render( color="white"){
        this.innerHTML = html `
        <div style="color: #D39B59; 
        margin-top: 15px;
        margin-bottom: 15px;">
        <h3
        >Нийт сэтгэгдэл: <span style="color: ${color}; 
        margin-top: 15px;
        margin-bottom: 15px;">${this.counter.length}</span></h3></div>
        </div>
        `;
    }
    AddToCounter(comm) {
        this.counter.push(comm);
        this.#Render();
    }
    connectedCallBack(){

    }
    disconnectedCallBack(){
        
    }

}

window.customElements.define('all-comment', AllComment);