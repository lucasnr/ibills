import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;
	justify-content: center;
	margin-right: 16px;
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
	font-size: 22px;
`;
