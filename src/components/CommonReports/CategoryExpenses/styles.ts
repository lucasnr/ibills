import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: column;
`;

export const Caption = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 8px;
`;

export const Legend = styled.View`
	margin-right: 20px;
`;

export const Label = styled.View`
	align-items: center;
	flex-direction: row;
	margin: 4px 0px;
`;

export const LabelBullet = styled.View`
	border-radius: 80px;
	height: 8px;
	margin-right: 10px;
	width: 8px;
`;

export const LabelText = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 10px;
`;
