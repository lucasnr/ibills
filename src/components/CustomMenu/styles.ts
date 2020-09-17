import styled, { css } from 'styled-components/native';
import { ViewStyle } from 'react-native';

import { isDesktop } from '~/utils/consts';

const containerMobileStyle: ViewStyle = {
	paddingBottom: 16,
	paddingLeft: 16,
	paddingTop: 32,
	flexGrow: 1,
};

export const Container = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		justifyContent: 'space-between',
		...(isDesktop ? {} : containerMobileStyle),
	},
})`
	flex-grow: ${isDesktop ? 0 : 1};
`;

const itemsContainerDesktopStyle = css`
	border-bottom-left-radius: 45px;
	border-bottom-right-radius: 45px;
	flex-direction: row;
	justify-content: flex-start;
	padding: 0px 40px;
`;

const itemsContainerStyle = css`
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;
`;

export const ItemsContainer = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	${isDesktop ? itemsContainerDesktopStyle : itemsContainerStyle}
`;

interface Props {
	active?: boolean;
}

export const Item = styled.TouchableOpacity<Props>`
	align-items: center;
	border-bottom-color: ${({ theme: { colors }, active = false }) =>
		isDesktop && active ? colors.primary : 'transparent'};
	border-bottom-width: ${isDesktop ? 2 : 0}px;

	border-right-color: ${({ theme: { colors }, active = false }) =>
		!isDesktop && active ? colors.primary : 'transparent'};
	border-right-width: ${isDesktop ? 0 : 2}px;

	border-style: solid;
	flex-direction: ${isDesktop ? 'column' : 'row'};
	padding: ${isDesktop ? 12 : 16}px 0px;
	padding-left: ${isDesktop ? 16 : 0}px;
	padding-right: ${isDesktop ? 16 : 24}px;
`;

export const ItemLabel = styled.Text<Props>`
	color: ${({ theme: { text }, active }) =>
		active ? text.alternative : text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 14px;
	margin-left: ${isDesktop ? 0 : 8}px;
	margin-top: ${isDesktop ? 4 : 0}px;
`;

export const IconContainer = styled.View`
	align-items: center;
	height: 24px;
	justify-content: center;
	width: 28px;
`;
