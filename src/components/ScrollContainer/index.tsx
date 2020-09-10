import React from 'react';

import { Container } from './styles';

const ScrollContainer: React.FC = ({ children }) => {
	return (
		<Container horizontal={true} showsHorizontalScrollIndicator={false}>
			{children}
		</Container>
	);
};

export default ScrollContainer;
