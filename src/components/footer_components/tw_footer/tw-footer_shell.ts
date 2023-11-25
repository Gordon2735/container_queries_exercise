'use strict';

import { TwFooterTemplate } from './tw-footer_template.js';
import { twFooter_sharedHTML } from './tw-footer_sharedHTML.js';
import { twFooter_sharedStyles } from './tw-footer_sharedStyles.js';

export class TwFooterShell extends TwFooterTemplate {
	override activateShadowDOM: boolean;
	head: HTMLHeadElement | null | undefined;
	twFooterScript: HTMLScriptElement;

	override get template(): string {
		return /*html*/ `

            ${twFooter_sharedHTML.shell}
            <style>${twFooter_sharedStyles.shell}</style>
        
        `;
	}
	constructor() {
		super();

		this.activateShadowDOM = true;

		const head: HTMLHeadElement | null = document.querySelector('head');
		const twFooterScript: HTMLScriptElement =
			document.createElement('script');

		this.setAttributes(twFooterScript, {
			type: 'module',
			content: 'text/javascript',
			src: '../../dist/src/components/footer_components/tw_footer/tw-footer.js',
			alt: 'tw footer main web component'
		});

		this.head = head;
		this.twFooterScript = twFooterScript;
	}
	override connectedCallback(): void {
		super.connectedCallback();

		this.head?.appendChild(this.twFooterScript);
	}
}
TwFooterTemplate.RegisterComponent('tw-footer_shell', TwFooterShell);
