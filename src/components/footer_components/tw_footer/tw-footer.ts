'use strict';

import { TwFooterTemplate } from './tw-footer_template.js';
import { twFooter_sharedHTML } from './tw-footer_sharedHTML.js';
import { twFooter_sharedStyles } from './tw-footer_sharedStyles.js';

export class TwFooter extends TwFooterTemplate {
	override activateShadowDOM: boolean;

	override get template(): string {
		return /*html*/ `
            ${twFooter_sharedHTML.footer}
            <style>${twFooter_sharedStyles.footer}</style>        
        `;
	}
	constructor() {
		super();

		this.activateShadowDOM = true;
	}
	override connectedCallback() {
		super.connectedCallback();
	}
}
TwFooterTemplate.RegisterComponent('tw-footer', TwFooter);
