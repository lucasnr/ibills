import React from 'react';
import { ViewStyle } from 'react-native';

import { Container } from './styles';

interface Props {
	style?: ViewStyle;
}

const Row: React.FC<Props> = ({ children, style }) => {
	return <Container style={style}>{children}</Container>;
};

export default Row;
