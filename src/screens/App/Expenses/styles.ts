import styled from 'styled-components/native';

import { TableColumnText } from '~/components/Table';

export const Situation = styled(TableColumnText)`
	color: ${({ danger = false }) => (danger ? '#FF3614' : '#32B947')};
`;
