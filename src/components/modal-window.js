export class ModalWindow extends HTMLElement {
    static observedAttributes = ["name", "width", "height"];
    title;
    width;
    height;
    content;
    appendChildToRoot;
    close;


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
        this.close = function () {
            root.classList.add('hide');
            setTimeout(() => root.remove(), 300);
        };
        const background = document.createElement('div');
        background.className = 'background';
        background.onclick = this.close;
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

        if (this.title?.editable) {
            const title = document.createElement('input');
            title.value = this.title?.value ?? 'No name';
            title.className = 'title';
            titleBar.appendChild(title);
            if (this.title.onChange) {
                title.addEventListener('input', () => this.title.onChange(title.value));
            }
        }
        else {
            const title = document.createElement('span');
            title.innerText = this.title?.value ?? 'No name';
            title.className = 'title';
            titleBar.appendChild(title);
        }

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
        this.close();
    }
}

