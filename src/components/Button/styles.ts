import styled from 'styled-components/native';

import arrow from '~/assets/img/arrow.png';

export const Container = styled.TouchableOpacity`
	align-items: center;
	background-color: ${({ theme }) => theme.background.alternative};
	flex-direction: row;
	justify-content: center;
	padding: 12px;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.text.alternative};
	font-family: 'VisbyRoundBold';
	font-size: 15px;
	text-transform: uppercase;
`;

export const Arrow = styled.Image.attrs({
	source: arrow,
})`
	margin-left: 8px;
	height: 8px;
	width: 16px;
`;
