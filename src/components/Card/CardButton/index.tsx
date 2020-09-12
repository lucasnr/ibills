import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, Icon, Text } from './styles';

interface Props {
	text: string;
	iconSource: any;
	onPress?(): void;
	style?: ViewStyle;
}

const CardButton: React.FC<Props> = ({ text, onPress, iconSource, style }) => {
	return (
		<Container activeOpacity={0.6} onPress={onPress} style={style}>
			<Icon source={iconSource} />
			<Text>{text}</Text>
		</Container>
	);
};

export default CardButton;
