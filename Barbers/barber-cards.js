import html from "./utility.js";
import "./comment-count.js";
class Barber_Card extends HTMLElement {
    constructor() {
        super();
          
        this.innerHTML = html `
        <div class="barbers-cards">
        <div class="barbers-cards-container">
            <div style="padding-bottom: 20px;">
                <div style="display:flex">
                    <img style="border-radius:50%; width:100px;"
                        src="https://e7.pngegg.com/pngimages/683/60/png-clipart-man-s-profile-illustration-computer-icons-user-profile-profile-ico-photography-silhouette-thumbnail.png"></img>
                    <div>
                        <h3 style="margin-left: 20px;">Үсчин А</h3>
                        <div style="display:flex; justify-content:left;">
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                            <div style="width:10px ; margin-right:-70px" class="five-pointed-star"></div>
                        </div>
                        <div style="margin-left: 20px;">
                            <p>Салон: Matrix</p>
                            <p>Салбар: Парк-Од</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Холбогдох утас: ********</p>
                <p>Дотуур дугаар: 110</p>
            </div>
            <div>
                <label style="display: flex;
                margin-top: 10px;
                margin-bottom: 10px;
                font-weight: bold;
                color: #D39B59;" for="Comment">Сэтгэгдэл 
                <comment-count></comment-count></label>
                <br>
                <p class="valuecomment" id ="valueComment"></p>
                <input style="box-sizing: border-box;
                display: block;
                width: 100%;
                height: 30px;
                border: 2px solid currentColor;
                padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
                color: #D39B59;
                background: transparent;
                border-radius: 5px;" type="text" id="Comment" name="Comment" placeholder="Сэтгэгдэл бичих">
                <button style="color: grey; border-radius: 5px;
                 width: 20%; height:25px;
                 margin-left: 57%;
                 margin-right: 5px ;" class="button buttonCancel">Reset</button>
                <button style="color:#D39B59; border-radius: 5px; 
                width: 20%; height: 25px;
                margin-top: 8px;
                margin-right: 0px" class="button buttonSubmit" id="subButton">Submit</button>
            </div>
        </div>
    </div>`; 
    
    }
    #Render(){
        this.innerHTML = html`
        <div>  </div>
        `
    }
    connectedCallback() {
       this.querySelector("#subButton").addEventListener("click", () => {
            const count = this.querySelector("comment-count");
            count.AddToCounter(this);
            const allcount = document.querySelector("all-comment");
            allcount.AddToCounter(this);
        });
    
    const event = new CustomEvent("newEvent", {
        detail: {},
        bubbles: false,
        cancelable: false,
    });
    this.dispatchEvent(event);  //https://www.youtube.com/watch?v=hIv22aTl3-g eniig ashila
    }
    disconnectedCallback() {
    
    }
    attributeChangedCallback(attrName, oldVal, newVal){
    
    }
}


window.customElements.define('barber-cards', Barber_Card);