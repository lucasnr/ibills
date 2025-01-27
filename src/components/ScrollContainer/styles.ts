import styled from 'styled-components/native';

import { padding } from '~/components/AppScreenContainer';

export const Container = styled.ScrollView`
	flex-grow: 0;
	margin-bottom: 20px;
	margin-left: -${padding}px;
	margin-right: -${padding}px;
`;
