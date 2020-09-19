import styled from 'styled-components/native';

import Row from '~/components/Row';

export const Header = styled(Row)`
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const Percentage = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.bold};
	font-size: 14px;
	margin-left: 5px;
`;

export const Label = styled(Percentage)`
	font-family: ${({ theme }) => theme.font.secondary.regular};
`;

export const ProgressText = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 24px;
`;

export const ProgressLabel = styled(Label)`
	color: ${({ theme }) => theme.text.secondary};
	margin-left: 0px;
	margin-top: 12px;
	text-align: center;
`;
