import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	align-items: center;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.background.alternative};
	height: 30px;
	justify-content: center;
	width: 30px;
`;
