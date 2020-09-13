import styled from 'styled-components/native';

import { padding } from '~/components/AppScreenContainer';

export const Table = styled.ScrollView.attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		paddingHorizontal: padding,
		flexDirection: 'column',
	},
})`
	margin: 40px -${padding}px;
	margin-bottom: 0px;
`;

export const TableRow = styled.View`
	flex-direction: row;
	margin-bottom: 6px;
`;

interface TableHeadProps {
	width?: number;
}

export const TableHead = styled.View<TableHeadProps>`
	align-items: center;
	padding: 8px;
	width: ${({ width = 150 }) => width}px;
`;

export const TableHeadText = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 14px;
`;

export const TableColumn = styled(TableHead)`
	background-color: ${({ theme }) => theme.background.primary};
	padding: 12px;
`;

interface TableColumnTextProps {
	danger?: boolean;
}

export const TableColumnText = styled(TableHeadText)<TableColumnTextProps>`
	color: ${({ theme: { text }, danger = false }) =>
		danger ? '#FF3614' : text.primary};
	font-family: ${({ theme: { font }, danger = false }) =>
		danger ? font.primary.bold : font.primary.regular};
`;

interface TableIconProps {
	size?: number;
}
export const TableIcon = styled.Image<TableIconProps>`
	height: ${({ size }) => size}px;
	margin-right: 0px;
	resize-mode: contain;
	width: ${({ size = 16 }) => size}px;
`;

TableIcon.defaultProps = { size: 20 };
