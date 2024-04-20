export class ModalWindow extends HTMLElement {
    static observedAttributes = ["name", "width", "height"];
    name;
    width;
    height;
    content;
    appendChildToRoot;


    constructor() {
        super();
        this.appendChildToRoot = this.appendChild;
        this.appendChild = function (element) {
            if (this.content?.appendChild) {
                this.content.appendChild(element);
            }
            else {
                if (this.content == null) this.content = [];
                this.content.push(element);
            }
        }

        this.classList.add('hide');
    }

    connectedCallback() {
        const root = this;
        const background = document.createElement('div');
        background.className = 'background';
        background.onclick = function () {
            root.classList.add('hide');
            setTimeout(() => root.remove(), 300);
        };
        this.appendChildToRoot(background);

        const window = document.createElement('div');
        window.className = 'window';
        this.appendChildToRoot(window);

        if (this.width) window.style.width = this.width + 'px';
        if (this.height) window.style.height = this.height + 'px';

        // Titlebar
        const titleBar = document.createElement('div');
        titleBar.className = 'title';
        window.appendChild(titleBar);
        
        const leftArea = document.createElement('div');
        leftArea.className = 'icon';
        titleBar.appendChild(leftArea);
        
        const title = document.createElement('span');
        title.innerText = this.name;
        titleBar.appendChild(title);

        const closeButton = document.createElement('button');
        closeButton.className = 'x';
        closeButton.innerText = '✕';
        titleBar.appendChild(closeButton);

        // Content
        const childrenToAdd = this.content;
        this.content = document.createElement('div');
        this.content.className = 'content';
        window.appendChild(this.content);

        if (childrenToAdd?.length) {
            console.warn(childrenToAdd);
        }

        setTimeout(() => this.classList.remove('hide'), 50);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }

    close() {
        
    }
}

