import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';

export class navBar extends LitElement {
    static properties = {
       
    };

    static styles = css`

        h5{

            color: 232123;
        }
        .navBar{

            overflow: hidden;
            background-color: #16be56;
            height:2rem;
            width:100%;
        }

        .navBar p{

            float: left;
            margin: 0;
            padding-top: 0.5rem;
            margin-left: 1rem;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-weight: bold;

        }

        .navBar p span{

            color: #16be56;
            padding-top: 0;
            margin-left: 0.5rem; 
        }

        .navBar span{

            float: right;
            padding-top: 0.5rem;
            margin-right: 1rem;
            cursor: pointer;

        }
    
    `;

    constructor() {
        super();

    }
    render() {
        return html`
        <div class="navBar">
            <p>Welcome, Player!</p>
            <span @click=${this.logOut}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </span>
        </div>
        `;
    }

    logOut(){
        Router.go('/home');
    }


}
customElements.define('navbar-component', navBar);