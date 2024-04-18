export class ScoreRow extends HTMLElement {
    static observedAttributes = ["name", "score"];
    name;
    score;

    constructor() {
        super();
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

