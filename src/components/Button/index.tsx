import React from 'react';

import { Container, Text, Arrow } from './styles';

interface Props {
	text: string;
	onPress(): void;
}

const Button: React.FC<Props> = ({ text, onPress }) => {
	return (
		<Container onPress={onPress}>
			<Text>{text}</Text>
			<Arrow />
		</Container>
	);
};

export default Button;
