'use strict';

import { ISandboxBanner_sharedStyles } from '../../../interfaces/interfaces.js';

const sandboxBanner_sharedStyles: ISandboxBanner_sharedStyles = {
	global: '',
	shell: '',
	banner: ''
};

sandboxBanner_sharedStyles.global = /*css*/ `


`;

sandboxBanner_sharedStyles.shell = /*css*/ `


`;

sandboxBanner_sharedStyles.banner = /*css*/ `

	body {
		display: grid;
		grid-template-areas: ". col1 ."
			"col2 col2 col2"
			". col3 .";
	}
	
	.container-main {
		container-type: inline-size;
		container-name: main;
		grid-area: col2;
		text-align: center;
	}

	
	.query-fig-section {
		margin: 1em auto 1em auto;
	}
	.query-fig-img {
		width: 680px;
	}	
	
	
	.query-fig-cap {
		color: hsla(210, 14%, 53%, 0.998);
		opacity: 0;
	}
	
	.query-fig-section:hover {
		cursor: pointer;
	}
	
	.query-fig-section:hover .query-fig-cap {
		cursor: pointer;
		display: block;
		opacity: 1;
		animation: fade-in 2s linear;
	}
	
	@container main (max-width: 1000px) {
		.query-fig-section {
			margin: 4em auto 2em auto;
		}

		.query-fig-img {
			width: 380px;
		}		
	}

	@keyframes fade-in {
		0%,100% { opacity: 0 }
		50% { opacity: 1 }
	  }


`;

export { sandboxBanner_sharedStyles };
