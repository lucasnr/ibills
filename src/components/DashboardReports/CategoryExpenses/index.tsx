import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components/native';
import { PieChart } from 'react-native-svg-charts';

import ChartContainer, { ChartText } from '~/components/ChartContainer';
import Row from '~/components/Row';
import {
	Container,
	Caption,
	Legend,
	Label,
	LabelBullet,
	LabelText,
} from './styles';

import { isDesktop } from '~/utils/consts';

const size = isDesktop ? 120 : 100;

const CategoryExpenses: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	const data = useMemo(
		() =>
			[
				{
					label: 'Despesas da Casa',
					amount: 45,
					svg: { fill: '#147AD6' },
				},
				{
					label: 'Educação',
					amount: 10,
					svg: { fill: '#F945AB' },
				},
				{
					label: 'Outros',
					amount: 7,
					svg: { fill: '#2FDF84' },
				},
				{
					label: 'Cartão de Crédito',
					amount: 15,
					svg: { fill: colors.primary },
				},
				{
					label: 'Alimentação',
					amount: 33,
					svg: { fill: colors.alternative },
				},
			].map((item, index) => ({
				key: index,
				arc: {
					cornerRadius: 45,
				},
				...item,
			})),
		[colors]
	);

	return (
		<Container>
			<Row>
				<ChartContainer
					chart={
						<PieChart
							style={{ height: size, width: size }}
							valueAccessor={({ item }) => item.amount}
							data={data}
							innerRadius="77%"
							outerRadius="88%"
							sort={(a, b) => (a.key > b.key ? 1 : -1)}
						/>
					}
					content={
						<>
							<ChartText>76%</ChartText>
							<Caption>da receita</Caption>
						</>
					}
				/>

				<Legend>
					{data
						.sort((a, b) => (a.amount > b.amount ? -1 : 1))
						.map((item) => (
							<Label key={item.key}>
								<LabelBullet style={{ backgroundColor: item.svg.fill }} />
								<LabelText>{item.label}</LabelText>
							</Label>
						))}
				</Legend>
			</Row>
		</Container>
	);
};

export default CategoryExpenses;
