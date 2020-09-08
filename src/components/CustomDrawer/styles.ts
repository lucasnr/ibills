import styled from 'styled-components/native';

export const Container = styled.View`
	justify-content: space-between;
	flex-grow: 1;
	padding: 32px 16px;
	padding-right: 0px;
`;

export const ItemsContainer = styled.View`
	justify-content: center;
	flex-grow: 1;
`;

interface Props {
	active?: boolean;
}

export const Item = styled.TouchableOpacity<Props>`
	align-items: center;
	border-right-color: ${({ theme: { colors }, active = false }) =>
		active ? colors.primary : 'transparent'};
	border-style: solid;
	border-right-width: 2px;
	flex-direction: row;
	padding: 16px 0px;
	padding-right: 24px;
`;

export const ItemLabel = styled.Text<Props>`
	color: ${({ theme: { text }, active }) =>
		active ? text.title : text.secondary};
	font-family: 'VisbyRoundRegular';
	font-size: 14px;
	margin-left: 8px;
`;

export const IconContainer = styled.View`
	align-items: center;
	height: 24px;
	justify-content: center;
	width: 28px;
`;
