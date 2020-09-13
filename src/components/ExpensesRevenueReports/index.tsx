import React from 'react';
import { PieChart, ProgressCircle } from 'react-native-svg-charts';

import ScrollContainer from '~/components/ScrollContainer';
import Subtitle from '~/components/Subtitle';
import { Card, CardContainer, CardIcon, CardText } from '~/components/Card';
import ChartContainer, { ChartText } from '~/components/ChartContainer';

import { Label } from './styles';

import bradesco from '~/assets/img/logo-bradesco.png';
import itau from '~/assets/img/logo-itau.png';

const size = 120;

const ExpensesRevenueReports: React.FC = () => {
	return (
		<>
			<ScrollContainer>
				<CardContainer>
					<Subtitle text="Total: Receitas do Mês" />
					<Card>
						<ChartContainer
							chart={
								<ProgressCircle
									style={{
										height: size,
										width: size,
									}}
									progress={0.8}
									backgroundColor="transparent"
									progressColor="#BE63F9"
									strokeWidth={5}
								/>
							}
							content={
								<ChartText style={{ fontSize: 14 }}>R$ 9.000,00</ChartText>
							}
						/>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Total: Despesas do Mês" />
					<Card>
						<ChartContainer
							chart={
								<ProgressCircle
									style={{
										height: size,
										width: size,
									}}
									progress={0.35}
									backgroundColor="transparent"
									progressColor="#FD907E"
									strokeWidth={5}
								/>
							}
							content={
								<ChartText style={{ fontSize: 14 }}>R$ 4.225,00</ChartText>
							}
						/>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Balanço Mensal" />
					<Card>
						<ChartContainer
							chart={
								<PieChart
									style={{
										height: size,
										width: size,
									}}
									data={[
										{
											key: 1,
											amount: 46.94,
											svg: { fill: '#FD907E' },
											arc: { cornerRadius: 45 },
										},
										{
											key: 2,
											amount: 53.16,
											svg: { fill: '#BE63F9' },
											arc: { cornerRadius: 45 },
										},
									]}
									valueAccessor={({ item }) => item.amount}
									innerRadius="85%"
									outerRadius="93%"
								/>
							}
							content={
								<ChartText style={{ fontSize: 14 }}>R$ 4.225,00</ChartText>
							}
						/>

						<Label>46.94%</Label>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Saldo Total" />

					<Card row style={{ marginBottom: 5 }}>
						<CardIcon source={bradesco} />
						<CardText>R$5.098,00</CardText>
					</Card>

					<Card row style={{ marginTop: 5 }}>
						<CardIcon source={itau} />
						<CardText>R$3.225,00</CardText>
					</Card>
				</CardContainer>
			</ScrollContainer>
		</>
	);
};

export default ExpensesRevenueReports;
