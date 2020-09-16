import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';

import { isDesktop } from '~/utils/consts';

import rocket from '~/assets/img/illustration-rocket.png';
import finance from '~/assets/img/illustration-finance.png';

const { height, width } = Dimensions.get('window');

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		minHeight: height - (StatusBar.currentHeight || 0),
	},
})`
	background-color: ${({ theme }) => theme.background.secondary};
`;

export const Main = styled.View`
	flex-grow: 1;
	margin: 0px auto;
	max-width: ${isDesktop ? '576px' : 'auto'};
	position: relative;
	width: 100%;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 16px;
	margin-bottom: 26px;
`;

export const Separator = styled.View`
	align-items: center;
	flex-direction: row;
	margin: 25px 0px;
`;

export const SeparatorLine = styled.View`
	background-color: ${({ theme }) => theme.text.secondary};
	flex-grow: 1;
	height: 1px;
`;

export const SeparatorText = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-size: 18px;
	font-family: ${({ theme }) => theme.font.primary.light};
	margin: 0px 18px;
	text-transform: uppercase;
`;

export const SocialMedia = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const SocialMediaIcon = styled.Image`
	height: 20px;
	resize-mode: contain;
	width: 20px;
`;

export const SocialMediaItem = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	align-items: center;
	background-color: ${({ theme }) => theme.background.primary};
	justify-content: center;
	padding: 12px;
	width: 31.5%;
`;

export const Rocket = styled.Image.attrs({
	source: rocket,
})`
	bottom: 0px;
	height: ${isDesktop ? 708 : 387}px;
	left: ${isDesktop ? 0 : -40}%;
	position: absolute;
	width: ${isDesktop ? 740 : 438}px;
	z-index: -10;
`;

export const Finance = styled.Image.attrs({
	source: finance,
})`
	bottom: 0px;
	height: ${isDesktop ? 396 : 201}px;
	position: absolute;
	right: ${isDesktop ? 0 : -15}%;
	width: ${isDesktop ? 423 : 232}px;
	z-index: -15;
`;
