import html from "./utility.js";

class CustomerCommentCard extends HTMLElement{
    constructor(){
        super();
        this.counter = [];
        this.innerHTML = html `
        <div>(${this.counter.length})</div>
        `
        this.#Render;
    }

    #Render(){
        this.innerHTML = html `
        <div>(${this.counter.length})</div>
        `;
    }
    connectedCallBack(){

    }
    disconnectedCallBack(){
        
    }
}

window.customElements.define('comment-count', CustomerCommentCard);