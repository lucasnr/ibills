import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { ProgressCircle } from 'react-native-svg-charts';

import ChartContainer, { ChartText } from '~/components/ChartContainer';

interface Props {
	percentage: number;
}

const GoalPercentage: React.FC<Props> = ({ percentage }) => {
	const { colors } = useContext(ThemeContext);
	const size = 100;

	return (
		<ChartContainer
			chart={
				<ProgressCircle
					style={{
						height: size,
						width: size,
					}}
					progress={percentage / 100}
					progressColor={colors.alternative}
					backgroundColor="#f0fdfd"
					strokeWidth={20}
					cornerRadius={0}
				/>
			}
			content={<ChartText>{percentage}%</ChartText>}
			style={{ marginRight: 0 }}
		/>
	);
};

export default GoalPercentage;
