import React, { useCallback, useMemo, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Menu from './Menu';
import { Container, ItemsContainer, Item, ItemLabel } from './styles';

const items: { icon: string; label: string; route: string }[] = [
	{
		icon: 'home-outline',
		label: 'Dashboard',
		route: 'Dashboard',
	},
	{
		icon: 'account-outline',
		label: 'Perfil',
		route: 'Profile',
	},
	{
		icon: 'credit-card-outline',
		label: 'Assinatura',
		route: 'Signature',
	},
	{
		icon: 'wallet-outline',
		label: 'Contas Bancárias',
		route: 'Accounts',
	},
	{
		icon: 'credit-card-outline',
		label: 'Cartões de Crédito',
		route: 'Cards',
	},
	{
		icon: 'note-outline',
		label: 'Receitas e Despesas',
		route: 'Expenses',
	},
	{
		icon: 'target',
		label: 'Meu Objetivo',
		route: 'Goal',
	},
	{
		icon: 'chart-line',
		label: 'Relatórios Gerais',
		route: 'Reports',
	},
	{
		icon: 'settings',
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
				{items.map(({ route, icon, label }) => {
					const active = route === currentRoute;
					return (
						<Item
							key={route}
							onPress={() => itemCallback(route)}
							active={active}
						>
							<Icon
								name={icon}
								size={32}
								color={active ? text.title : text.secondary}
							/>
							<ItemLabel active={active}>{label}</ItemLabel>
						</Item>
					);
				})}
			</ItemsContainer>

			<Item onPress={signOut}>
				<Icon name={'exit-to-app'} size={32} color={text.title} />
				<ItemLabel>Sair</ItemLabel>
			</Item>
		</Container>
	);
};

export default CustomDrawer;
