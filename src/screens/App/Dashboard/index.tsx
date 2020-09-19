import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Subtitle from '~/components/Subtitle';
import Row from '~/components/Row';
import DashboardReports from '~/components/DashboardReports';
import GoalPercentage from '~/components/DashboardReports/GoalPercentage';
import CategoryRevenue from '~/components/DashboardReports/CategoryRevenue';
import CategoryExpenses from '~/components/DashboardReports/CategoryExpenses';
import ConsumptionCards from '~/components/DashboardReports/ConsumptionCards';
import MonthlyTransactions from '~/components/DashboardReports/MonthlyTransactions';
import { Card, CardContainer, CardIcon, CardText } from '~/components/Card';

import WelcomeHeader from './WelcomeHeader';
import Transactions from './Transactions';
import CardsGrid from './CardsGrid';

import { isDesktop } from '~/utils/consts';

import graphUpwards from '~/assets/img/graph-upwards.png';
import graphDownwards from '~/assets/img/graph-downwards.png';
import cash from '~/assets/img/cash.png';

const Dashboard: React.FC = () => {
	const { text } = useContext(ThemeContext);

	if (!isDesktop)
		return (
			<Container>
				<WelcomeHeader />

				<ScrollContainer>
					<CardContainer>
						<Subtitle text="Receitas" />
						<Card row>
							<CardIcon source={graphUpwards} />
							<CardText style={{ color: text.alternative }}>
								R$6.420,00
							</CardText>
						</Card>
					</CardContainer>

					<CardContainer>
						<Subtitle text="Despesas" />
						<Card row>
							<CardIcon source={graphDownwards} />
							<CardText>R$4.238,90</CardText>
						</Card>
					</CardContainer>

					<CardContainer>
						<Subtitle text="Cartão de Crédito" />
						<Card row>
							<CardIcon source={cash} />
							<CardText>R$4.238,90</CardText>
						</Card>
					</CardContainer>
				</ScrollContainer>

				<DashboardReports />

				<Subtitle text="Últimas Transações" />
				<Transactions />
			</Container>
		);

	return (
		<Container>
			<ScrollContainer style={{ marginBottom: 0 }}>
				<View style={{ marginRight: 20 }}>
					<WelcomeHeader />

					<Row style={{ marginBottom: 20 }}>
						<CardsGrid>
							<CardContainer>
								<Subtitle text="Receitas" />
								<Card row>
									<CardIcon source={graphUpwards} />
									<CardText style={{ color: text.alternative }}>
										R$6.420,00
									</CardText>
								</Card>
							</CardContainer>

							<CardContainer>
								<Subtitle text="Despesas" />
								<Card row>
									<CardIcon source={graphDownwards} />
									<CardText>R$4.238,90</CardText>
								</Card>
							</CardContainer>

							<CardContainer>
								<Subtitle text="Cartão de Crédito" />
								<Card row>
									<CardIcon source={cash} />
									<CardText>R$4.238,90</CardText>
								</Card>
							</CardContainer>

							<CardContainer>
								<Subtitle text="Última Transação" />
								<Card row>
									<CardIcon source={cash} />
									<Icon name="chevron-down" size={20} />
									<CardText>R$4.238,90</CardText>
								</Card>
							</CardContainer>
						</CardsGrid>

						<CardContainer>
							<Subtitle text="Porcentual do Objetivo" />
							<Card>
								<GoalPercentage percentage={58} />
							</Card>
						</CardContainer>
					</Row>

					<Subtitle text="Últimas Transações" />
					<Transactions />
				</View>

				<View>
					<CardContainer>
						<Subtitle text="Despesas por Categoria" />
						<Card>
							<CategoryExpenses />
						</Card>
					</CardContainer>

					<CardContainer style={{ marginVertical: 20 }}>
						<Subtitle text="Receitas por Categoria" />
						<Card>
							<CategoryRevenue />
						</Card>
					</CardContainer>

					<ConsumptionCards />
				</View>

				<View>
					<MonthlyTransactions />
				</View>
			</ScrollContainer>
		</Container>
	);
};

export default Dashboard;
