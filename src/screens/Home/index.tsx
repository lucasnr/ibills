import React, { useState } from 'react';

import Header from '~/components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
	const [active, setActive] = useState(0);

	return (
		<Container>
			<Header active={active} />
		</Container>
	);
};

export default Home;
