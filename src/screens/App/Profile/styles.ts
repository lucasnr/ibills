import styled from 'styled-components/native';

export const Avatar = styled.Image`
	border-radius: 180px;
	border-color: ${({ theme }) => theme.text.alternative};
	border-width: 2px;
	height: 84px;
	margin-right: 24px;
	resize-mode: cover;
	width: 84px;
`;

export const Name = styled.Text`
	align-self: flex-start;
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 12px;
	margin-bottom: 20px;
	margin-top: 8px;
	min-width: 84px;
	text-align: center;
`;

export const AvatarButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.background.primary};
	border-color: ${({ theme }) => theme.colors.alternative};
	border-style: solid;
	border-width: 1px;
	min-width: 160px;
	padding: 10px;
`;

export const AvatarButtonText = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 12px;
	margin-left: 8px;
`;

export const Form = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	margin-bottom: auto;
	margin-right: 20px;
	padding: 16px;
	width: 300px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text.alternative};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 14px;
`;

export const Label = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 12px;
	margin-bottom: 5px;
	margin-top: 20px;
`;
