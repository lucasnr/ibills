import styled from 'styled-components/native';

import { isDesktop } from '~/utils/consts';

export const Container = styled.View`
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const Center = styled.View`
	align-items: center;
	justify-content: center;
	position: absolute;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.light};
	font-size: ${isDesktop ? 28 : 22}px;
`;
