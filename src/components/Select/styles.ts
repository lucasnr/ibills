import styled from 'styled-components/native';

import { containerStyle } from '~/components/Input/styles';

export const Container = styled.TouchableOpacity`
	${containerStyle};
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

export const Placeholder = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 13px;
`;

export const Text = styled(Placeholder)`
	color: ${({ theme }) => theme.text.primary};
`;

export const ModalContent = styled.View`
	background-color: rgba(0, 0, 0, 0.5);
	height: 100%;
	justify-content: center;
	width: 100%;
`;

export const OptionsContainer = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	padding: 8px 0px;
`;

interface OptionProps {
	selected?: boolean;
}

export const Option = styled.Text<OptionProps>`
	color: ${({ theme: { text, colors }, selected }) =>
		selected ? colors.secondary : text.primary};
	font-family: ${({ theme }) => theme.font.secondary.bold};
	font-size: 14px;
	padding: 16px;
	text-transform: uppercase;
`;

export const Description = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.secondary.bold};
	font-size: 12px;
	padding: 10px 16px;
`;
