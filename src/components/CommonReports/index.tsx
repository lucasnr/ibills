import React from 'react';

import ScrollContainer from '~/components/ScrollContainer';
import Subtitle from '~/components/Subtitle';
import Row from '~/components/Row';

import ConsumptionCard from './ConsumptionCard';
import GoalPercentage from './GoalPercentage';
import CategoryRevenue from './CategoryRevenue';
import CategoryExpenses from './CategoryExpenses';

import { Card, CardContainer } from './styles';

import moon from '~/assets/img/moon.png';
import sun from '~/assets/img/sun.png';

const CommonReports: React.FC = () => {
	return (
		<>
			<ScrollContainer>
				<Card>
					<Subtitle text="Despesas por Categoria" />
					<CardContainer>
						<CategoryExpenses />
					</CardContainer>
				</Card>

				<Card>
					<Subtitle text="Receitas por Categoria" />
					<CardContainer>
						<CategoryRevenue />
					</CardContainer>
				</Card>
			</ScrollContainer>

			<ScrollContainer>
				<Card style={{ marginRight: 20 }}>
					<Subtitle text="Percentual do Objetivo" />
					<CardContainer>
						<GoalPercentage percentage={58} />
					</CardContainer>
				</Card>

				<Card>
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
				</Card>
			</ScrollContainer>
		</>
	);
};

export default CommonReports;
