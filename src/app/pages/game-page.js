import { LitElement, css, html } from "lit";

export class GameComponent extends LitElement {
  static properties = {

    nameUser: { type: String },
    counter: { type: Number }
    
  };
  static styles = css`

    .container.fade-in {

        width: 57%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

    }


    h2 {
        
        display: flex;
        justify-content: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 25px;
        color: #16be56;

    }

    .clicksCounter {

        color: tomato;

    }

    .button {

        display: block;
        text-align: center;
        width: 100%;
        height: 45px;
        border: 3px solid #16be56;
        transition-duration: 0.2s;


    }

    
    .buttonActive {

      display: block;
      text-align: center;
      width: 100%;
      height: 35px;
      background-color: lightblue;
      margin-top: 3px;
      border: 1px solid #16be56;
      transition-duration: 0.2s;


    }

    .buttonInactive {

        display: none;

    }

    .button:hover {

        background-color: tomato;
    
    }

    .buttonActive:hover {

      background-color: tomato;

    }
  `;

  firstUpdated() {



  }

  constructor() {
    super();
    this.counter = 0;
    
  }


  render() {
    return html`
      <div class="container fade-in">
        <h2>
          Merged Pull Requests: <br />
          <div class="clicksCounter" id="clicksCounter"><span>${this.counter}</span></div>
        </h2>
        <button id="buttonClick" @click="${this.clicker}" class="button button">¡Merge!</button>
        <button id="buttonBuy" @click="${this.autoclicker}" class="buttonInactive">¡Buy Autoclicks!</button>
      </div>
    `;
  }

  clicker () {

    
        let clickCounter = this.renderRoot.querySelector('#clicksCounter');
        let clickButton = this.renderRoot.querySelector('#buttonClick');
        let buttonBuy = this.renderRoot.querySelector('.buttonInactive');

            this.counter++; 

            if(this.counter > 19) {

              buttonBuy.classList.replace('buttonInactive', 'buttonActive');
          

            }            

  }

  autoclicker () {

        let buttonBuy = this.renderRoot.querySelector('.buttonActive');
        let autoClickerBaseCost = 5;
        let numAutoClickers = 4;
        let autoClickerCost = autoClickerBaseCost + (autoClickerBaseCost * numAutoClickers);

          this.counter = 0;
   

            buttonBuy.classList.replace('buttonActive', 'buttonInactive');
            console.log('boton', buttonBuy);
        


  }



}
customElements.define("game-page", GameComponent);
