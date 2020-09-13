import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, NavigationProp } from '@react-navigation/native';

import { Image } from './styles';

import menu from '~/assets/img/menu-icon.png';

interface Props {
	navigation: NavigationProp<any>;
}

const Menu: React.FC<Props> = ({ navigation }) => {
	const toggle = useCallback(() => {
		navigation.dispatch(DrawerActions.toggleDrawer());
	}, [navigation]);

	return (
		<TouchableOpacity onPress={toggle}>
			<Image source={menu} />
		</TouchableOpacity>
	);
};

export default Menu;
