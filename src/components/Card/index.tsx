import styled, { css } from 'styled-components/native';

import Button from './CardButton';

export const CardContainer = styled.View`
	margin-right: 20px;
`;

interface CardProps {
	row?: boolean;
}

const rowStyle = css`
	align-items: center;
	flex-direction: row;
`;

export const Card = styled.View<CardProps>`
	${({ row = false }) => row && rowStyle};
	align-self: flex-start;
	background-color: ${({ theme }) => theme.background.primary};
	border-radius: 5px;
	flex-grow: 1;
	padding: 16px 12px;
	position: relative;
`;

interface CardIconProps {
	size?: number;
}

export const CardIcon = styled.Image<CardIconProps>`
	height: ${({ size = 20 }) => size}px;
	margin-right: 14px;
	width: ${({ size = 20 }) => size}px;
	resize-mode: contain;
`;

export const CardText = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 14px;
	font-family: ${({ theme }) => theme.font.primary.medium};
`;

export const CardTitle = styled.Text`
	color: ${({ theme }) => theme.text.alternative};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 14px;
`;

export const CardLabel = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 12px;
	margin-bottom: 5px;
	margin-top: 20px;
`;

export const CardButton = Button;
