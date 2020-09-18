import React from 'react';
import { isDesktop } from '~/utils/consts';

import { Goals, Form } from './styles.web';

export const GoalsContainer: React.FC = ({ children }) => {
	if (!isDesktop) return <>{children}</>;
	return <Goals>{children}</Goals>;
};

export const GoalForm: React.FC = ({ children }) => {
	if (!isDesktop) return <>{children}</>;
	return <Form>{children}</Form>;
};
