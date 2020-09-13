import React from 'react';

import { Card, CardContainer } from '~/components/Card';
import ScrollContainer from '~/components/ScrollContainer';
import Subtitle from '~/components/Subtitle';
import Row from '~/components/Row';

import ConsumptionCard from './ConsumptionCard';
import GoalPercentage from './GoalPercentage';
import CategoryRevenue from './CategoryRevenue';
import CategoryExpenses from './CategoryExpenses';

import moon from '~/assets/img/moon.png';
import sun from '~/assets/img/sun.png';

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

				<CardContainer>
					<Subtitle text="Consumo" />
					<Row>
						<ConsumptionCard
							iconSource={moon}
							title="Noite"
							percentage={80}
							period="18h às 00h"
						/>
						<ConsumptionCard
							iconSource={sun}
							title="Dia"
							percentage={35}
							period="7h às 17:59h"
						/>
					</Row>
				</CardContainer>
			</ScrollContainer>
		</>
	);
};

export default DashboardReports;
