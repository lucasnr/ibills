import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './Dashboard';
import Profile from './Profile';
import Signature from './Signature';
import Accounts from './Accounts';
import Cards from './Cards';
import Expenses from './Expenses';
import Goal from './Goal';
import Reports from './Reports';
import Settings from './Settings';

import CustomDrawer from '~/components/CustomDrawer';

const Drawer = createDrawerNavigator();

function Routes() {
	const { background } = useContext(ThemeContext);

	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContent={(props) => <CustomDrawer {...props} />}
				sceneContainerStyle={{ backgroundColor: background.secondary }}
			>
				<Drawer.Screen name="Dashboard" component={Dashboard} />
				<Drawer.Screen name="Profile" component={Profile} />
				<Drawer.Screen name="Signature" component={Signature} />
				<Drawer.Screen name="Accounts" component={Accounts} />
				<Drawer.Screen name="Cards" component={Cards} />
				<Drawer.Screen name="Expenses" component={Expenses} />
				<Drawer.Screen name="Goal" component={Goal} />
				<Drawer.Screen name="Reports" component={Reports} />
				<Drawer.Screen name="Settings" component={Settings} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default Routes;
