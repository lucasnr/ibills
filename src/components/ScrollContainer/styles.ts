import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: 20,
	},
})`
	flex-grow: 0;
	margin-bottom: 20px;
	margin-left: -20px;
	margin-right: -20px;
`;
