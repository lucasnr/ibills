import 'styled-components';

interface FontFamily {
	light: string;
	regular: string;
	medium: string;
	semiBold: string;
	bold: string;
	extraBold: string;
	heavy: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		background: {
			primary: string;
			secondary: string;
			alternative: string;
		};
		text: {
			primary: string;
			secondary: string;
			alternative: string;
		};
		colors: {
			primary: string;
			secondary: string;
			alternative: string;
		};
		font: {
			primary: FontFamily;
			secondary: FontFamily;
		};
	}
}
