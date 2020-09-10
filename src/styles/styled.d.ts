import 'styled-components';

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
	}
}
