import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { ProgressCircle } from 'react-native-svg-charts';

import ChartContainer, { ChartText } from '~/components/ChartContainer';

import { isDesktop } from '~/utils/consts';

const size = isDesktop ? 120 : 100;

interface Props {
	percentage: number;
	color?: string;
	background?: string;
}

const GoalPercentage: React.FC<Props> = ({ percentage, color, background }) => {
	const { colors } = useContext(ThemeContext);

	return (
		<ChartContainer
			chart={
				<ProgressCircle
					style={{
						height: size,
						width: size,
					}}
					progress={percentage / 100}
					progressColor={color || colors.alternative}
					backgroundColor={background || '#f0fdfd'}
					strokeWidth={20}
					cornerRadius={0}
				/>
			}
			content={<ChartText>{percentage}%</ChartText>}
		/>
	);
};

export default GoalPercentage;
