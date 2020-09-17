import React from 'react';
import { ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '~/components/CustomMenu/Menu';
import { Container } from './styles';

import { isDesktop } from '~/utils/consts';

const TopBar: React.FC<{ style: ViewStyle }> = ({ style }) => {
	const navigation = useNavigation();

	if (isDesktop) return null;

	return (
		<Container style={style}>
			<Menu navigation={navigation} />
		</Container>
	);
};

export default TopBar;
