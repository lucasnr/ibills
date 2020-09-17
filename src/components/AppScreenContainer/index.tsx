import React from 'react';

import MenuButton from '~/components/MenuButton';

import { Container } from './styles';
import { padding } from './consts';

const AppScreenContainer: React.FC = ({ children }) => {
	return (
		<Container showsVerticalScrollIndicator={false}>
			<MenuButton style={{ marginLeft: padding * -1 }} />
			{children}
		</Container>
	);
};

export default AppScreenContainer;

export { padding };
