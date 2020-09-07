import styled from 'styled-components/native';

import rocket from '~/assets/img/illustration-rocket.png';
import finance from '~/assets/img/illustration-finance.png';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		minHeight: '100%',
	},
})`
	background-color: ${({ theme }) => theme.background.secondary};
`;

export const Main = styled.View`
	flex-grow: 1;
	position: relative;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: 'VisbyRoundMedium';
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
	font-family: 'VisbyRoundLight';
	margin: 0px 18px;
	text-transform: uppercase;
`;

export const SocialMedia = styled.View`
	flex-direction: row;
	justify-content: space-between;
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
	height: 50%;
	left: -40%;
	position: absolute;
	z-index: -10;
`;

export const Finance = styled.Image.attrs({
	source: finance,
})`
	bottom: -4px;
	height: 26%;
	position: absolute;
	right: -15%;
	z-index: -5;
`;
