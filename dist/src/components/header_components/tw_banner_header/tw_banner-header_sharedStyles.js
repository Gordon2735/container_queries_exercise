'use strict';
const twBannerHeader_sharedStyles = {
    global: '',
    shell: '',
    banner: ''
};
twBannerHeader_sharedStyles.global = /*css*/ `
    
`;
twBannerHeader_sharedStyles.shell = /*css*/ `


`;
twBannerHeader_sharedStyles.banner = /*css*/ `

    body {
        display: grid;
        grid-template-areas: ". col1 ."
            "col2 col2 col2"
            ". col3 .";
    }

    .tw_banner-header_shell {
        grid-area: col1;
    }

    .header {
        margin: 5em auto 3em auto;
		text-align: center;
    }

    .container-main {
        grid-area: col2;
		text-align: center;
    }

    .tw_banner-header_shell {
        margin: 5em auto 7em auto;
    }

    .header-figure {
        margin: 0.1em auto 3em auto;
    }

    .fig-caption {
        opacity: 0;
        color: hsla(210, 14%, 53%, 0.998);
    }

    .header-figure:hover {
        cursor: pointer;
    }
    
    .header-figure:hover .fig-caption {
        cursor: pointer;
        opacity: 1;
        animation: fade-in 2s linear;
    }

    .query-fig-section {
        margin: 7em auto 1em auto;
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
    
    @keyframes fade-in {
      0%,100% { opacity: 0 }
      50% { opacity: 1 }
    }

    @keyframes fade-out {
      0%,100% { opacity: 0 }
      50% { opacity: 1 }
    }

`;
export { twBannerHeader_sharedStyles };
//# sourceMappingURL=tw_banner-header_sharedStyles.js.map