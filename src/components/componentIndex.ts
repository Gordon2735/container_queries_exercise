'use strict';

import {
	setAttributes,
	appendChildren
} from './componentHandlers/component_functions.js';

const head = document.querySelector('head');
const tw_banner_shellScript = document.createElement('script');
const sandbox_bannerScript = document.createElement('script');
const tw_footerScript = document.createElement('script');

setAttributes(tw_banner_shellScript, {
	type: 'module',
	content: 'text/javascript',
	src: '../../dist/src/components/header_components/tw_banner_header/tw_banner-header_shell.js',
	alt: 'tw_banner_header_shell component script file'
});

setAttributes(sandbox_bannerScript, {
	type: 'module',
	content: 'text/javascript',
	src: '../../dist/src/components/sandbox_components/sandbox_banner/sandbox-banner_shell.js',
	alt: 'sandbox-banner_shell component script file'
});

setAttributes(tw_footerScript, {
	type: 'module',
	content: 'text/javascript',
	src: '../../dist/src/components/footer_components/tw_footer/tw-footer_shell.js',
	alt: 'tw_footer_shell component script file'
});

appendChildren(head, [
	tw_banner_shellScript,
	sandbox_bannerScript,
	tw_footerScript
]);
