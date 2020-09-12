import styled from 'styled-components/native';

interface Props {
	cols?: boolean;
}

export const Container = styled.View<Props>`
	align-items: center;
	flex-direction: row;
	margin: ${({ cols = false }) => (cols ? '0px -8px' : '0px')};
`;

export const Col = styled.View`
	padding: 0px 8px;
	flex: 1;
`;
