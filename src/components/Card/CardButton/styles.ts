import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	align-items: center;
	align-self: flex-end;
	background-color: ${({ theme }) => theme.background.alternative};
	flex-direction: row;
	margin-top: 20px;
	padding: 14px;
`;

export const Icon = styled.Image`
	height: 14px;
	margin-right: 8px;
	resize-mode: contain;
	width: 14px;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.text.alternative};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 12px;
`;
