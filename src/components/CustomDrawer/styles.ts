import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		justifyContent: 'space-between',
		paddingBottom: 16,
		paddingLeft: 16,
		paddingTop: 32,
		flexGrow: 1,
	},
})`
	flex-grow: 1;
`;

export const ItemsContainer = styled.View`
	flex-grow: 1;
	justify-content: center;
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
		active ? text.alternative : text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 14px;
	margin-left: 8px;
`;

export const IconContainer = styled.View`
	align-items: center;
	height: 24px;
	justify-content: center;
	width: 28px;
`;
