import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Subtitle from '~/components/Subtitle';
import CommonReports from '~/components/CommonReports';
import { Card, CardContainer } from '~/components/CommonReports/styles';

import { CardIcon, CardText } from './styles';
import WelcomeHeader from './WelcomeHeader';
import Transactions from './Transactions';

import graphUpwards from '~/assets/img/graph-upwards.png';
import graphDownwards from '~/assets/img/graph-downwards.png';
import cash from '~/assets/img/cash.png';

const Dashboard: React.FC = () => {
	const { text } = useContext(ThemeContext);

	return (
		<Container>
			<WelcomeHeader />

			<ScrollContainer>
				<Card>
					<Subtitle text="Receitas" />
					<CardContainer>
						<CardIcon source={graphUpwards} />
						<CardText style={{ color: text.alternative }}>R$6.420,00</CardText>
					</CardContainer>
				</Card>

				<Card>
					<Subtitle text="Despesas" />
					<CardContainer>
						<CardIcon source={graphDownwards} />
						<CardText>R$4.238,90</CardText>
					</CardContainer>
				</Card>

				<Card>
					<Subtitle text="Cartão de Crédito" />
					<CardContainer>
						<CardIcon source={cash} />
						<CardText>R$4.238,90</CardText>
					</CardContainer>
				</Card>
			</ScrollContainer>

			<CommonReports />

			<Subtitle text="Últimas Transações" />
			<Transactions />
		</Container>
	);
};

export default Dashboard;
