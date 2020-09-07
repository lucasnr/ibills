import styled from 'styled-components/native';

export const ForgotPasswordContainer = styled.TouchableOpacity`
	margin: 16px auto 0px auto;
`;

export const ForgotPassword = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: 'VisbyRoundLight';
	font-size: 12px;
`;
