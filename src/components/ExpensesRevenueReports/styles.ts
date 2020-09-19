import styled from 'styled-components/native';

import { isDesktop } from '~/utils/consts';

export const Label = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.secondary.semiBold};
	font-size: ${isDesktop ? 12 : 10}px;
	margin-bottom: -12px;
	text-align: center;
`;
