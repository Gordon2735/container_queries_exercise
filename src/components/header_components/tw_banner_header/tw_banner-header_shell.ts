'use strict';

import { TwBannerHeaderTemplate } from './tw_banner-header_template.js';
import { twBannerHeader_sharedStyles } from './tw_banner-header_sharedStyles.js';
import { twBannerHeader_sharedHTML } from './tw_banner-header_sharedHTML.js';

export class TwBannerHeaderShell extends TwBannerHeaderTemplate {
	override activateShadowDOM: boolean;
	head: HTMLHeadElement | null | undefined;
	tw_bannerScript: HTMLScriptElement;

	override get template(): string {
		return /*html*/ `

            ${twBannerHeader_sharedHTML.shell}
            <style>${twBannerHeader_sharedStyles.shell}</style>

        `;
	}
	constructor() {
		super();

		this.activateShadowDOM = true;

		const head: HTMLHeadElement | null = document.querySelector('head');
		const tw_bannerScript: HTMLScriptElement =
			document.createElement('script');

		this.setAttributes(tw_bannerScript, {
			type: 'module',
			content: 'text/javascript',
			src: '../../dist/src/components/header_components/tw_banner_header/tw_banner-header.js',
			alt: 'tw banner header main web component'
		});

		this.head = head;
		this.tw_bannerScript = tw_bannerScript;
	}
	override connectedCallback(): void {
		super.connectedCallback();

		this.head?.appendChild(this.tw_bannerScript);
	}
}
TwBannerHeaderTemplate.RegisterComponent(
	'tw_banner-header_shell',
	TwBannerHeaderShell
);
