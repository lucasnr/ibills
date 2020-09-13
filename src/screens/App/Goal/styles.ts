import styled from 'styled-components/native';

export const Legend = styled.View`
	margin-left: 32px;
`;

interface LegendTextProps {
	danger?: boolean;
}

export const LegendText = styled.Text<LegendTextProps>`
	color: ${({ danger, theme: { text } }) =>
		danger ? '#FF3614' : text.primary};
	font-size: 10px;
	font-family: ${({ theme }) => theme.font.primary.medium};
	margin: 8px 0px;
`;
