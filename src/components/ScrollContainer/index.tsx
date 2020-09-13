import React from 'react';
import { ViewStyle } from 'react-native';

import { Container } from './styles';

interface Props {
	style?: ViewStyle;
}

const ScrollContainer: React.FC<Props> = ({ children, style }) => {
	return (
		<Container
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={style}
		>
			{children}
		</Container>
	);
};

export default ScrollContainer;
