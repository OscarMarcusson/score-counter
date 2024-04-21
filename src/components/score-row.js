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

    _score = 0;
    _scoreElement;
    get score() { return this._score; }
    set score(value) {
        if (!Number.isInteger(value))
            value = Number.parseInt(value);
        this._score = value;
        if (this._scoreElement)
            this._scoreElement.innerText = value;
    };

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
            for (const actionKey of Object.keys(data?.actions?.good)) {
                const action = data.actions.good[actionKey];
                this._buildActionButton(window, actionKey, action, 'good');
            }
            for (const actionKey of Object.keys(data?.actions?.bad)) {
                const action = data.actions.bad[actionKey];
                this._buildActionButton(window, actionKey, action, 'bad');
            }
        }
    }

    _buildActionButton(parent, actionKey, action, className) {
        const button = document.createElement('button');
        button.className = className;
        button.innerText = action.name;
        const context = this;
        button.onclick = function () {
            const scoreChange = context._calc(action.score);
            if (context.score == null)
                context.score = 0;
            else if (!Number.isInteger(context.score))
                context.score = Number.parseInt(context.score);
            context.score += scoreChange;
        };
        parent.appendChild(button);
    }

    _calc(str) {
        if (!str)
            return 0;
        return parseFloat(str);
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
        this._scoreElement = score;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
}

