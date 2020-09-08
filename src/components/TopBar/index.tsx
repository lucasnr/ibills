import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Menu from '~/components/CustomDrawer/Menu';
import { Container } from './styles';

const TopBar: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<Menu navigation={navigation} />
		</Container>
	);
};

export default TopBar;
