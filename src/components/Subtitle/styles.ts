import styled from 'styled-components/native';

export const Container = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 10px;
	margin-bottom: 6px;
`;
