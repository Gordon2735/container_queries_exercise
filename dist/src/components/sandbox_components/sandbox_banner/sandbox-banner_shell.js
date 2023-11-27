'use strict';
import { SandboxBannerTemplate } from './sandbox-banner_template.js';
import { sandboxBanner_sharedHTML } from './sandbox-banner_sharedHTML.js';
import { sandboxBanner_sharedStyles } from './sandbox-banner_sharedStyles.js';
export class SandboxBannerShell extends SandboxBannerTemplate {
    get template() {
        return /*html*/ `
        
            ${sandboxBanner_sharedHTML.shell}
            <style>${sandboxBanner_sharedStyles.shell}</style>

        `;
    }
    constructor() {
        super();
        this.activateShadowDOM = true;
        const head = document.querySelector('head');
        const sandbox_banner_script = document.createElement('script');
        this.setAttributes(sandbox_banner_script, {
            type: 'module',
            content: 'text/javascript',
            src: '../../dist/src/components/sandbox_components/sandbox_banner/sandbox-banner.js',
            alt: 'Script for Web-Component sandbox-banner'
        });
        this.head = head;
        this.sandbox_banner_script = sandbox_banner_script;
    }
    connectedCallback() {
        super.connectedCallback();
        this.appendChildren(this.head, [this.sandbox_banner_script]);
    }
}
SandboxBannerTemplate.RegisterComponent('sandbox-banner_shell', SandboxBannerShell);
//# sourceMappingURL=sandbox-banner_shell.js.map