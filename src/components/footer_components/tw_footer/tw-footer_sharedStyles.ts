'use strict';

import { ItwFooter_sharedStyles } from '../../../interfaces/interfaces.js';

const twFooter_sharedStyles: ItwFooter_sharedStyles = {
	global: '',
	shell: '',
	footer: ''
};

twFooter_sharedStyles.global = /*css*/ `


`;

twFooter_sharedStyles.shell = /*css*/ `

	.tw-footer_shell {
		grid-area: col3;
	}

`;

twFooter_sharedStyles.footer = /*css*/ `

	.footer {
		margin: 12% auto 0.1em auto;
		text-align: center;
	}

	.footer-paragraph {
		font-family: 'Black Ops One', sans-serif;
		font-size: 0.9em;
		font-weight: 400;
		color: hsla(188, 53%, 80%, 0.998);
		text-shadow: 0.1em 0.1em 0.4em hsla(0, 0%, 0%, 0.893)00;
		letter-spacing: 0.3em;
	}

	.footer-paragraph:hover {
		animation: fade-color 2s linear;
        cursor: pointer;
	}
	
	.footer-reg,
	.footer-LLC {
		font-family: 'Titillium Web', sans-serif;
	}

	.footer-reg {
		font-size: 0.8em;
	}

	.footer-LLC {
		font-size: 0.5em;
	}

	@keyframes fade-color {
		0%,100% { color: hsla(188, 53%, 80%, 0.998) }
		50% { color: hsla(90, 100%, 50%, 0.998) }
	  }

`;

export { twFooter_sharedStyles };
