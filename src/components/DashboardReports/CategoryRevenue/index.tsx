import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components/native';
import { PieChart } from 'react-native-svg-charts';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import ChartContainer, { ChartText } from '~/components/ChartContainer';
import Row from '~/components/Row';
import {
	Container,
	Legend,
	Label,
	LabelBullet,
	LabelText,
	Description,
	DescriptionBullet,
	DescriptionText,
} from './styles';

import { isDesktop } from '~/utils/consts';

const size = isDesktop ? 120 : 100;

const CategoryRevenue: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	const data = useMemo(
		() => [
			{
				key: 1,
				amount: 62,
				svg: { fill: colors.primary },
				arc: { cornerRadius: 45 },
				label: 'Emprego CLT',
			},
			{
				key: 2,
				amount: 38,
				svg: { fill: colors.alternative },
				arc: { cornerRadius: 45 },
				label: 'Freelancer',
			},
		],
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
						/>
					}
					content={
						<Row>
							<Icon name="chevron-up" size={18} color={colors.primary} />
							<ChartText>83%</ChartText>
						</Row>
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

			<Description>
				<DescriptionBullet style={{ backgroundColor: colors.primary }} />
				<DescriptionText>+5% em relação aos últimos meses</DescriptionText>
			</Description>
		</Container>
	);
};

export default CategoryRevenue;
