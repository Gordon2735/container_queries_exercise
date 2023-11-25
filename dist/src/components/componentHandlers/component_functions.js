'use strict';
async function RegisterComponent(name, constructor, extendsElement) {
    extendsElement !== null
        ? customElements.define(name, constructor, {
            extends: extendsElement
        })
        : customElements.define(name, constructor);
    return;
}
async function setAttributes(tag, attribute) {
    Object.keys(attribute).map(function (keys) {
        tag.setAttribute(keys, attribute[keys]);
        return;
    });
}
async function appendChildren(parent, children) {
    children.map((child) => {
        parent?.appendChild(child);
    });
}
async function removeChildren(parent, children) {
    children.map((child) => {
        parent.removeChild(child);
    });
}
export { removeChildren as default, RegisterComponent, setAttributes, appendChildren };
//# sourceMappingURL=component_functions.js.map