import { ModalWindow } from "./modal-window.js";
import { getData as getDataAsync } from "../data/database.js";

export class ScoreRow extends HTMLElement {
    static observedAttributes = ["name", "score"];
    _name;
    _nameElement;
    get name() { return this._name };
    set name(value) {
        this._name = value;
        if (this._nameElement)
            this._nameElement.innerText = value;
    };
    score;

    constructor() {
        super();

        this.onclick = async function () {
            const window = new ModalWindow();
            window.title = {
                value: this.name,
                editable: true,
                onChange: newName => this.name = newName,
            }
            window.width = 400;
            window.height = 400;
            document.body.appendChild(window);

            const data = await getDataAsync('monitor-9ball');
            const dataDebug = document.createElement('p');
            dataDebug.innerText = JSON.stringify(data);
            window.appendChild(dataDebug);
        }
    }

    connectedCallback() {
        const name = document.createElement('div');
        name.innerText = this.name;
        name.className = 'text name';
        this.appendChild(name);
        this._nameElement = name;

        const score = document.createElement('div');
        score.innerText = this.score;
        score.className = 'text score';
        this.appendChild(score);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
}

