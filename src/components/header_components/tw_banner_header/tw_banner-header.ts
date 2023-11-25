'use strict';

import { TwBannerHeaderTemplate } from './tw_banner-header_template.js';
import { twBannerHeader_sharedStyles } from './tw_banner-header_sharedStyles.js';
import { twBannerHeader_sharedHTML } from './tw_banner-header_sharedHTML.js';

export class TwBannerHeader extends TwBannerHeaderTemplate {
	override activateShadowDOM: boolean;

	override get template(): string {
		return /*html*/ `
            ${twBannerHeader_sharedHTML.banner}
            <style>${twBannerHeader_sharedStyles.banner}</style>        
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
TwBannerHeaderTemplate.RegisterComponent('tw_banner-header', TwBannerHeader);
