import React from 'react';

import {
	Container,
	Icon,
	Title,
	Percentage,
	PercentageContainer,
	Period,
} from './styles';

interface Props {
	iconSource: any;
	title: string;
	percentage: number;
	period: string;
}

const ConsumptionCard: React.FC<Props> = ({
	iconSource,
	title,
	percentage,
	period,
}) => {
	return (
		<Container>
			<Icon source={iconSource} />
			<Title>{title}</Title>
			<PercentageContainer>
				<Percentage style={{ width: `${percentage}%` }} />
			</PercentageContainer>
			<Period>{period}</Period>
		</Container>
	);
};

export default ConsumptionCard;
