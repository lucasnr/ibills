import React from 'react';

import {
	Wrapper,
	Container,
	Greetings,
	Name,
	Caption,
	Illustration,
} from './styles';

const WelcomeHeader: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<Greetings>Bem-vindo de volta,</Greetings>
				<Name>Marcos</Name>

				<Caption>
					Não esqueça de checar seu relatório mensal e acompanhar seus gastos
				</Caption>
			</Container>

			<Illustration />
		</Wrapper>
	);
};

export default WelcomeHeader;
