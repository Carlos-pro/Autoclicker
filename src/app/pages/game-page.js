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

        display: flex;
        justify-content: center;
        width: 100%;
        height: 45px;
        border: 3px solid #16be56;
        transition-duration: 0.2s;


    }

    .buyButton {

        display: none;

    }

    .button:hover {

        background-color: tomato;
    
    }
  `;

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
        <button id="buttonBuy" @click="${this.autoclicker}" class="buyButton">¡Buy Autoclicks!</button>
      </div>
    `;
  }

  clicker () {

    
        let clickCounter = this.renderRoot.querySelector('#clicksCounter');
        let clickButton = this.renderRoot.querySelector('#buttonClick');

            this.counter++; 

  }

  autoclicker () {

        let buttonBuy = this.renderRoot.querySelector('#buttonBuy');


  }



}
customElements.define("game-page", GameComponent);
