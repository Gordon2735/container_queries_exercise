'use strict';

import { SandboxBannerTemplate } from './sandbox-banner_template.js';
import { sandboxBanner_sharedHTML } from './sandbox-banner_sharedHTML.js';
import { sandboxBanner_sharedStyles } from './sandbox-banner_sharedStyles.js';

export class SandboxBanner extends SandboxBannerTemplate {
	override activateShadowDOM: boolean;

	override get template(): string {
		return /*html*/ `
        
            ${sandboxBanner_sharedHTML.banner}
            <style>${sandboxBanner_sharedStyles.banner}</style>
        
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
SandboxBannerTemplate.RegisterComponent('sandbox-banner', SandboxBanner);
