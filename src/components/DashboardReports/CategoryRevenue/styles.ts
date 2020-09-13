import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: column;
`;

export const Legend = styled.View`
	margin-left: 16px;
	margin-right: 20px;
`;

export const Label = styled.View`
	align-items: center;
	flex-direction: row;
	margin: 4px 0px;
`;

export const LabelBullet = styled.View`
	border-radius: 80px;
	height: 8px;
	margin-right: 10px;
	width: 8px;
`;

export const LabelText = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 10px;
`;

export const Description = styled.View`
	align-items: center;
	flex-direction: row;
	margin-left: auto;
	margin-top: 8px;
`;

export const DescriptionBullet = styled(LabelBullet)`
	border-radius: 0px;
`;

export const DescriptionText = styled(LabelText)`
	color: ${({ theme }) => theme.text.secondary};
`;
