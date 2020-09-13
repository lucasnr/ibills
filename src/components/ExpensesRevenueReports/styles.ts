import styled from 'styled-components/native';

export const Label = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.secondary.semiBold};
	font-size: 10px;
	margin-bottom: -12px;
	text-align: center;
`;
