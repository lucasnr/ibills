import styled, { css } from 'styled-components/native';

import { padding } from './consts';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: padding,
		paddingBottom: 20,
	},
})``;

export const Card = styled.View`
	margin-right: 10px;
`;

interface CardContainerProps {
	row?: boolean;
}

const rowStyle = css`
	align-items: center;
	flex-direction: row;
`;

export const CardContainer = styled.View<CardContainerProps>`
	${({ row = false }) => row && rowStyle};
	align-self: flex-start;
	background-color: ${({ theme }) => theme.background.primary};
	border-radius: 5px;
	flex-grow: 1;
	padding: 16px 12px;
	position: relative;
`;
