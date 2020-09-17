import React from 'react';
import { isDesktop } from '~/utils/consts';

import { Container } from './styles.web';

const FormsContainer: React.FC = ({ children }) => {
	if (!isDesktop) return <>{children}</>;
	return <Container>{children}</Container>;
};

export default FormsContainer;
