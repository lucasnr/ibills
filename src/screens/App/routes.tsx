import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';

import Dashboard from './Dashboard';
import Profile from './Profile';
import Signature from './Signature';
import Accounts from './Accounts';
import Cards from './Cards';
import Expenses from './Expenses';
import Goal from './Goal';
import Reports from './Reports';
import Settings from './Settings';

import CustomMenu from '~/components/CustomMenu';

import { isDesktop } from '~/utils/consts';

const Drawer = createDrawerNavigator();
const TopBar = createMaterialTopTabNavigator();

const routes = [
	{
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		name: 'Profile',
		component: Profile,
	},
	{
		name: 'Signature',
		component: Signature,
	},
	{
		name: 'Accounts',
		component: Accounts,
	},
	{
		name: 'Cards',
		component: Cards,
	},
	{
		name: 'Expenses',
		component: Expenses,
	},
	{
		name: 'Goal',
		component: Goal,
	},
	{
		name: 'Reports',
		component: Reports,
	},
	{
		name: 'Settings',
		component: Settings,
	},
];

function Routes() {
	const { background } = useContext(ThemeContext);

	return (
		<React.Fragment>
			<StatusBar backgroundColor={background.secondary} translucent={false} />

			{isDesktop ? (
				<TopBar.Navigator
					tabBar={(props) => <CustomMenu {...props} />}
					swipeEnabled={false}
					initialRouteName="Expenses"
				>
					{routes.map((route, index) => (
						<TopBar.Screen
							key={index}
							name={route.name}
							component={route.component}
						/>
					))}
				</TopBar.Navigator>
			) : (
				<Drawer.Navigator
					drawerContent={(props) => <CustomMenu {...props} />}
					drawerStyle={{
						borderTopRightRadius: 100,
						overflow: 'hidden',
						width: 'auto',
					}}
					sceneContainerStyle={{ backgroundColor: background.secondary }}
				>
					{routes.map((route, index) => (
						<Drawer.Screen
							key={index}
							name={route.name}
							component={route.component}
						/>
					))}
				</Drawer.Navigator>
			)}
		</React.Fragment>
	);
}

export default Routes;
