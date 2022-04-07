import { LitElement, css, html } from 'lit';



export class GameComponent extends LitElement {
static properties = {
nameUser: {type: String}
};
static styles = css`

    h2 {

        color: #16be56;

    }






`;



constructor() {
super();
}




connectedCallback() {
super.connectedCallback();
}



render() {
return html`
<div class="container fade-in">
<h2>AutoClicker<br> <span></span></h2>
</div>
`;
}
}
customElements.define('game-page', GameComponent);