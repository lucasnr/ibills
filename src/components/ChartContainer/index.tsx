import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, Center, Text } from './styles';

interface Props {
	chart: JSX.Element;
	content: JSX.Element;
	style?: ViewStyle;
}

const ChartContainer: React.FC<Props> = ({ chart, content, style }) => {
	return (
		<Container style={style}>
			{chart}
			<Center>{content}</Center>
		</Container>
	);
};

export default ChartContainer;

export const ChartText = Text;
