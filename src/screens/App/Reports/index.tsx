import React from 'react';

import Container from '~/components/AppScreenContainer';
import { Card, CardContainer } from '~/components/Card';
import DashboardReports from '~/components/DashboardReports';
import ExpensesRevenueReports from '~/components/ExpensesRevenueReports';
import CategoryExpenses from '~/components/DashboardReports/CategoryExpenses';
import CategoryRevenue from '~/components/DashboardReports/CategoryRevenue';
import GoalPercentage from '~/components/DashboardReports/GoalPercentage';
import ConsumptionCards from '~/components/DashboardReports/ConsumptionCards';
import MonthlyTransactions from '~/components/DashboardReports/MonthlyTransactions';
import Subtitle from '~/components/Subtitle';
import ScrollContainer from '~/components/ScrollContainer';

import { isDesktop } from '~/utils/consts';

const Reports: React.FC = () => {
	if (!isDesktop)
		return (
			<Container>
				<DashboardReports />
				<ExpensesRevenueReports />
			</Container>
		);

	return (
		<Container>
			<ScrollContainer>
				<CardContainer style={{ marginRight: 20 }}>
					<Subtitle text="Percentual do Objetivo" />
					<Card>
						<GoalPercentage percentage={58} />
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Despesas por Categoria" />
					<Card>
						<CategoryExpenses />
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Receitas por Categoria" />
					<Card>
						<CategoryRevenue />
					</Card>
				</CardContainer>

				<ConsumptionCards />
			</ScrollContainer>

			<ScrollContainer contentContainerStyle={{ alignItems: 'flex-start' }}>
				<ExpensesRevenueReports />
				<MonthlyTransactions />
			</ScrollContainer>
		</Container>
	);
};

export default Reports;
