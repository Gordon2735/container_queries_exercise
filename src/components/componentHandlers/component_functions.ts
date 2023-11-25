'use strict';

async function RegisterComponent(
	name: string,
	constructor: CustomElementConstructor,
	extendsElement?: string | undefined
): Promise<void | CustomElementRegistry> {
	extendsElement !== null
		? customElements.define(name, constructor, {
				extends: extendsElement
		  })
		: customElements.define(name, constructor);
	return;
}

async function setAttributes(
	tag: HTMLElement,
	attribute: string | object | any
): Promise<void> {
	Object.keys(attribute).map(function (keys: any): void {
		tag.setAttribute(keys, attribute[keys]);
		return;
	});
}
async function appendChildren(
	parent: HTMLElement | null | undefined | ShadowRoot,
	children: any[]
): Promise<void> {
	children.map((child: any) => {
		parent?.appendChild(child);
	});
}
async function removeChildren(
	parent: { removeChild: (arg0: any) => void },
	children: any[]
) {
	children.map((child: any) => {
		parent.removeChild(child);
	});
}

export {
	removeChildren as default,
	RegisterComponent,
	setAttributes,
	appendChildren
};
