'use strict';

interface ITwBannerHeader {
	header: HTMLElement;
	figure: HTMLElement;
	figImg: HTMLImageElement;
	figCaption: HTMLElement;
}

interface IsetAttributes {
	setAttribute: void | ((qualifiedName: string, value: string) => void);
}

export { ITwBannerHeader, IsetAttributes };
