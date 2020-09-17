import styled from 'styled-components/native';

import { isDesktop } from '~/utils/consts';

export const Container = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: ${isDesktop ? 14 : 10}px;
	margin-bottom: 6px;
`;
