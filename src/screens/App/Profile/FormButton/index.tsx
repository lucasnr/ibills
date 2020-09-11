import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Container, Text } from './styles';

interface Props {
	text: string;
	onPress?(): void;
}

const FormButton: React.FC<Props> = ({ text, onPress }) => {
	const {
		text: { alternative },
	} = useContext(ThemeContext);

	return (
		<Container activeOpacity={0.6} onPress={onPress}>
			<Icon name="pencil" color={alternative} size={16} />
			<Text>{text}</Text>
		</Container>
	);
};

export default FormButton;
