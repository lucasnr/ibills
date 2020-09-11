import React from 'react';
import { ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '~/components/CustomDrawer/Menu';
import { Container } from './styles';

const TopBar: React.FC<{ style: ViewStyle }> = ({ style }) => {
	const navigation = useNavigation();

	return (
		<Container style={style}>
			<Menu navigation={navigation} />
		</Container>
	);
};

export default TopBar;
