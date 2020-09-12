import React from 'react';

import TopBar from '~/components/TopBar';

import { Container, Card, CardContainer } from './styles';
import { padding } from './consts';

const AppScreenContainer: React.FC = ({ children }) => {
	return (
		<Container showsVerticalScrollIndicator={false}>
			<TopBar style={{ marginLeft: padding * -1 }} />
			{children}
		</Container>
	);
};

export default AppScreenContainer;

export { Card, CardContainer, padding };
