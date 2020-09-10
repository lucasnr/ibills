import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		flexDirection: 'column',
		paddingHorizontal: 10,
	},
})`
	border-radius: 5px;
	margin: 0px -10px;
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
	font-family: 'VisbyRoundSemiBold';
	font-size: 12px;
	width: 60px;
	margin-right: 10px;
`;

export const Name = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: 'VisbyRoundLight';
	font-size: 12px;
	width: 180px;
	margin-right: 10px;
`;

export const Type = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: 'VisbyRoundRegular';
	font-size: 12px;
	width: 120px;
	margin-right: 10px;
`;

export const Value = styled.Text<Props>`
	color: ${({ color }) => color};
	font-family: 'VisbyRoundSemiBold';
	font-size: 12px;
	width: 90px;
	margin-right: 10px;
`;
