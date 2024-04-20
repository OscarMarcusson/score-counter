import { ModalWindow } from "./modal-window.js";

export class ScoreRow extends HTMLElement {
    static observedAttributes = ["name", "score"];
    name;
    score;

    constructor() {
        super();

        this.onclick = function() {
            const window = new ModalWindow();
            window.name = 'Test';
            window.width = 400;
            window.height = 400;
            document.body.appendChild(window);

            const button = document.createElement('button');
            button.innerText = "Hello World";
            window.appendChild(button);
        }
    }

    connectedCallback() {
        const name = document.createElement('div');
        name.innerText = this.name;
        name.className = 'text name';
        this.appendChild(name);

        const score = document.createElement('div');
        score.innerText = this.score;
        score.className = 'text score';
        this.appendChild(score);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
}

