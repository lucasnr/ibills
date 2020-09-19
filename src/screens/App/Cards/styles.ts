import styled from 'styled-components/native';

import Row from '~/components/Row';

import { isDesktop } from '~/utils/consts';

import cardIllustration from '~/assets/img/illustration-creditcard.png';
import shoppingIllustration from '~/assets/img/illustration-shopping.png';

export const BankRow = styled(Row)`
	justify-content: space-between;
	margin-top: 20px;
`;

export const Status = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.bold};
	font-size: ${isDesktop ? 14 : 12}px;
`;

export const StatusDate = styled(Status)`
	font-family: ${({ theme }) => theme.font.secondary.light};
`;

export const Text = styled(Status)`
	font-family: ${({ theme }) => theme.font.secondary.regular};
	margin-right: 8px;
`;

export const Value = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 14px;
	margin-left: auto;
`;

export const ProgressBar = styled.View`
	background-color: ${({ theme }) => theme.background.secondary};
	border-radius: 80px;
	height: 8px;
	margin-top: 20px;
`;

interface ProgressProps {
	progress: number;
}

export const Progress = styled(ProgressBar)<ProgressProps>`
	background-color: #be63f9;
	margin-top: 0px;
	width: ${({ progress }) => progress}%;
`;

export const ProgressLabel = styled(Status)`
	font-size: ${isDesktop ? 12 : 10}px;
	margin-bottom: 20px;
	margin-top: 4px;
`;

export const CardIllustration = styled.Image.attrs({
	source: cardIllustration,
})`
	height: 170px;
	margin-top: auto;
	width: 186px;
`;

export const ShoppingIllustration = styled(CardIllustration).attrs({
	source: shoppingIllustration,
})`
	height: 242px;
	margin-left: auto;
	margin-right: -46px;
	width: 124px;
	z-index: -5;
`;
