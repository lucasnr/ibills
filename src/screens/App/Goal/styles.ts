import styled from 'styled-components/native';

import { isDesktop } from '~/utils/consts';

export const Legend = styled.View`
	margin-left: 32px;
`;

interface LegendTextProps {
	danger?: boolean;
}

export const LegendText = styled.Text<LegendTextProps>`
	color: ${({ danger, theme: { text } }) =>
		danger ? '#FF3614' : text.primary};
	font-size: ${isDesktop ? 14 : 10}px;
	font-family: ${({ theme }) => theme.font.primary.medium};
	margin: 8px 0px;
`;
