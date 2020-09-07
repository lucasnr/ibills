import styled from 'styled-components/native';

export const Wrapper = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
	height: 50px;
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
`;

export const LinkContainer = styled.TouchableOpacity`
	width: 50%;
`;

export const BorderBottom = styled.View`
	background-color: ${({ theme }) => theme.colors.primary};
	height: 2px;
	width: 55%;
`;
