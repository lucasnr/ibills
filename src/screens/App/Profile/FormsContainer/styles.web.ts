import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-grow: 1;
	flex-flow: row wrap;
	justify-content: space-between;
	max-width: 1200px;
	width: 100%;

	& > * {
		margin-bottom: 20px;
		margin-right: 0px;
		width: calc(50% - 10px);

		& > * {
			height: 100%;
		}
	}
`;
