import styled from 'styled-components/native';

import { padding } from '~/components/AppScreenContainer';

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

export const TableColumnText = styled(TableHeadText)`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.regular};
`;

export const TableIcon = styled(ImageIcon)`
	margin-right: 0px;
`;

TableIcon.defaultProps = { size: 20 };
