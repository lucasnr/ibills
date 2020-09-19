import React from 'react';

import { CardContainer } from '~/components/Card';
import Subtitle from '~/components/Subtitle';
import Row from '~/components/Row';

import ConsumptionCard from './ConsumptionCard';

import moon from '~/assets/img/moon.png';
import sun from '~/assets/img/sun.png';

const ConsumptionCards: React.FC = () => {
	return (
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
	);
};

export default ConsumptionCards;
