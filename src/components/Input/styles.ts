import styled from 'styled-components/native';

export const Container = styled.TextInput`
	background-color: ${({ theme }) => theme.background.primary};
	border-color: ${({ theme }) => theme.background.alternative};
	border-style: solid;
	border-width: 1px;
	color: ${({ theme }) => theme.text.primary};
	font-family: 'VisbyRoundRegular';
	font-size: 13px;
	padding: 10px 8px;
`;
