import html from './BarberCard.js'

class Barber_Card_List extends HTMLElement{
    constructor(){
        super();
        this.innerHtML = html `
        <style>
        display:flex;
        flex-wrap: wrap; 
        margin-top: 60px; 
        justify-content: center;
        </style>
        <div><BarberCard></BarberCard></div>
        <div><BarberCard></BarberCard></div>
        <div><BarberCard></BarberCard></div>
        <div><BarberCard></BarberCard></div>
        <div><BarberCard></BarberCard></div>
        <div><BarberCard></BarberCard></div>
        `
    }
}

window.customElements.define('BarberCardList', Barber_Card_List);