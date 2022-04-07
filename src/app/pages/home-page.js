import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';
import { navBar } from '../components/navBar.js';


export class HomeComponent extends LitElement {
    static properties = {

        title: { type: String },
        validacion: {type: String},
        inputValue:{type: String},
        users: {type: Array},
        userName: {type: String}
    };

    constructor() {

        super();
        this.title = 'Create new Player';
        this.users = ['carlos', 'eva'];
    }


    connectedCallback() {

        super.connectedCallback();
        this.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.login();
            }
        });
    }

    static styles = css`

    .login-content{

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2{

        display: flex;
        justify-content: center;
        color: #16be56;

    }

    small{

        color: #008CBA; 
    }

    .login-content button{

        width: 100%;
        height: auto;
        margin-top: 1rem;
    }

    .login-content img{

        display: flex;
        justify-content: center;
        height:50px;
    }

    .login-content input{

        width: 100%;
        height: auto;
        border-radius: 5px;
        margin-bottom: 1rem;

    }

     .button {

       background-color: black; 
       border: 1px solid #01502b;
       color: white;
       padding: 0px 32px;
       text-align: center;
       text-decoration: none;
       display: inline-block;
       font-size: 16px;
       margin: 4px 2px;
       transition-duration: 0.4s;
       cursor: pointer;
       border-radius: 5px;
   }

   .button:hover {
       
       background-color: #074b21;
       color: #16be56;
   }

   .errorMessage{
       height: 3rem;
       text-align: center;
   }
   

   .d-none{
       visibility: hidden;
   }

   .fade-in {
        animation: fadeIn 2s;
        opacity: 1;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

 `;


    render() {
        return html`
            <div class="login-content fade-in">
            <img style="-webkit-user-select: none;margin: auto;/* background-color: hsl(0, 0%, 90%); */transition: background-color 300ms;" src="https://img.icons8.com/color/344/mouse.png">
            <h2>${this.title}</h2>
                <input type="text" id="nickname" name="nickname">
                <div class="errorMessage" id="errorMessage"></div>
                <button id="buttonLogin" @click="${this.login}" class="button button">JOIN</button>
            </div>
        `;
    }


    login() {
        
        let valid = false;
        let errorMesssage = this.renderRoot.querySelector("#errorMessage");
        this.inputValue = this.renderRoot.querySelector("#nickname").value;
        this.users.includes(this.inputValue.toLowerCase()) ? valid = true : valid = false;
        if(valid){
            this.userName = this.inputValue;
            Router.go('/game');
        }else{
            errorMesssage.innerHTML = '<small class="fade-in">Invalid Player Name. Please Try Again.</small>';
        }
        this.renderRoot.querySelector("#nickname").value ="";
    }

}
customElements.define('home-page', HomeComponent);