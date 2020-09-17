import styled from 'styled-components/native';

import illustration from '~/assets/img/illustration-signature.png';

export const Header = styled.View`
	align-items: center;
	flex-direction: row;
	margin-bottom: 100px;
`;

export const Description = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 12px;
	margin-bottom: 4px;
`;

export const Timestamp = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 12px;
`;

interface ImageIconProps {
	size?: number;
}

export const ImageIcon = styled.Image<ImageIconProps>`
	height: ${({ size }) => size}px;
	margin-right: 10px;
	resize-mode: contain;
	width: ${({ size = 16 }) => size}px;
`;

export const CardButton = styled.TouchableOpacity`
	align-items: center;
	background-color: #ddf4f6;
	flex-direction: row;
	justify-content: center;
	padding: 12px;
`;

export const CardButtonText = styled.Text`
	color: ${({ theme }) => theme.colors.secondary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 12px;
`;

export const SignatureIllustration = styled.Image.attrs({
	source: illustration,
})`
	bottom: 20px;
	height: 250px;
	left: 20px;
	position: fixed;
	width: 340px;
`;
