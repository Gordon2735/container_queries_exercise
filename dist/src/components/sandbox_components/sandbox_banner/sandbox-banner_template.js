'use strict';
export class SandboxBannerTemplate extends HTMLElement {
    constructor() {
        super(...arguments);
        this.activateShadowDOM = false;
    }
    set template(value) {
        this.template = value;
    }
    get template() {
        return this.template;
    }
    connectedCallback() {
        if (this.activateShadowDOM === true)
            this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template) {
        const root = this.shadowRoot;
        this.root = root;
        if (this.activateShadowDOM === false) {
            this.innerHTML = template || this.template;
            return;
        }
        else {
            this.root.innerHTML = template || this.template;
            return;
        }
    }
    static RegisterComponent(name, constructor, extendsElement) {
        extendsElement !== null
            ? customElements.define(name, constructor, {
                extends: extendsElement
            })
            : customElements.define(name, constructor);
        return;
    }
    setAttributes(tag, attribute) {
        Object.keys(attribute).map(function (keys) {
            tag.setAttribute(keys, attribute[keys]);
            return;
        });
    }
    appendChildren(parent, children) {
        children.map((child) => {
            parent?.appendChild(child);
        });
    }
    removeChildren(parent, children) {
        children.map((child) => {
            parent.removeChild(child);
        });
    }
}
//# sourceMappingURL=sandbox-banner_template.js.map