'use strict';
const twFooter_sharedStyles = {
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

	body {
		display: grid;
		grid-template-areas: ". col1 ."
			"col2 col2 col2"
			". col3 .";
	}

	.footer {
		container-name: footer_container;
		container-type: inline-size;
		margin: 0em auto 0em auto;
		justify-self: last baseline;
		text-align: center;
	}

	.footer-paragraph {
		margin-top: calc(0.01% + 6.9vw); 
		font-family: 'Black Ops One', sans-serif;
		font-size: 2vw;
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

	@media screen and (max-width: 1760px) {
		.footer-paragraph {
			margin-top: 7%; 
		}
	}
	@media screen and (max-width: 1500px) {
		.footer-paragraph {
			margin-top: 12%; 
		}
	}
	@media screen and (max-width: 1350px) {
		.footer-paragraph {
			margin-top: 12%; 
		}
	}

	@container footer_container (max-width: 1000px)  {
		.footer-paragraph {
			margin-top: calc(23% + 3.7vw); 
		}
	}

	@keyframes fade-color {
		0%,100% { color: hsla(188, 53%, 80%, 0.998) }
		50% { color: hsla(90, 100%, 50%, 0.998) }
	  }

`;
export { twFooter_sharedStyles };
//# sourceMappingURL=tw-footer_sharedStyles.js.map