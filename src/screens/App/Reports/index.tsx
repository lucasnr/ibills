import React from 'react';

import Container from '~/components/AppScreenContainer';
import DashboardReports from '~/components/DashboardReports';
import ExpensesRevenueReports from '~/components/ExpensesRevenueReports';

const Reports: React.FC = () => {
	return (
		<Container>
			<DashboardReports />
			<ExpensesRevenueReports />
		</Container>
	);
};

export default Reports;
