import React, { useCallback, useMemo, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { NavigationProp } from '@react-navigation/native';
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
import Notification from './SvgIcon/Notification';
import {
	Container,
	ItemsContainer,
	Item,
	ItemLabel,
	IconContainer,
} from './styles';

import Row from '~/components/Row';

import { isDesktop } from '~/utils/consts';

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

interface Props {
	navigation: NavigationProp;
}

const CustomDrawer: React.FC<Props> = ({ navigation }) => {
	const itemCallback = useCallback((route: string) => {
		navigation.navigate(route);
	}, []);

	const signOut = useCallback(() => {
		navigation.reset({
			routes: [
				{
					name: 'Home',
				},
			],
		});
	}, [navigation]);

	const navigationState = navigation.dangerouslyGetState();
	const currentRoute = useMemo(() => {
		const { index, routes } = navigationState;
		return routes[index].name;
	}, [navigationState]);

	const { text } = useContext(ThemeContext);

	return (
		<Container>
			{!isDesktop && <Menu navigation={navigation} />}

			<Row desktopOnly style={{ justifyContent: 'space-between' }}>
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
									<Icon color={active ? text.alternative : text.secondary} />
								</IconContainer>
								<ItemLabel active={active}>{label}</ItemLabel>
							</Item>
						);
					})}
				</ItemsContainer>

				<Row desktopOnly>
					{isDesktop && <Notification color={text.alternative} />}
					<Item onPress={signOut}>
						<IconContainer>
							<Exit color={text.alternative} />
						</IconContainer>
						{!isDesktop && <ItemLabel>Sair</ItemLabel>}
					</Item>
				</Row>
			</Row>
		</Container>
	);
};

export default CustomDrawer;
