import React from 'react';
import { Circle } from 'react-native-svg';
import { LineChart, Grid, ProgressCircle } from 'react-native-svg-charts';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Card, CardContainer } from '~/components/Card';
import Subtitle from '~/components/Subtitle';
import Row, { RowCol } from '~/components/Row';

import { Percentage, Label, ProgressText, ProgressLabel } from './styles';
import ChartContainer from '~/components/ChartContainer';

const MonthlyTransactions: React.FC = () => {
	const data = [0, 10, 4, 8, 0, 8, 5, 6, 5, 13, 4, 2, 5];

	const Decorator = ({ x, y }) => {
		return (
			<>
				<Circle cx={x(1)} cy={y(10)} r={5} stroke={'#fff'} fill={'#F96344'} />
				<Circle cx={x(4)} cy={y(0)} r={5} stroke={'#fff'} fill={'#FBC02D'} />
				<Circle cx={x(9)} cy={y(13)} r={5} stroke={'#fff'} fill={'#79D2DE'} />
			</>
		);
	};

	return (
		<CardContainer>
			<Subtitle text="Movimentações Mensais" />
			<Card>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Label>Dezembro</Label>
					<Icon name="chevron-down" color="#AA3CBE" size={22} />
				</Row>

				<Row>
					<Icon name="arrow-up" color="#AA3CBE" size={16} />
					<Percentage>13%</Percentage>
					<Label>Receitas</Label>
					<Icon name="chevron-down" color="#AA3CBE" size={22} />
				</Row>

				<LineChart
					style={{ height: 100, width: 350 }}
					data={data}
					svg={{ stroke: '#AA3CBE', strokeWidth: 3 }}
					contentInset={{ top: 20, bottom: 20 }}
					numberOfTicks={3}
				>
					<Decorator />
					<Grid />
				</LineChart>
			</Card>

			<Row style={{ marginTop: 20 }}>
				<RowCol>
					<ChartContainer
						chart={
							<ProgressCircle
								style={{
									height: 100,
									width: 100,
								}}
								progress={0.85}
								progressColor="#79D2DE"
								strokeWidth={16}
								startAngle={-Math.PI * 1.1}
							/>
						}
						content={<ProgressText>25</ProgressText>}
					/>

					<ProgressLabel>Receitas</ProgressLabel>
				</RowCol>

				<RowCol>
					<ChartContainer
						chart={
							<ProgressCircle
								style={{
									height: 100,
									width: 100,
								}}
								progress={0.5}
								progressColor="#F75C4B "
								strokeWidth={16}
								startAngle={-Math.PI * 0.5}
							/>
						}
						content={<ProgressText>12</ProgressText>}
					/>

					<ProgressLabel>Despesas</ProgressLabel>
				</RowCol>

				<RowCol>
					<ChartContainer
						chart={
							<ProgressCircle
								style={{
									height: 100,
									width: 100,
								}}
								progress={0.3}
								progressColor="#FBC02D"
								strokeWidth={16}
							/>
						}
						content={<ProgressText>9</ProgressText>}
					/>

					<ProgressLabel>Transferências</ProgressLabel>
				</RowCol>
			</Row>
		</CardContainer>
	);
};

export default MonthlyTransactions;
