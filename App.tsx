import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './src/screens/Home';
import AppScreens from './src/screens/App/routes';

import light from './src/styles/themes/light';

export default function App() {
	const [loaded] = useFonts({
		VisbyRoundLight: require('./src/assets/font/VisbyRoundCF-Light.otf'),
		VisbyRoundRegular: require('./src/assets/font/VisbyRoundCF-Regular.otf'),
		VisbyRoundMedium: require('./src/assets/font/VisbyRoundCF-Medium.otf'),
		VisbyRoundSemiBold: require('./src/assets/font/VisbyRoundCF-SemiBold.otf'),
		VisbyRoundBold: require('./src/assets/font/VisbyRoundCF-Bold.otf'),
		VisbyRoundExtraBold: require('./src/assets/font/VisbyRoundCF-ExtraBold.otf'),
		VisbyRoundHeavy: require('./src/assets/font/VisbyRoundCF-Heavy.otf'),
		NunitoSansLight: require('./src/assets/font/NunitoSans-Light.ttf'),
		NunitoSansRegular: require('./src/assets/font/NunitoSans-Regular.ttf'),
		NunitoSansMedium: require('./src/assets/font/NunitoSans-SemiBold.ttf'),
		NunitoSansSemiBold: require('./src/assets/font/NunitoSans-SemiBold.ttf'),
		NunitoSansBold: require('./src/assets/font/NunitoSans-Bold.ttf'),
		NunitoSansExtraBold: require('./src/assets/font/NunitoSans-ExtraBold.ttf'),
		NunitoSansHeavy: require('./src/assets/font/NunitoSans-Black.ttf'),
		...MaterialCommunityIcons.font,
	});

	if (!loaded) return <AppLoading />;

	return (
		<ThemeProvider theme={light}>
			{/* <HomeScreen /> */}
			<AppScreens />
		</ThemeProvider>
	);
}
