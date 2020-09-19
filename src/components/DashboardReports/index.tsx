import React from 'react';

import { Card, CardContainer } from '~/components/Card';
import ScrollContainer from '~/components/ScrollContainer';
import Subtitle from '~/components/Subtitle';

import ConsumptionCards from './ConsumptionCards';
import GoalPercentage from './GoalPercentage';
import CategoryRevenue from './CategoryRevenue';
import CategoryExpenses from './CategoryExpenses';

const DashboardReports: React.FC = () => {
	return (
		<>
			<ScrollContainer>
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
			</ScrollContainer>

			<ScrollContainer>
				<CardContainer style={{ marginRight: 20 }}>
					<Subtitle text="Percentual do Objetivo" />
					<Card>
						<GoalPercentage percentage={58} />
					</Card>
				</CardContainer>

				<ConsumptionCards />
			</ScrollContainer>
		</>
	);
};

export default DashboardReports;
