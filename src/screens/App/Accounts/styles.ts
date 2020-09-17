import styled from 'styled-components/native';

import { Card } from '~/components/Card';
import Row from '~/components/Row';

import { isDesktop } from '~/utils/consts';

import illustration from '~/assets/img/illustration-accounts.png';

export const Account = styled(Card)`
	flex-grow: 0;
	margin-bottom: 20px;
	min-width: 350px;
`;

export const Description = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-size: ${isDesktop ? 14 : 12}px;
	font-family: ${({ theme }) => theme.font.secondary.regular};
	padding-right: 20px;
`;

export const Value = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 16px;
	margin-left: auto;
`;

export const AccountRow = styled(Row)`
	margin-top: 20px;
`;

export const AccountFooter = styled(AccountRow)`
	justify-content: flex-end;
`;

export const AccountsIllustration = styled.Image.attrs({
	source: illustration,
})`
	bottom: 20px;
	height: 200px;
	position: fixed;
	right: 20px;
	width: 306px;
`;
