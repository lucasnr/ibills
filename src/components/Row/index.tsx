import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, Col } from './styles';

interface Props {
	cols?: boolean;
	style?: ViewStyle;
}

const Row: React.FC<Props> = ({ children, style, cols = false }) => {
	return (
		<Container style={style} cols={cols}>
			{children}
		</Container>
	);
};

export default Row;

export const RowCol = Col;
