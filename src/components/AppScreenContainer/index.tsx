import React from 'react';

import TopBar from '~/components/TopBar';

import { Container } from './styles';

const AppScreenContainer: React.FC = ({ children }) => {
	return (
		<Container showsVerticalScrollIndicator={false}>
			<TopBar />
			{children}
		</Container>
	);
};

export default AppScreenContainer;
