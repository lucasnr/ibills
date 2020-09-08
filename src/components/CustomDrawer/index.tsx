import React, { useCallback, useMemo, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SvgProps } from 'react-native-svg';

import Menu from './Menu';
import Home from './SvgIcon/Home';
import Account from './SvgIcon/Account';
import Signature from './SvgIcon/Signature';
import Wallet from './SvgIcon/Wallet';
import CreditCard from './SvgIcon/CreditCard';
import Scroll from './SvgIcon/Scroll';
import Target from './SvgIcon/Target';
import Chart from './SvgIcon/Chart';
import Settings from './SvgIcon/Settings';
import Exit from './SvgIcon/Exit';
import {
	Container,
	ItemsContainer,
	Item,
	ItemLabel,
	IconContainer,
} from './styles';

interface Item {
	icon: React.FC<SvgProps>;
	label: string;
	route: string;
}

const items: Item[] = [
	{
		icon: Home,
		label: 'Dashboard',
		route: 'Dashboard',
	},
	{
		icon: Account,
		label: 'Perfil',
		route: 'Profile',
	},
	{
		icon: Signature,
		label: 'Assinatura',
		route: 'Signature',
	},
	{
		icon: Wallet,
		label: 'Contas Bancárias',
		route: 'Accounts',
	},
	{
		icon: CreditCard,
		label: 'Cartões de Crédito',
		route: 'Cards',
	},
	{
		icon: Scroll,
		label: 'Receitas e Despesas',
		route: 'Expenses',
	},
	{
		icon: Target,
		label: 'Meu Objetivo',
		route: 'Goal',
	},
	{
		icon: Chart,
		label: 'Relatórios Gerais',
		route: 'Reports',
	},
	{
		icon: Settings,
		label: 'Configurações',
		route: 'Settings',
	},
];

const CustomDrawer: React.FC<DrawerContentComponentProps> = ({
	navigation,
}) => {
	const itemCallback = useCallback((route: string) => {
		navigation.navigate(route);
	}, []);

	const signOut = useCallback(() => {
		// logout
	}, []);

	const navigationState = navigation.dangerouslyGetState();
	const currentRoute = useMemo(() => {
		const { index, routes } = navigationState;
		return routes[index].name;
	}, [navigationState]);

	const { text } = useContext(ThemeContext);

	return (
		<Container>
			<Menu navigation={navigation} />

			<ItemsContainer>
				{items.map(({ route, icon: Icon, label }) => {
					const active = route === currentRoute;
					return (
						<Item
							key={route}
							onPress={() => itemCallback(route)}
							active={active}
						>
							<IconContainer>
								<Icon color={active ? text.title : text.secondary} />
							</IconContainer>
							<ItemLabel active={active}>{label}</ItemLabel>
						</Item>
					);
				})}
			</ItemsContainer>

			<Item onPress={signOut}>
				<IconContainer>
					<Exit color={text.title} />
				</IconContainer>
				<ItemLabel>Sair</ItemLabel>
			</Item>
		</Container>
	);
};

export default CustomDrawer;
