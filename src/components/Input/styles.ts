import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const containerStyle = css`
	background-color: ${({ theme }) => theme.background.primary};
	border-color: ${({ theme }) => theme.background.alternative};
	border-style: solid;
	border-width: 1px;
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 13px;
	height: 50px;
	padding: 10px 8px;
`;

export const Container = styled.TextInput`
	${containerStyle};
`;

export const MaskedContainer = styled(TextInputMask)`
	${containerStyle};
`;
