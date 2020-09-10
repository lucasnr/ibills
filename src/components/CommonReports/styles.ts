import styled from 'styled-components/native';

export const Card = styled.View`
	margin-right: 10px;
`;

export const CardContainer = styled.View`
	align-items: center;
	background-color: ${({ theme }) => theme.background.primary};
	border-radius: 5px;
	flex-direction: row;
	flex-grow: 1;
	padding: 16px 12px;
	position: relative;
`;
