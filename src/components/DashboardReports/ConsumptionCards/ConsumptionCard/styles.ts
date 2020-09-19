import styled from 'styled-components/native';

import { isDesktop } from '~/utils/consts';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	border-radius: 5px;
	margin-right: 10px;
	padding: 16px 12px;
	width: 135px;
`;

export const Icon = styled.Image`
	height: 24px;
	resize-mode: contain;
	width: 24px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.secondary.bold};
	font-size: ${isDesktop ? 22 : 18}px;
	margin: ${isDesktop ? 25 : 20}px 0px 6px 0px;
`;

export const PercentageContainer = styled.View`
	background-color: ${({ theme }) => theme.background.secondary};
	border-radius: 5px;
	height: ${isDesktop ? 8 : 6}px;
	position: relative;
`;

export const Percentage = styled(PercentageContainer)`
	background-color: #147ad6;
`;

export const Period = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 12px;
	margin-top: 12px;
`;
