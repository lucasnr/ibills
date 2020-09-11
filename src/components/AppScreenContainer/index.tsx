import React from 'react';

import TopBar from '~/components/TopBar';

import { Container } from './styles';

const AppScreenContainer: React.FC = ({ children }) => {
	return (
		<Container showsVerticalScrollIndicator={false}>
			<TopBar style={{ marginLeft: -20 }} />
			{children}
		</Container>
	);
};

export default AppScreenContainer;
