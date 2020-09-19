import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';
import AppScreens from '~/screens/App/routes';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" headerMode="none">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="App" component={AppScreens} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
