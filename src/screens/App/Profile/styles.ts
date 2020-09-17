import styled from 'styled-components/native';

import { Card } from '~/components/Card';

import { isDesktop } from '~/utils/consts';

import illustration from '~/assets/img/illustration-profile.png';

const avatarSize = isDesktop ? 120 : 84;

export const Avatar = styled.Image`
	border-radius: 180px;
	border-color: ${({ theme }) => theme.text.alternative};
	border-width: 2px;
	height: ${avatarSize}px;
	margin-right: 24px;
	resize-mode: cover;
	width: ${avatarSize}px;
`;

export const Name = styled.Text`
	align-self: flex-start;
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: ${isDesktop ? 16 : 12}px;
	margin-bottom: 20px;
	margin-top: 8px;
	min-width: ${avatarSize}px;
	text-align: center;
`;

export const AvatarButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.background.primary};
	border-color: ${({ theme }) => theme.colors.alternative};
	border-style: solid;
	border-width: 1px;
	min-width: 160px;
	padding: 10px;
`;

export const AvatarButtonText = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 12px;
	margin-left: 8px;
`;

export const Form = styled(Card)`
	flex-grow: 0;
	margin-bottom: auto;
	width: ${isDesktop ? '100%' : '300px'};
`;

export const ProfileIllustration = styled.Image.attrs({
	source: illustration,
})`
	height: 270px;
	margin-left: auto;
	margin-top: auto;
	width: 430px;
	z-index: -5;
`;
