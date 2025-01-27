import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	title: 'light',
	background: {
		primary: '#ffffff',
		secondary: '#F8F6F8',
		alternative: '#DDF6E1',
	},
	text: {
		primary: '#2C3D36',
		secondary: '#7C828A',
		alternative: '#118252',
	},
	colors: {
		primary: '#F99645',
		secondary: '#26C6DA',
		alternative: '#79D2DE',
	},
	font: {
		primary: {
			light: 'VisbyRoundLight',
			regular: 'VisbyRoundRegular',
			medium: 'VisbyRoundMedium',
			semiBold: 'VisbyRoundSemiBold',
			bold: 'VisbyRoundBold',
			extraBold: 'VisbyRoundExtraBold',
			heavy: 'VisbyRoundHeavy',
		},
		secondary: {
			light: 'NunitoSansLight',
			regular: 'NunitoSansRegular',
			medium: 'NunitoSansMedium',
			semiBold: 'NunitoSansSemiBold',
			bold: 'NunitoSansBold',
			extraBold: 'NunitoSansExtraBold',
			heavy: 'NunitoSansHeavy',
		},
	},
};

export default theme;
