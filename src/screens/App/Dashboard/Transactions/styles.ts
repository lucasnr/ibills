import styled from 'styled-components/native';

import { padding } from '~/components/AppScreenContainer';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		flexDirection: 'column',
		paddingHorizontal: padding,
	},
})`
	border-radius: 5px;
	margin: 0px -${padding}px;
`;

export const Transaction = styled.View`
	align-items: center;
	background-color: ${({ theme }) => theme.background.primary};
	border-bottom-color: rgba(0, 0, 0, 0.1);
	border-style: solid;
	border-bottom-width: 1px;
	flex-direction: row;
	padding: 10px;
	width: 100%;
`;

export const BulletContainer = styled.View`
	align-items: center;
	background-color: ${({ theme }) => theme.background.secondary};
	height: 16px;
	justify-content: center;
	margin-right: 20px;
	width: 16px;
`;

interface Props {
	color: string;
}

export const Bullet = styled.View<Props>`
	background-color: ${({ color }) => color};
	border-radius: 80px;
	height: 8px;
	width: 8px;
`;

export const Timestamp = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 12px;
	width: 60px;
	margin-right: 10px;
`;

export const Name = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.light};
	font-size: 12px;
	width: 180px;
	margin-right: 10px;
`;

export const Type = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 12px;
	width: 120px;
	margin-right: 10px;
`;

export const Value = styled.Text<Props>`
	color: ${({ color }) => color};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 12px;
	width: 90px;
	margin-right: 10px;
`;
