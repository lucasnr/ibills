import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

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
			<View
				style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
			>
				<Text style={{ fontFamily: 'VisbyRoundHeavy', fontSize: 32 }}>
					Goodbye World
				</Text>
			</View>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
