import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	border-radius: 5px;
	margin-right: 8px;
	padding: 16px 12px;
	width: 135px;
`;

export const Icon = styled.Image`
	height: 24px;
	resize-mode: contain;
	width: 24px;
`;

export const Title = styled.Text`
	font-family: 'VisbyRoundBold';
	font-size: 18px;
	margin: 20px 0px 6px 0px;
`;

export const PercentageContainer = styled.View`
	background-color: ${({ theme }) => theme.background.secondary};
	border-radius: 5px;
	height: 6px;
	position: relative;
`;

export const Percentage = styled(PercentageContainer)`
	background-color: #147ad6;
`;

export const Period = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: 'VisbyRoundRegular';
	font-size: 12px;
	margin-top: 12px;
`;
