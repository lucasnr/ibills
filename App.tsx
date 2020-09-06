import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import HomeScreen from '~/screens/Home';

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
	});

	if (!loaded) return <AppLoading />;

	return (
		<ThemeProvider theme={light}>
			<HomeScreen />
			<StatusBar style="dark" backgroundColor="#fff" translucent={false} />
		</ThemeProvider>
	);
}
