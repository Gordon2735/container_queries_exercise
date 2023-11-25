interface ItwBannerHeader_sharedStyles {
	global: string;
	shell: string;
	banner: string;
}
interface ItwBannerHeader_sharedHTML {
	global: string;
	shell: string;
	banner: string;
}

interface ItwFooter_sharedStyles {
	global: string;
	shell: string;
	footer: string;
}

interface ItwFooter_sharedHTML {
	global: string;
	shell: string;
	footer: string;
}

interface ItwContactHeader_sharedStyles {
	global: string;
	shell: string;
	contact: string;
}

interface ItwContactHeader_sharedHTML {
	global: string;
	shell: string;
	contact: string;
}

export {
	ItwContactHeader_sharedHTML as default,
	ItwContactHeader_sharedStyles,
	ItwBannerHeader_sharedHTML,
	ItwBannerHeader_sharedStyles,
	ItwFooter_sharedStyles,
	ItwFooter_sharedHTML
};
