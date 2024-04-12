export class GameCard extends HTMLElement {
    static observedAttributes = ["href", "img", "title"];
    href;
    img;
    title;

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");

        // Background image
        const imageWrapper = document.createElement('div');
        imageWrapper.classList = "image center-content";
        this.appendChild(imageWrapper);

        const image = document.createElement('img');
        image.src = this.img;
        imageWrapper.appendChild(image);

        // Content
        const content = document.createElement('div');
        content.className = 'content';
        this.appendChild(content);
        
        // Title
        const title = document.createElement('div');
        title.className = 'title';
        title.innerText = this.title;
        this.appendChild(title);

        // Card specific functionality
        this.onclick = () => {
            window.location.href = this.href;
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
}

