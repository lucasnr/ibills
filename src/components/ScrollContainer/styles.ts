import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: 10,
	},
})`
	flex-grow: 0;
	margin: 0px -10px;
	margin-bottom: 20px;
`;
