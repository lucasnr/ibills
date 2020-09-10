import styled from 'styled-components/native';

export const CardIcon = styled.Image`
	height: 20px;
	margin-right: 14px;
	width: 20px;
	resize-mode: contain;
`;

export const CardText = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 14px;
	font-family: 'VisbyRoundMedium';
`;
