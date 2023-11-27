'use strict';

export class SandboxBannerTemplate extends HTMLElement {
	activateShadowDOM: boolean = false;
	root: ShadowRoot | null | undefined;

	public set template(value: string) {
		this.template = value;
	}

	public get template(): string {
		return this.template;
	}
	connectedCallback(): void {
		if (this.activateShadowDOM === true)
			this.attachShadow({ mode: 'open' });
		this.render(this.template);
	}
	render(template: string): void {
		const root: ShadowRoot | null = this.shadowRoot;
		this.root = root;
		if (this.activateShadowDOM === false) {
			this.innerHTML = template || this.template;
			return;
		} else {
			this.root!.innerHTML = template || this.template;
			return;
		}
	}
	static RegisterComponent(
		name: string,
		constructor: CustomElementConstructor,
		extendsElement?: string | undefined
	): CustomElementRegistry | void {
		extendsElement !== null
			? customElements.define(name, constructor, {
					extends: extendsElement
			  })
			: customElements.define(name, constructor);
		return;
	}
	setAttributes(tag: HTMLElement, attribute: string | object | any): void {
		Object.keys(attribute).map(function (keys: any): void {
			tag.setAttribute(keys, attribute[keys]);
			return;
		});
	}
	appendChildren(
		parent: HTMLElement | null | undefined | ShadowRoot,
		children: any[]
	): void {
		children.map((child: any) => {
			parent?.appendChild(child);
		});
	}
	removeChildren(
		parent: { removeChild: (arg0: any) => void },
		children: any[]
	) {
		children.map((child: any) => {
			parent.removeChild(child);
		});
	}
}
