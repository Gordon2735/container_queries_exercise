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
      margin: 1.5em auto 0em auto;
        grid-area: col1;
    }

    .header {
        margin: 0em auto 0em auto;
		    text-align: center;
        container-name: header_container;
        container-type: inline-size;
    }

    .header-figure {
      margin: 1.8em auto 0.5em auto;
    }

    .figure-image {
      width: 740px;
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

    @container header_container (max-width: 1000px) {
      .header-figure {
        margin: 6.1em auto 4em auto;
      }
      .query-fig-section {
        margin: 5.5em auto 4em auto;
    }
      .figure-image {
        width: 440px;
      }
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