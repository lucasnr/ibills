import styled from 'styled-components/native';
import illustration from '~/assets/img/illustration-dashboard.png';

export const Wrapper = styled.View`
	align-items: flex-end;
	background-color: ${({ theme }) => theme.background.primary};
	border-radius: 5px;
	flex-direction: row;
	margin-bottom: 28px;
`;

export const Container = styled.View`
	padding: 12px;
	width: 65%;
`;

export const Greetings = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 16px;
`;

export const Name = styled(Greetings)`
	color: ${({ theme }) => theme.colors.secondary};
	font-family: ${({ theme }) => theme.font.primary.bold};
	margin-bottom: 20px;
`;

export const Caption = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 12px;
	padding-right: 16px;
`;

export const Illustration = styled.Image.attrs({
	source: illustration,
})`
	width: 35%;
`;