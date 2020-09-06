import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
	align-items: center;
	flex-direction: row;
	height: 50px;
	position: relative;
`;

interface LinkProps {
	active?: boolean;
}

export const Link = styled.Text<LinkProps>`
	align-items: center;
	color: ${({ theme: { text, colors }, active = false }) =>
		active ? colors.primary : text.secondary};
	font-family: 'VisbyRoundMedium';
	font-size: 14px;
	flex-direction: row;
	justify-content: center;
	text-align: center;
	text-transform: uppercase;
	width: 50%;
`;

export const BorderBottom = styled.View`
	background-color: ${({ theme }) => theme.colors.primary};
	height: 2px;
	width: 50%;
`;
